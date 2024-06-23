import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { editUser, deleteUser} from '../slices/userSlice'
import { useDispatch } from 'react-redux'

function ContactsItem(props) {
  const dispatch = useDispatch()
  const { contact } = props
  const [modal, setModal] = useState(false)
  const changeModal = () => {
    setModal(!modal)
  }
  const [name, setName] = useState(contact.name)
  const [email, setEmail] = useState(contact.email)
  const [location, setLocation] = useState(contact.location)
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleEdit = (e) => {
    changeModal()
    e.preventDefault()
    let newEdit = {
      name,
      email,
      location,
    }
    dispatch(editUser({
      id: contact.id,
      newEdit,
    }))
  }
  const handleDelete = (e) => {
    dispatch(deleteUser(contact.id))
  }
  

  return (
    <div className='details'>
      <h2>{contact.name}</h2>
      <h4>{contact.email}</h4>
      <h4>{contact.location}</h4>
      <div className="btns">
        <Button variant="primary" onClick={changeModal}>Edit</Button>{' '}
        <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      </div>
      
      <Modal show={modal} onHide={changeModal} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form'>
            <input type="text" className='name' placeholder='Enter your Full Name' value={name} onChange={changeName} />

            <input className='email' placeholder='Enter your Email address' value={email} onChange={changeEmail} />

            <input type="text" className='location' placeholder='Enter your current Location' value={location} onChange={changeLocation} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={changeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ContactsItem
