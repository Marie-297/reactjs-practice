import React, {useState} from 'react'
import Form from './Components/Form'


function App() {
  const [users, setUsers] = useState([
    {name: '', password: '', id:''}
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
