import React from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './LoginMech.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function LoginMechanic() {
  return (
    <div>
      <div>
        <img className="loginMech-img"src={Signin_image} alt='Signin_image'/>
      </div>
      <body>
      <div className='loginMech-main'>
        <div>
          <h2 className='loginMech-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginMech-label'>Username</label>
          <input className='loginMech-input' type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginMech-label'>Password</label>
          <input className='loginMech-input' type='password' placeholder='Password'></input>
        </div>
        <div className='loginMech-Areset'>
        <a className='loginMech-a' href='#'>Reset Password </a>
        </div>
        <div className='loginMech-Asignup'>
          <a className='loginMech-a' href='#'>Signup</a>
        </div>
        <div>
          <button className='loginMech-btn' type='submit'>Sign In <img className='signupLogo' src={SignupLogo} /></button>
       
        </div>
        
        </div>
      </body>
      
    </div>
  )
}

export default LoginMechanic