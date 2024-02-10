import React from 'react'
import './signupWorkshop.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupWorkshop() {
  return (
    <div>
        <div>
        <img className="signupWorkshop-img"src={Signin_image} alt='Signin_image'/>
        </div>
        <body>
      <div className='signupWorkshop-main'>
        <div>
          <h2 className='signupWorkshop-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupWorkshop-submain col-2'>
        <div>
          <label className='signupWorkshop-label'>Name</label>
          <input className='signupWorkshop-input' type='text' placeholder='Name'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Age</label>
          <input className='signupWorkshop-input' type='number' placeholder='Age'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Email</label>
          <input className='signupWorkshop-input' type='email' placeholder='Email'></input>
         </div>
        <div>
          <label className='signupWorkshop-label'>Street</label>
          <input className='signupWorkshop-input' type='text' placeholder='Street'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>City</label>
          <input className='signupWorkshop-input' type='text' placeholder='City'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>State</label>
          <input className='signupWorkshop-input' type='text' placeholder='State'></input>
          <select className='signupWorkshop-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select>
        </div>
        <div>
          <label className='signupWorkshop-label'>Nationality</label>
          <input className='signupWorkshop-input' type='nationality' placeholder='Nationality'></input>
          <select className='signupWorkshop-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select>
        </div>
        <div>
          <label className='signupWorkshop-label'>Phone Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Phone Number'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Liscense Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Liscense Number'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Password</label>
          <input className='signupWorkshop-input' type='password' placeholder='Password'></input>
        </div>
        <div>
          <label className='signupWorkshop-label'> Confirm Password</label>
          <input className='signupWorkshop-input' type='password' placeholder=' Confirm Password'></input>
        </div>
        <div>
         <p className='signupWorkshop-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupWorkshop-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupWorkshop-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
      </body>
      
    </div>
  )
}

export default SignupWorkshop