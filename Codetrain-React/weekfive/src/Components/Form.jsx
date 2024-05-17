import React, {useState} from 'react'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const changeName = (e) => {
    setName(e.target.value)
  } 
  const changeEmail = (e) => {
    setEmail(e.target.value)
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={changeName} value={name} type="text" placeholder='Enter Your Name' />
        <input onChange={changeEmail} value={email} type="email" placeholder='Enter your email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
