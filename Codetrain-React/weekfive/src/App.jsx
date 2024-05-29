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
  
  const editUser = (targetid, targetDetails) =>{
    let arr = users.map((user) => {
      if (user.id === targetid) {
        return targetDetails
      } else {
        return user
      }
    })
    setUsers(arr)
    console.log(targetid, targetDetails);
  }

  const deleteUser = (targetid) => {
    let filteredArr = users.filter((user) => {
      if (user.id !== targetid) {
        return user
      }
    })
    setUsers(filteredArr)
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UserForm addUser={addNewUser} />
          </Col>
          <Col>
            <Userlist userlist={users} editUser = {editUser} deleteUser={deleteUser}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
