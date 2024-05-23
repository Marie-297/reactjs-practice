import React, { useState } from 'react'
import Contacts from './Components/Contacts'

function App() {

  const [contacts, setContacts] = useState([
    {name: 'Phyllis Hackman', phoneNumber: '+233-544-366-122', location: 'American House'},
    {name: 'Jason Mickmann', phoneNumber: '+233-550-144-002', location: 'Oyarifa Ghana-Flag'},
    {name: 'Eunice Hagan', phoneNumber: '+233-234-888-452', location: 'Ogbojo Estate'},
    {name: 'Phill Addison', phoneNumber: '+233-554-989-100', location: 'Cantonments'},
  ])

  return (
    <div>
      <Contacts contacts={contacts}/>
    </div>
  )
}

export default App
