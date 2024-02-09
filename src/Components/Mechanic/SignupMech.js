import React from 'react'
import './SignupMech.css'
import Signin_image from '../../Assets/signin_image.png'

function SignupMech() {
  return (
    <div>
        <div>
        <img className="signupMech-img"src={Signin_image} alt='Signin_image'/>
        </div>
        <body>
      <div className='signupMech-main'>
        <div>
          <h2 className='signupMech-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupMech-submain col-5'>
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
          
        </div>
        </div>
        </div>
      </body>
      
    </div>
  )
}

export default SignupMech