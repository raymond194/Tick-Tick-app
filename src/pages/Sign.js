import React from 'react'
import { useState } from "react"
import "../styling/sign.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";

function Sign() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <>
      <div className='sign-container1'>
        <div className='sign-container2'>
          <h4> Sign In </h4>
          <Form>
            <input value={emailValue} className='form-control mb-3' placeholder='Email' onChange={e => setEmailValue(e.target.value)} />
            <input value={passwordValue} className='form-control mb-3' placeholder='Password' onChange={e => setPasswordValue(e.target.value)} />

            <button className='btn btn-primary w-100'>Sign in</button>
          </Form>
          <a href=''>Forgot Password</a>
          <button className='form-control'>Continue with Google</button>
          <button className='form-control'>Continue with Apple</button>
          <span style={{ color: "grey", textAlign: "center" }}>More</span>
          <p style={{textAlign: "center", fontSize: "14px", marginTop: "70px"}}>Don't have an account? Sign Up</p>
        </div>
  
      </div>


    </>
  )
}

export default Sign
