import React, {useState} from 'react';
import Button from './Button';

function Form() {
  const [name, inputName] = useState("")
  const [password, inputPassword] = useState("")

  const nameChange = (e) => {
    inputName(e.target.value)
  }
  const passwordChange = (e) => {
    inputPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${name}\n${password}`);
  }
  return (
    <div className='form'>
      <form className='main-form' onSubmit={handleSubmit}>
        <h2>
          member login
        </h2>
        <input className='form-input name-input' onChange={nameChange} value={name} type="text" placeholder="Username" />
        <input className='form-input password-input' onChange={passwordChange} value={password} type="password" placeholder="Password" />
        <input className='form-input' type="submit" value="LOGIN" />
        <div className="form-login">
          <div className="save-password">
            <input className='checkbox' type="checkbox" id="save-password" name="save-password" />
            <label htmlFor="save-password">Save Password</label>
          </div>
          <div className="forgot-password">
            <p>Forgot Password</p>
          </div>
        </div>
        <div className="socials">
          <Button color="rgb(0, 105, 173)" buttonName="SOCIAL"/>
          <Button color="rgb(0, 213, 255)" buttonName="NETWORK" />
          <Button color="rgb(255, 61, 88)" buttonName="LINK" />
        </div>
      </form>
    </div>
  )
}

export default Form
