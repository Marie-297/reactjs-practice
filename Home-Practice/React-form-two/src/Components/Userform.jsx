import React, { useState } from 'react'


function Userform() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const nameChange = (e) => {
    setName(e.target.value)
  }

  const passwordhange = (e) => {
    setPassword(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className='formbody' onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Username</label>
          <input type="text" value={name} onChange={nameChange} placeholder='e.g. Paul Date' />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input type="text" value={password} onChange={passwordhange} placeholder='***********' />
        </div>

        <div className="saveInfo">
          <input type="submit" value='Sign In' />
          <a href="">
            <p>Forgot Password?</p>
          </a>
        </div>
        <a href="">
          <p className='create'>Create an account</p>
        </a>
      </form>
    </div>
  )
}

export default Userform
