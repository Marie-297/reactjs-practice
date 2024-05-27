import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './Components/BookList'
import { Container, Row } from 'react-bootstrap'
import BookForm from './Components/BookForm';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <BookForm />
          <hr />
        </Row>
      </Container>
    </div>
  )
}

export default App
