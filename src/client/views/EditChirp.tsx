import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/fetchData';
import { Card, Container } from 'react-bootstrap';
import { ChirpJOIN } from '../types';

interface EditChirpProps {}

const EditChirp = (props: EditChirpProps) => {
  const [chirps, setChirps] = useState<ChirpJOIN[]>([])

  useEffect(() => {
    fetchData('/api/chirps')
      .then(chirps => setChirps(chirps))
  })

  return (
    <Container>
      <div className="row justify-content-around p-3">
        <div className='col-sm-3 col-md-6'>
          {chirps.map(chirp => (
            <Card key={chirp.id} className=" bg-light rounded-3 mb-3 mt-2">
              <Card.Title className='text-center mt-3'>
                {chirp.handle}
              </Card.Title>
              <Card.Body>
                <Card.Text >
                  {chirp.body}
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-info'>
                Location: {chirp.location}
              </Card.Footer>
            </Card>
          ))};
        </div>
      </div>
    </Container>
  );
};

export default EditChirp;