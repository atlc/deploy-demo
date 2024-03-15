import React, { useEffect, useState } from 'react';
import { ChirpJOIN } from '../types';
import { Card, Container } from 'react-bootstrap';
import { fetchData } from '../services/fetchData';
import { Link } from 'react-router-dom';


interface HomeProps { }

const Home = (props: HomeProps) => {

  const [chirps, setChirps] = useState<ChirpJOIN[]>([])

  useEffect(() => {
    fetchData('/api/chirps')
      .then(chirps => setChirps(chirps))
  },[])

  return (
    <Container>
      <div className="row justify-content-around p-3">
        <div className='col-sm-3 col-md-6'>
          {chirps.map(chirp => (
            <Card key={chirp.id} className=" bg-light rounded-3 mb-3 mt-2">
              <Card.Title className='text-center mt-2'>
                @{chirp.handle}
              </Card.Title>
              <Card.Body>
                <Card.Text >
                  {chirp.body}
                </Card.Text>
                <Link to={`chirps/${chirp.id}`} className='btn btn-danger'>Details</Link>
              </Card.Body>
            </Card>
          ))};
        </div>
      </div>
    </Container>
  );
};

export default Home;