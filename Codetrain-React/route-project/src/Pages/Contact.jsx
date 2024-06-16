import React, { useState } from 'react'
import Signup from '../Components/Signup'

function Contact() {

  const [formDetail, setFormDetail] = useState(
  {firstname: "", lastname: "", email: "", textarea: "",isChecked: true, reply: ''}
  )
  const handleSubmit = (e) => {
   setFormDetail(prevDetail => {
    const {name, value, type, checked} = e.target
     return {
       ...prevDetail, [name]: type === "checkbox" ? checked : value
     }
   })
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    setFormDetail({
      firstname: "",
      lastname: "",
      email: "",
      textarea: "",
      isChecked: true,
      reply: ''
    });
    console.log(formDetail);
  }

  return (
    <div className='contact'>
      <div className="contactus">
        <h1>CONTACT US NOW</h1>
        <form onSubmit={handleSubmitForm}>
          <input type="text" name='firstname' placeholder='Enter First Name' onChange={handleSubmit} value={formDetail.firstname} />
          <input type="text" name='lastname' placeholder='Enter Last Name' onChange={handleSubmit} value={formDetail.lastname} />
          <input type="email" name='email' placeholder='Enter Email' onChange={handleSubmit} value={formDetail.email} />
          <textarea name="textarea" placeholder='Write your message here...' rows='5' col='200'onChange={handleSubmit} value={formDetail.textarea} />
          <div className="check">
            <input type="checkbox" id='isChecked' checked={formDetail.isChecked} name='isChecked' onChange={handleSubmit} />
            <label htmlFor="isChecked">Are you okay with our services and products?</label>
          </div>
          <fieldset>
            <legend>Reply Your Messages By...</legend>
            <input type="radio" id='sms' name='reply' value='Text Messages' onChange={handleSubmit} checked={formDetail.reply === 'Text Messages'} />
            <label htmlFor="sms" >Text Message</label><br/>
            <input type="radio" id='mail' name='reply' value='Email Address' onChange={handleSubmit} checked={formDetail.reply === 'Email Address'} />
            <label htmlFor="mail">Email Address</label><br/>
            <input type="radio" id='phone' name='reply' value='Phone Call' onChange={handleSubmit} checked={formDetail.reply === 'Phone Call'} />
            <label htmlFor="phone">Phone Call</label><br/>
          </fieldset>
          <input type="submit" value='Send Message' className='button' />
        </form>
      </div>
      <div className="signup">
        <Signup />
      </div>
    </div>
  )
}

export default Contact
