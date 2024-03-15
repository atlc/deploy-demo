import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchData';
import { Chirp } from '../types';


interface ChirpItProps { }

const ChirpIt = (props: ChirpItProps) => {

  const [content, setContent] = useState('');
  const [userID, setUserID] = useState<number | null>(null);
  const [users, setUsers] = useState<{ id: number; handle: string }[]>([]); 
  const navigate = useNavigate()

    useEffect(() => {
    fetchData('/api/users')
      .then(users => setUsers(users))
  }, [])

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userID) {
      console.error('Please select a user to mention.');
      return;
    }

    const chirpData: Omit<Chirp, 'id' | 'createdAt' | 'location'> = {
      user_id: userID,
      body: content
    };

    fetchData('/api/chirps', 'POST', chirpData)
      .then(data => navigate(`/chirps/${data.id}`))
  };
  


  return (
    <Container>
      <div className="row justify-content-around p-3">
        <div className='col-sm-3'>
          <Card className='bg-info' id='chirp-box'>
            <Card.Body>
              <Card.Title className='p-2'>
              </Card.Title>
              <Form onSubmit={handleFormSubmit}>
                <Form.Select size='lg' className='bg-danger' value={userID ?? ''} onChange={(e) => setUserID(Number(e.target.value) || null)}>
                <option>Select User</option>
                {users.map(user => (
                <option key={user.id} value={user.id}>{user.handle}</option>))}
                </Form.Select>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.5em' }}>What's on your mind?</Form.Label>
                  <Form.Control
                    className='bg-light'
                    as="textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={3} />
                </Form.Group>
                <Button type='submit' variant='danger'>Chirp it!</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ChirpIt;

