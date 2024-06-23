import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';
// import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
// import phone from '../assets/Images/phone-call-svgrepo-com.svg'

function ContactsForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const dispatch = useDispatch()

  // const changeName = (e) => {
  //   setName(e.target.value)
  // }
  // const changeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const changeLocation = (e) => {
  //   setLocation(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: uuid(),
      name,
      email,
      location
    }
    dispatch(addUser(newContact))
    setName("");
    setLocation("");
    setEmail("");
    console.log(name, email, location)
  }

  return (
    <div className='formBody'>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Enter Contact Details</h1>
        <input type="text" className='name' placeholder='Enter your Full Name' value={name} />

        <input className='email' placeholder='Enter your Email address' />

        <input type="text" className='location' placeholder='Enter your current Location' />

        <input type="submit" value="Add New Contact" className='submitbtn' />
      </form>
    </div>
  )
}

export default ContactsForm
