import React from 'react'
import {Card} from 'react-bootstrap'

function BookList(props) {
  return (
    <div>
      <Card style={{ width: '14rem' }} className='carddiv'>
        <Card.Img className='cardtitle' variant="top" src={props.ImgSrc} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.author}
          </Card.Subtitle>
          <Card.Text className='text'>
            {props.description}
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default BookList
