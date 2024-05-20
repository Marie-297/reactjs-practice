import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { v4 as uuid} from 'uuid';

function UserForm(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const changeName = (e) => {
    setName(e.target.value)
  } 
  const changeEmail = (e) => {
    setEmail(e.target.value)
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== "" && email !== "") {
      let newUser = {
        name: name,
        email: email,
        id: uuid()
      }
      props.addUser(newUser)
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="text" value={name} onChange={changeName} placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" value={email} onChange={changeEmail} placeholder="Email Address" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UserForm
