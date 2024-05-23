import React, { useState } from 'react'
import Userform from './Components/Userform'
import {v4 as uuid} from 'uuid'

function App() {
  const [users, setUsers] = useState([
    {name: 'John', email: 'john@email.com', id: uuid()}
  ])

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
  }
  console.log(users);

  return (
    <div className='mainform'>
      <Userform />
    </div>
  )
}

export default App
