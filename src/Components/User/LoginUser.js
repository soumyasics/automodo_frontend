import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginUser.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function LoginUser() {

const [State,SetState]=useState({username:'',password:''})

const change=(b)=>{
  SetState({...State,[b.target.name]:b.target.value})
}

let signin=(a)=>{
  a.preventDefault()
  console.log(State)
}


  return (
    <div >
      <form onSubmit={signin}>
      <div>
        <img className="loginUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='loginUser-main'>
        <div>
          <h2 className='loginUser-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginUser-label'>Username</label>
          <input className='loginUser-input' name='username'  onChange={change}  type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginUser-label'>Password</label>
          <input className='loginUser-input' name='password'  onChange={change}  type='password' placeholder='Password'></input>
        </div>
        <div className='loginUser-Areset'>
        <a className='loginUser-a' href='#'>Reset Password </a>
        </div>
        <div className='loginUser-Asignup'>
          <a className='loginUser-a' href='#' >Signup</a>
        </div>
        <div>
          <button className='loginUser-btn' type='submit'>Sign In  <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
      </form>
    </div>
  )
}

export default LoginUser