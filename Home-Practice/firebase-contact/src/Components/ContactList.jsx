import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { db } from '../firebase-config/firebase'

function ContactList(props) {
  const {contacts, setContacts} = props
  const [modal, setmodal] = useState(false)
  const changeModal = () => {
    setmodal(!modal)
  }
  const [name, setName] = useState("")
  const [phone, setphone] = useState("")
  const [location, setLocation] = useState("")
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changePhone = (e) => {
    setphone(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }
  const deleteContact = async(id) => {
    try {
      const contactDoc = doc(db, "contacts", id)
      await deleteDoc(contactDoc)
      setContacts(contacts.filter((contact) => contact.id!== id))
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  }
  // const editContact = async(id) => {
  //   try {
  //     const contactDoc = doc(db, "contacts", id)
  //     await updateDoc(contactDoc, {fullName: name, phoneNumber: phone, location: location})
  //     setContacts(contacts.map((contact) => contact.id=== id ? { ...contact, fullName: name, phoneNumber: phone, location: location } : contact
  //   ))
   
  //   } catch (err) {
  //     console.error("Error updating contact: ", err);
  //   }
  // }
  return (
    <div>
      <h1>Contact Lists</h1>
      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <h3>{contact.fullName}</h3>
            <h5>{contact.phoneNumber}</h5>
            <h5>{contact.location}</h5>
            <Button variant="danger" onClick={() => deleteContact(contact.id)}>Delete</Button>{' '}
            <Button variant="info" onClick={changeModal}>Edit</Button>{' '}

            <Modal show={modal} onHide={changeModal} size='sm' backdrop={false} >
              <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name..." value={name} onChange={changeName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter your current Phone number..." value={phone} onChange={changePhone} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasiclocation">
                  <Form.Label>Location/Town/City</Form.Label>
                  <Form.Control type="text" placeholder="Enter your current Location..." value={location} onChange={changeLocation} />
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={changeModal}>Close</Button>
                <Button variant="primary"\\\>Save changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      })}
    </div>
  )
}

export default ContactList
