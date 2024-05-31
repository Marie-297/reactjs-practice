import React from 'react'
import ContactsItem from './ContactsItem';


function ContactList(props) {
  return (
    <div className='details'>
      <ol>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            <div style={{marginBottom:"10px"}}>
              <ContactsItem details={contact} edit={props.editContact} delete={props.deleteContact}/>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ContactList
