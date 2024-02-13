import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './LoginMech.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function LoginMechanic() {

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
        <img className="loginMech-img"src={Signin_image} alt='Signin_image'/>
      </div>
     
      <div className='loginMech-main'>
        <div>
          <h2 className='loginMech-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginMech-label'>Username</label>
          <input className='loginMech-input'  name='username'  onChange={change} type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginMech-label'>Password</label>
          <input className='loginMech-input' name='password'  onChange={change}  type='password' placeholder='Password'></input>
        </div>
        <div className='loginMech-Areset'>
        <a className='loginMech-a' href='#'>Reset Password </a>
        </div>
        <div className='loginMech-Asignup'>
          <a className='loginMech-a'  href='#'>Signup</a>
        </div>
        <div>
          <button className='loginMech-btn' type='submit'>Sign In <img className='signupLogo' src={SignupLogo} /></button>
       
        </div>
        
        </div>
   </form>
      
    </div>
  )
}

export default LoginMechanic