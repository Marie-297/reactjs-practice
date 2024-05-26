import React from 'react'

function Contacts(props) {
  return (
    <div className='details'>
      {props.contacts.map((contact) => (
        <div>
        <h3>{contact.name}</h3>
        <p>{contact.phoneNumber}</p>
        <p>{contact.location}</p>
      </div>
      ))}
    </div>
  )
}

export default Contacts
