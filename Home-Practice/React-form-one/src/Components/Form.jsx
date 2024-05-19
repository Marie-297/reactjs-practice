import React, { useState } from 'react';
import Button from './Button' // Import the Button component

function Form() {
  // Define state variables for name and password
  const [name, inputName] = useState(""); // Initialize name state variable with an empty string
  const [password, inputPassword] = useState(""); // Initialize password state variable with an empty string

  // Event handler for name input change
  const nameChange = (e) => {
    inputName(e.target.value); // Update name state with the new value entered in the input field
  };

  // Event handler for password input change
  const passwordChange = (e) => {
    inputPassword(e.target.value); // Update password state with the new value entered in the input field
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(`${name}\n${password}`); // Log the values of name and password to the console
  };

  // Render the form component
  return (
    <div className='form'>
      <form className='main-form' onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form's onSubmit event */}
        <h2>member login</h2>
        {/* Username input field */}
        <input className='form-input name-input' onChange={nameChange} value={name} type="text" placeholder="Username" />
        {/* Password input field */}
        <input className='form-input password-input' onChange={passwordChange} value={password} type="password" placeholder="Password" />
        {/* Submit button */}
        <input className='form-input login' type="submit" value="LOGIN" />
        <div className="form-login">
          {/* Checkbox for saving password */}
          <div className="save-password">
            <input className='checkbox' type="checkbox" id="save-password" name="save-password" />
            <label htmlFor="save-password">Save Password</label>
          </div>
          {/* Forgot password link */}
          <div className="forgot-password">
            <p>Forgot Password</p>
          </div>
        </div>
        {/* Social buttons */}
        <div className="socials">
          <Button color="rgb(0, 105, 173)" buttonName="SOCIAL"/> {/* Button for social login */}
          <Button color="rgb(0, 213, 255)" buttonName="NETWORK" /> {/* Button for network login */}
          <Button color="rgb(255, 61, 88)" buttonName="LINK" /> {/* Button for link login */}
        </div>
      </form>
    </div>
  );
}

export default Form; // Export the Form component
