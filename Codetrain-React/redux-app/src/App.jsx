import React from 'react'
import ContactsForm from './Components/ContactsForm'
import ContactList from './Components/ContactList'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ContactsForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
