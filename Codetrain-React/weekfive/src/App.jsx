import React, { useState} from 'react'
import UserForm from './Components/UserForm'
import Userlist from './Components/Userlist'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid} from 'uuid';

function App() {

  const [users, setUsers] = useState([
    {name: 'John Hayford', email: 'john@email.com', id: uuid()},
    {name: 'Harvey Blanc', email: 'harvey@email.com', id: uuid()}
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
            <Userlist userlist={users}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
