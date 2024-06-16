import React, { useState } from 'react'

function Signup() {

  const [signupDetail, setSignupDetail] = useState(
    {email: '', password: '',passwordConfirm: '', ischecked: false}
  )
  const handleChange = (e) => {
    setSignupDetail(prevDetail => {
      const {name, type, value, checked} = e.target
      return {
       ...prevDetail, [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSignupDetail({
    //   email: '',
    //   password: '',
    //   passwordConfirm: '',
    //   ischecked: false
    // })
    if (signupDetail.password === signupDetail.passwordConfirm) {
      console.log('Password Match')
    } else {
      alert('Password does not match')
      return;
    }
    if (signupDetail.ischecked !== false) {
      alert('Thanks for subscribing to our Newsletter')
    }
  }
  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" name='email' onChange={handleChange} value={signupDetail.email} placeholder='Enter your email' />
        <input type="password" name='password' onChange={handleChange} value={signupDetail.password} placeholder='Enter Password' />
        <input type="password" name='passwordConfirm' onChange={handleChange} value={signupDetail.passwordConfirm} placeholder='Confirm Password' />
        <div className="subscribe">
          <input type="checkbox" id='subscribe' name='ischecked' checked={signupDetail.ischecked} onChange={handleChange} />
          <label htmlFor="subscribe">Subscribe to our Newsletter</label>
        </div>
        <input type="submit" className='btn' />
        </form>
    </div>
  )
}

export default Signup
