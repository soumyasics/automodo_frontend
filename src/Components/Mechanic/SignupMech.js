import React from 'react'
import './SignupMech.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupMech() {
  return (
    <div className='signupMech-main'>
        <div>
        <img className="signupMech-img"src={Signin_image} alt='Signin_image'/>
        </div>
        <body>
      <div className='signupMech-main'>
        <div>
          <h2 className='signupMech-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupMech-submain col-2'>
        <div>
          <label className='signupMech-label'>Name</label>
          <input className='signupMech-input' type='text' placeholder='Name'></input>
        </div>
        <div>
          <label className='signupMech-label'>Age</label>
          <input className='signupMech-input' type='number' placeholder='Age'></input>
        </div>
        <div>
          <label className='signupMech-label'>Email</label>
          <input className='signupMech-input' type='email' placeholder='Email'></input>
         </div>
        <div>
          <label className='signupMech-label'>Street</label>
          <input className='signupMech-input' type='text' placeholder='Street'></input>
        </div>
        <div>
          <label className='signupMech-label'>City</label>
          <input className='signupMech-input' type='text' placeholder='City'></input>
        </div>
        <div>
          <label className='signupMech-label'>State</label>
          <input className='signupMech-input' type='text' placeholder='State'></input>
          <select className='signupMech-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select>
        </div>
        <div>
          <label className='signupMech-label'>Nationality</label>
          <input className='signupMech-input' type='nationality' placeholder='Nationality'></input>
          <select className='signupMech-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select>
        </div>
        <div>
          <label className='signupMech-label'>Phone Number</label>
          <input className='signupMech-input' type='number' placeholder='Phone Number'></input>
        </div>
        <div>
          <label className='signupMech-label'>Liscense Number</label>
          <input className='signupMech-input' type='number' placeholder='Liscense Number'></input>
        </div>
        <div>
          <label className='signupMech-label'>Password</label>
          <input className='signupMech-input' type='password' placeholder='Password'></input>
        </div>
        <div>
          <label className='signupMech-label'> Confirm Password</label>
          <input className='signupMech-input' type='password' placeholder=' Confirm Password'></input>
        </div>
        <div>
         <p className='signupMech-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupMech-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupMech-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
      </body>
      
    </div>
  )
}

export default SignupMech