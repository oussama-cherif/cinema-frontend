import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function FilmPage() {
  const [film, setFilm] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    const fetchFilm = async () => {
      const response = await fetch(`http://localhost:4000/films/${id}`);
      const json = await response.json();

      if(response.ok) {
          setFilm(json);
      }
    }
    fetchFilm();
  }, [id]); 

  if (!film) return <div>Chargement...</div>;

  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <Image src={film.imageUrl} alt={film.title} fluid />
        </Col>
        <Col md={8}>
          <h1>{film.title}</h1>
          <p><strong>Description :</strong> {film.description}</p>
          <p><strong>Réalisateur :</strong> {film.director}</p>
          <p><strong>Acteurs principaux :</strong></p>
          <ul>
            {film.mainActors.map(actor => <li key={actor}>{actor}</li>)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FilmPage;