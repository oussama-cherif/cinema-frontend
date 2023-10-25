import { useEffect, useState} from 'react'
import FilmDetails from '../components/FilmDetails'
import { Row, Col } from 'react-bootstrap';

const Films = () => {
    const [films, setFilms] = useState(null)
    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('http://localhost:4000/films')
            const json = await response.json()

            if(response.ok) {
                setFilms(json)
            }
        }
        fetchFilms()
    }, [])
  return (
    <Row>
      {films && films.map((film) => (
          <Col md={3}>
              <FilmDetails key={film._id} film={film}/>
          </Col>
      ))}
    </Row>
  )
}

export default Films