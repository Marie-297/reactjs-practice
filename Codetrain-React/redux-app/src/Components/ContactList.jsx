import React, { useState } from 'react'
// import ContactsItem from './ContactsItem';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';


function ContactList() {
  const state = useSelector((state) => {
    return state.userReducer;
  })
 
  return (
    <div className='list'>
      <h1>CONTACT LISTS</h1>
      {state.users.map((contact) => {
        return (
          <div key={contact.id} className='listitem'>
            <ContactsItem contact={contact} />
          </div>
        )
      })}
    </div>
  )
}

export default ContactList
