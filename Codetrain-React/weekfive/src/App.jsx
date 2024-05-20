import React, { useState} from 'react'
import UserForm from './Components/UserForm'
import Userlist from './Components/Userlist'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [users, setUsers] = useState([
    {name: 'John Hayford', email: 'john@email.com', id: '1'},
    {name: 'Harvey Blanc', email: 'harvey@email.com', id: '2'}
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
  };
  console.log(users);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <UserForm addUser={addNewUser} />
          </Col>
          <Col>
            <Userlist />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
