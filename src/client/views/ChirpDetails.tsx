import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChirpJOIN } from '../types';
import { fetchData } from '../services/fetchData';
import { Card, Container } from 'react-bootstrap';


interface ChirpDetailsProps { }

const ChirpDetails = (props: ChirpDetailsProps) => {
  const { id } = useParams();
  const [chirp, setChirp] = useState<ChirpJOIN[]>([])

  useEffect(() => {
    fetchData(`/api/chirps/${id}`)
      .then(chirp => setChirp(chirp))
  }, [id])

  return (
    <Container>
      <div className="row justify-content-around p-3">
        <div className='col-sm-3 col-md-6'>
          {chirp.map(chirp => (
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

export default ChirpDetails;