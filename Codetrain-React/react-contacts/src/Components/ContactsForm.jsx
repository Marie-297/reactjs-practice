import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import phone from '../assets/Images/phone-call-svgrepo-com.svg'

function ContactsForm(props) {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [location, setLocation] = useState('')

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newContact = {
      name: name,
      phoneNumber: number,
      location: location,
    }
    props.addContact(newContact)
    setName("");
    setLocation("");
    setNumber("");
    console.log(name, number, location)
  }

  return (
    <div className='formBody'>
      <form onSubmit={handleSubmit} className='form'>
        <h1 style={{textAlign:"center", marginBottom: "30px"}}>Enter Contact Details</h1>
        <input type="text" className='name' placeholder='Enter your Full Name' value={name} onChange={changeName} />

        <div style={{position: 'relative', width: '100%'}}>
          <PhoneInput className='number' inputStyle={{ width: '100%', position: 'relative' }} country={'gh'} placeholder='Enter your Phone Number' value={number} onChange={setNumber} />
          <img src={phone} alt="" />
        </div>

        <input type="text" className='location' placeholder='Enter your current Location' value={location} onChange={changeLocation} />

        <input type="submit" value="Add New Contact" className='submitbtn' />
      </form>
    </div>
  )
}

export default ContactsForm
