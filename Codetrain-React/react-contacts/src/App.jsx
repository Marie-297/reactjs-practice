import React, { useState } from 'react'
import Contacts from './Components/Contacts'
import ContactsForm from './Components/ContactsForm'
import { v4 as uuid} from 'uuid'

function App() {

  const [contacts, setContacts] = useState([
    {name: 'Phyllis Hackman', phoneNumber: '+233-544-366-122', location: 'American House', id: uuid()},
    {name: 'Jason Mickmann', phoneNumber: '+233-550-144-002', location: 'Oyarifa Ghana-Flag', id: uuid()},
    {name: 'Eunice Hagan', phoneNumber: '+233-234-888-452', location: 'Ogbojo Estate', id: uuid()},
    {name: 'Phill Addison', phoneNumber: '+233-554-989-100', location: 'Cantonments', id: uuid()},
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
