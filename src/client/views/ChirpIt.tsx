import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchData';



interface ChirpItProps { }

const ChirpIt = (props: ChirpItProps) => {

  // const [user, setUser] = useState('')
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate()

  // const handleUserChange = (e: any) => {
  //   setUser(e.target.value);
  // }

  const handleContentChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchData('/api/chirps', 'POST', [{ body: content }])
      .then(data => navigate(`/chirps/${data.id}`));
  };

  // const handleClick = () => {
  //   if (user && content !== '') {
  //     setContent('');
  //     setUser('');
  //   }
  // };


  return (
    <Container>
      <div className="row justify-content-around p-3">
        <div className='col-sm-3'>
          <Card className='bg-info' id='chirp-box'>
            <Card.Body>
              <Card.Title className='p-2'>
              </Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: '1.5em' }}>What's on your mind?</Form.Label>
                  <Form.Control
                    className='bg-light'
                    as="textarea"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows={3} />
                </Form.Group>
              </Form>
              <Button onClick={handleContentChange} variant='danger'>Chirp it!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ChirpIt;