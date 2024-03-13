import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';




interface ChirpItProps { }

const ChirpIt = (props: ChirpItProps) => {

const [username, setUsername] = useState('')
const [content, setContent] = useState('');

const handleUsernameChange = (e:any) => {
    setUsername(e.target.value);
}

const handleContentChange = (e:any) => {
    setContent(e.target.value);
}

const handleClick = () => {
  if (username && content !== '') {
      setContent('');
      setUsername('');
  }
};


  return (
      <Container>
        <div className="row justify-content-around p-3">
          <div className='col-sm-3'>
            <Card className='bg-light' id='chirp-box'>
              <Card.Body>
                <Card.Title className='p-2'>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="blank-content">@</InputGroup.Text>
                    <Form.Control
                      className='bg-info'
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-user"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </InputGroup>
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '1.5em' }}>What's on your mind?</Form.Label>
                    <Form.Control
                      className='bg-info'
                      as="textarea"
                      value={content}
                      onChange={handleContentChange}
                      rows={3} />
                  </Form.Group>
                </Form>
                <Button onClick={handleClick} variant='danger'>Chirp it!</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
  );
};

export default ChirpIt;