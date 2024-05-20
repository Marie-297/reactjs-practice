import React, {useState} from 'react'
import Form from './Components/Form'
import { v4 as uuid} from 'uuid';


function App() {
  const [users, setUsers] = useState([
    {name: '', password: '', id:uuid()}
  ])

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
  }
  console.log(users)
  return (
    <div className='form-body'>
      <Form addUser={addNewUser} />
      <div className="span">
        <span>Copyright &copy; 2024,Your Brand Name. Inc</span>
      </div>
    </div>
  )
}

export default App
