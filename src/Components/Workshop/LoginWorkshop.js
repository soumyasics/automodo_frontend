import React from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginWorkshop.css'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function LoginWorkshop() {
  return (
    <div>
      <div>
        <img className="loginWorkshop-img"src={Signin_image} alt='Signin_image'/>
      </div>
      <body>
      <div className='loginWorkshop-main'>
        <div>
          <h2 className='loginWorkshop-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginWorkshop-label'>Username</label>
          <input className='loginWorkshop-input' type='text' placeholder='Username'></input>
        </div>
        <div>
          <label className='loginWorkshop-label'>Password</label>
          <input className='loginWorkshop-input' type='password' placeholder='Password'></input>
        </div>
        <div className='loginWorkshop-Areset'>
        <a className='loginWorkshop-a' href='#'>Reset Password </a>
        </div>
        <div className='loginWorkshop-Asignup'>
          <a className='loginWorkshop-a' href='#'>Signup</a>
        </div>
        <div>
          <button className='loginWorkshop-btn' type='siubmit'>Sign In</button>
          <img  className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        </div>
      </body>
    </div>
  )
}

export default LoginWorkshop