import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { auth, googleProvider } from '../firebase-config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

function Authorisation() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
    }
  }
  const loginWithGoogle = async (e) => {
    e.preventDefault()
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
  }
  const logout = async (e) => {
    e.preventDefault()
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='auth'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          onChange={changeEmail} value={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={changePassword} value={password} />
        </Form.Group>
        <div className='log-btns'>
          <Button variant="primary" type="submit" onClick={login}>
            Log In
          </Button>
          <Button variant="primary" type="submit" onClick={logout}>
            Log Out
          </Button>
        </div>
        <Button variant="primary" type="submit" onClick={loginWithGoogle}>
          Login In With Google
        </Button>
      </Form>
    </div>
  )
}

export default Authorisation
