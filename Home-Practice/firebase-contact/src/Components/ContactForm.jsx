import { addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function ContactForm(props) {
  const { collectionRef, getContact } = props
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
  const addContact = async(e) => {
    e.preventDefault()
    try {
      await addDoc(collectionRef, {fullName: name, phoneNumber: phone, location: location})
      getContact()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Form onSubmit={addContact}>
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
        <Button variant="primary" type="submit">
          Add Contact Details
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
