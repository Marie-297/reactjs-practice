import React, { useState } from 'react'
import ContactList from './Components/ContactList'
import ContactsForm from './Components/ContactsForm'
import { v4 as uuid} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const editContact = (editContactid,editDetails) => {
    const arr = contacts.map((contact) => {
      if (contact.id === editContactid) {
        return editDetails
      } else {
        return contact
      }
    })
    setContacts(arr)
  }

  const deleteContact = (delContactid) => {
    let filteredContact = contacts.filter((contact) => {
      if (contact.id !== delContactid) {
        return contact
      }
    })
    setContacts(filteredContact)
  }

  return (
    <div className='mainbody'>
      <div className="left-col">
        <ContactsForm addContact = {handleAddContact} />
      </div>
      <div className="right-col">
        <ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact}/>
      </div>
    </div>
  )
}

export default App
