import React from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginUser.css'
import signUp_logo from'../../Assets/signUpbtnlogo.png'

function LoginUser() {
  return (
    <div>
      <div>
        <img className="loginUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      <body>
      <div className='loginUser-main'>
        <div>
          <h2 className='loginUser-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginUser-label'>Username</label>
          <input className='loginMech-input' type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginUser-label'>Password</label>
          <input className='loginMech-input' type='password' placeholder='Password'></input>
        </div>
        <div className='loginUser-Areset'>
        <a className='loginUser-a' href='#'>Reset Password </a>
        </div>
        <div className='loginUser-Asignup'>
          <a className='loginUser-a' href='#'>Signup</a>
        </div>
        <div>
          <button className='loginUser-btn' type='siubmit'>Sign In</button>
          <img  className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        </div>
      </body>
    </div>
  )
}

export default LoginUser