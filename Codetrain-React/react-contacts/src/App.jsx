import React, { useState } from 'react'

function App() {

  const [contacts, setContacts] = useState([
    {name: 'Phyllis Hackman', phoneNumber: '+233-544-366-122', location: 'American House'},
    {name: 'Jason Mickmann', phoneNumber: '+233-550-144-002', location: 'Oyarifa Ghana-Flag'},
    {name: 'Eunice Hagan', phoneNumber: '+233-234-888-452', location: 'Ogbojo Estate'},
    {name: 'Phill Addison', phoneNumber: '+233-554-989-100', location: 'Cantonments'},
  ])

  return (
    <div>
      {contacts.map((contact, index) => (
        <div>
        <h3>{contact.name}</h3>
        <p>{contact.phoneNumber}</p>
        <p>{contact.location}</p>
      </div>
      ))}
    </div>
  )
}

export default App
