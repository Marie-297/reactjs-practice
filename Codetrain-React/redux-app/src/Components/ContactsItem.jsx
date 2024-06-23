import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Contacts(props) {

  const [modal, setModal] = useState(false)

  const changeModal = () => {
    setModal(!modal)
  }

  const [contactname, setName] = useState(props.details.name)
  const [number, setNumber] = useState(props.details.phoneNumber)
  const [location, setLocation] = useState(props.details.location)

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }
  const changeNumber = (e) => {
    setNumber(e.target.value)
  }
  
  const handleEdit = (e) => {
    e.preventDefault()
    let editDetails = {
        name: contactname,
        phoneNumber: number,
        location: location,
      }
    let mergedEditDetails = {...props.details,...editDetails}
    props.edit(props.details.id,mergedEditDetails)
    changeModal();
  }

  return (
    <div className='details'>
      <h3>{props.details.name}</h3>
      <p>{props.details.phoneNumber}</p>
      <p>{props.details.location}</p>
      <button onClick={changeModal} className='editbtn but'>Edit</button>
      <button className='delbtn but' onClick={() => props.delete(props.details.id)}>Delete</button>

      <Modal show={modal} onHide={changeModal} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className='form'>
            <input type="text" className='name' placeholder='Enter your Full Name' value={contactname} onChange={changeName} />

            <input className='number' country={'gh'} placeholder='Enter your Phone Number' value={number} onChange={changeNumber} />

            <input type="text" className='location' placeholder='Enter your current Location' value={location} onChange={changeLocation} />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={changeModal}>Close</Button>
          <Button variant="primary" onClick={handleEdit}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Contacts
