import React, { useEffect, useState } from 'react';
import { Chirp } from '../types';
import { Card, Container } from 'react-bootstrap';
import { fetchData } from '../services/fetchData';


interface HomeProps {}

const Home = (props: HomeProps) => {

  const [chirps, setChirps] = useState<Chirp[]>([])

  useEffect(() =>{
    fetchData('/api/chirps')
      .then(chirps => setChirps(chirps))
  })

  return (
    <Container>
    <div>
    {chirps.map(chirp =>(
    <Card key={chirp.id} className=" bg-light rounded-3 mb-3 mt-2">
      <Card.Body>
        <Card.Text >
          {chirp.body}
        </Card.Text>
      </Card.Body>
    </Card>
  ))};
  </div>
  </Container>
  );
};

export default Home;