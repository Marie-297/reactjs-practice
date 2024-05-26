import React, { useState } from 'react'
import Contacts from './Components/Contacts'
import ContactsForm from './Components/ContactsForm'

function App() {

  const [contacts, setContacts] = useState([
    {name: 'Phyllis Hackman', phoneNumber: '+233-544-366-122', location: 'American House'},
    {name: 'Jason Mickmann', phoneNumber: '+233-550-144-002', location: 'Oyarifa Ghana-Flag'},
    {name: 'Eunice Hagan', phoneNumber: '+233-234-888-452', location: 'Ogbojo Estate'},
    {name: 'Phill Addison', phoneNumber: '+233-554-989-100', location: 'Cantonments'},
  ])
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact])
  }
  console.log(contacts);

  return (
    <div className='mainbody'>
      <div className="left-col">
        <ContactsForm addContact = {handleAddContact} />
      </div>
      <div className="right-col">
        <Contacts contacts={contacts}/>
      </div>
    </div>
  )
}

export default App
