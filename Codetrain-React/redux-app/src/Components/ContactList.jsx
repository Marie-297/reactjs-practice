import React from 'react'
// import ContactsItem from './ContactsItem';
import { useSelector } from 'react-redux';


function ContactList() {
  const state = useSelector((state) => {
    return state.userReducer;
  })
  return (
    <div className='list'>
      <h1>CONTACT LISTS</h1>
      {state.users.map((contact) => {
        return (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <h4>{contact.email}</h4>
            <h4>{contact.location}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default ContactList
