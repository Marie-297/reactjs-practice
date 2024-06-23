import React from 'react'
// import ContactsItem from './ContactsItem';
import { useSelector } from 'react-redux';


function ContactList() {
  const state = useSelector((state) => {
    return state.userReducer;
  })
  return (
    <>
      state.contacts.map((contact) => {
          <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.location}</p>
          </div>
      })
    </>
  )
}

export default ContactList
