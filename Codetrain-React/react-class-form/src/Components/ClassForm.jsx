import React, { useState } from 'react'

function ClassForm() {

  const [name, nameInput] = useState("")
  const [email, emailInput] = useState("")
  const [password, passwordInput] = useState("")
  const [hover, sethover] = useState(false)

  const nameChange = (e) => {
    nameInput(e.target.value)
  }
  const emailChange = (e) => {
    emailInput(e.target.value)
  }
  const passwordChange = (e) => {
    passwordInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password);
  }
  const onHover = () => {
    sethover(true)
  }
  const offHover = () => {
    sethover(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-paper'>
        <div className="row">
          <label htmlFor="name">UserName:</label>
          <input type="text" value={name} placeholder='Enter your name here' onChange={nameChange} />
        </div>
        <div className="row">
          <label htmlFor="email">Email Address:</label>
          <input type="email" value={email} placeholder='Enter your email here' onChange={emailChange} />
        </div>
        <div className="row">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} placeholder='Enter your password' onChange={passwordChange} />
        </div>
        <div className="row-submit">
          <input type="submit" onMouseEnter={offHover} onMouseLeave={onHover} className='button' style={{color: hover ? "balck" : "darkred"}} />
          <a href="">Forgot Password</a>
        </div>
      </form>
    </div>
  )
}

export default ClassForm
