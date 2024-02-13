import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginWorkshop.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'


function LoginWorkshop() {

  const [State,SetState]=useState({username:'',password:''})

const change=(b)=>{
  SetState({...State,[b.target.name]:b.target.value})
}

let signin=(a)=>{
  a.preventDefault()
  console.log(State)
}

  return (
    <div>
      <form onSubmit={signin}>
      <div>
        <img className="loginWorkshop-img"src={Signin_image} alt='Signin_image'/>
      </div>
     
      <div className='loginWorkshop-main'>
        <div>
          <h2 className='loginWorkshop-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginWorkshop-label'>Username</label>
          <input className='loginWorkshop-input' name='username'  onChange={change}  type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginWorkshop-label'>Password</label>
          <input className='loginWorkshop-input'  name='password'  onChange={change}  type='password' placeholder='Password'></input>
        </div>
        <div className='loginWorkshop-Areset'>
        <a className='loginWorkshop-a' href='#'>Reset Password </a>
        </div>
        <div className='loginWorkshop-Asignup'>
          <a className='loginWorkshop-a' href='#'>Signup</a>
        </div>
        <div>
          <button className='loginWorkshop-btn' type='siubmit'>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>

        </div>
        </div>
        </form>
    </div>
  )
}

export default LoginWorkshop