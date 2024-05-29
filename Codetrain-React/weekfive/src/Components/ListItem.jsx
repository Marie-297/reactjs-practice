import React, { useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

function ListItem(props) {

  const [modal, setModal] = useState(false)

  const changeModalState = () => {
    setModal(!modal)
  }
  const [name, setName] = useState(props.details.name)
  const [email, setEmail] = useState(props.details.email)

  const changeName = (e) => {
    setName(e.target.value)
  } 
  const changeEmail = (e) => {
    setEmail(e.target.value)
  } 
  const handleEdit = (e) => {
    e.preventDefault()
    let targetDetails =  {
      name: name,
      email: email,
    }
    let mergedTargetDetails = {...props.details, ...targetDetails}
    props.editTargetUser(props.details.id,mergedTargetDetails)
    changeModalState();
  }

  return (
    <div>
      <h2>{props.details.name}</h2>
      <h4>{props.details.email}</h4>
      <Button variant="primary" onClick={changeModalState}>Edit</Button>
      <Button variant="danger" onClick={() => props.deleteTargetUser(props.details.id)}>Delete</Button>

      <Modal show={modal} onHide={changeModalState}> 
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <Form onSubmit={changeModalState}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Full Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={changeName} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={changeEmail} placeholder="Email Address" />
                </Form.Group>
              </Form>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={changeModalState}>Close</Button>
            <Button variant="primary" onClick={handleEdit}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

    </div>
  )
}

export default ListItem
