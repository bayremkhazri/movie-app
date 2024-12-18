import React from 'react'
import Card from 'react-bootstrap/Card';


const Movies = ({id,title,rate,description, posterUrl,trailer}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ posterUrl} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Card.Text>
          {rate}
        </Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {  trailer}
        </Card.Text>
      
        </Card.Body>
        </Card>
      
    </div>
  )
}

export default Movies;
