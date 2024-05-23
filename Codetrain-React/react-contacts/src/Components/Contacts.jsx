import React from 'react'

function Contacts(props) {
  return (
    <div>
      {props.contacts.map((contact, index) => (
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
