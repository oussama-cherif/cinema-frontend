import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const FilmDetails = ({ film }) => {
  return (
    <Link to={`/films/${film._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img variant="top" src={film.imageUrl} />
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default FilmDetails;