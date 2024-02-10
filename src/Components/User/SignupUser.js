import React from 'react'
import './signupUser.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupUser() {
  return (
    <div>
        <div>
        <img className="signupUser-img"src={Signin_image} alt='Signin_image'/>
        </div>
        <body>
      <div className='signupUser-main'>
        <div>
          <h2 className='signupUser-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupUser-submain col-2'>
        <div>
          <label className='signupUser-label'>Name</label>
          <input className='signupUser-input' type='text' placeholder='Name'></input>
        </div>
        <div>
          <label className='signupUser-label'>Age</label>
          <input className='signupUser-input' type='number' placeholder='Age'></input>
        </div>
        <div>
          <label className='signupUser-label'>Email</label>
          <input className='signupUser-input' type='email' placeholder='Email'></input>
         </div>
        <div>
          <label className='signupUser-label'>Street</label>
          <input className='signupUser-input' type='text' placeholder='Street'></input>
        </div>
        <div>
          <label className='signupUser-label'>City</label>
          <input className='signupUser-input' type='text' placeholder='City'></input>
        </div>
        <div>
          <label className='signupUser-label'>State</label>
          <input className='signupUser-input' type='text' placeholder='State'></input>
          <select className='signupUser-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select>
        </div>
        <div>
          <label className='signupUser-label'>Nationality</label>
          <input className='signupUser-input' type='nationality' placeholder='Nationality'></input>
          <select className='signupUser-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select>
        </div>
        <div>
          <label className='signupUser-label'>Phone Number</label>
          <input className='signupUser-input' type='number' placeholder='Phone Number'></input>
        </div>
        <div>
          <label className='signupUser-label'>Liscense Number</label>
          <input className='signupUser-input' type='number' placeholder='Liscense Number'></input>
        </div>
        <div>
          <label className='signupUser-label'>Password</label>
          <input className='signupUser-input' type='password' placeholder='Password'></input>
        </div>
        <div>
          <label className='signupUser-label'> Confirm Password</label>
          <input className='signupUser-input' type='password' placeholder=' Confirm Password'></input>
        </div>
        <div>
          <a className='signupUser-a'href='#'>Already have an account, Login</a>
        </div>
        <div>
          <button className='signupUser-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
      </body>
      
    </div>
  )
}

export default SignupUser