import React from 'react'
import { v4 as uuid} from 'uuid'

function Contacts(props) {
  return (
    <div className='details'>
     <ol>
        {props.contacts.map((contact) => (
          <li key={uuid()}>
            <div style={{marginBottom:"10px"}}>
              <h3>{contact.name}</h3>
              <p>{contact.phoneNumber}</p>
              <p>{contact.location}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Contacts
