import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/fetchData';
import { Card, Container } from 'react-bootstrap';
import { ChirpJOIN } from '../types';


interface EditChirpProps {}

const EditChirp = (props: EditChirpProps) => {
  const [chirps, setChirps] = useState<ChirpJOIN[]>([])
  
  
  const [selectedChirp, setSelectedChirp] = useState<ChirpJOIN | null> (null)

  function setupEdit (chirp:ChirpJOIN) {
    setSelectedChirp(chirp)

  }

  function handleSubmitEdit () {
    fetchData(`/api/chirps/${selectedChirp?.id}`, 'PUT', selectedChirp)
      .then(() => {
        getChirps()
        setSelectedChirp(null)
      })
  }

 function getChirps() {
    fetchData('/api/chirps')
      .then(chirps => setChirps(chirps))
  }

  useEffect(() => {
    getChirps()
  }, [])

  const handleDelete = (id:number) =>{
    
    fetchData(`/api/chirps/${id}`, 'DELETE')
      .then(data => console.log(data.message))
      .then(getChirps)
  }

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
                <textarea className='form-control bg-light' value={chirp.id === selectedChirp?.id ? selectedChirp?.body : chirp.body} onChange={(e) => chirp.id === selectedChirp?.id ? setSelectedChirp({ ...selectedChirp, body: e.target.value  }) : null} readOnly={chirp.id !== selectedChirp?.id} />
                {chirp.id === selectedChirp?.id ? <button onClick={handleSubmitEdit} className='bg-primary'>Submit</button> : <button onClick={() => setupEdit(chirp)}>Edit Body</button>}
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-info'>
                Location: {chirp.location}
              </Card.Footer>
              <button onClick={() => handleDelete(chirp.id)} className='bg-danger'>Delete Chirp</button>
            </Card>
          ))};
        </div>
      </div>
    </Container>
  );
};

export default EditChirp;