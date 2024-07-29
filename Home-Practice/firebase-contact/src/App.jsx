import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Authorisation from './Components/Authorisation';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config/firebase';

function App() {

  const [contacts, setContacts] = useState([])
  const collectionRef = collection(db, "contacts")
  const getContact = async() => {
    try {
      const data = await getDocs(collectionRef)
      const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setContacts(filteredData)
      console.log(filteredData);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  }
  useEffect(() => {
    getContact()
  },[]);

  return (
    <div>
      <Authorisation />
      <ContactForm collectionRef={collectionRef} getContact={getContact}/>
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  )
}

export default App
