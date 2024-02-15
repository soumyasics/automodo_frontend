import React, { useState } from 'react'
import './signupWorkshop.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupWorkshop() {
  const [State,SetState]=useState({shopname:'',ownername:'',email:'',street:'',city:'',state:'',naionality:'',number:'',regnumber:'',password:'',confpassword:''})

  const change=(b)=>{
    SetState({...State,[b.target.name]:b.target.value})
  }
  
  let signup=(a)=>{
    a.preventDefault()
    console.log(State)
  }
  return (
    <div>
      <form onSubmit={signup}>
        <div>
        <img className="signupWorkshop-img"src={Signin_image} alt='Signin_image'/>
        </div>
        
      <div className='signupWorkshop-main'>
        <div>
          <h2 className='signupWorkshop-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupWorkshop-submain col-2'>
        <div>
          <label className='signupWorkshop-label'>Shop name</label>
          <input className='signupWorkshop-input' type='text' placeholder='Shop name' name='shopname' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Owner name</label>
          <input className='signupWorkshop-input' type='text' placeholder='Owner name' name='ownername' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Email</label>
          <input className='signupWorkshop-input' type='email' placeholder='Email' name='email' onChange={change}></input>
         </div>
        <div>
          <label className='signupWorkshop-label'>Street</label>
          <input className='signupWorkshop-input' type='text' placeholder='Street' name='street' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>City</label>
          <input className='signupWorkshop-input' type='text' placeholder='City' name='city' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>State</label>
          <input className='signupWorkshop-input' type='text' placeholder='State' name='state' onChange={change}></input>
          {/* <select className='signupWorkshop-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupWorkshop-label'>Nationality</label>
          <input className='signupWorkshop-input' type='nationality' placeholder='Nationality' name='nationality' onChange={change}></input>
          {/* <select className='signupWorkshop-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupWorkshop-label'>Phone Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Phone Number' name='number' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Register Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Register Number' name='regnumber' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'>Password</label>
          <input className='signupWorkshop-input' type='password' placeholder='Password' name='password' onChange={change}></input>
        </div>
        <div>
          <label className='signupWorkshop-label'> Confirm Password</label>
          <input className='signupWorkshop-input' type='password' placeholder=' Confirm Password' name='confpassword' onChange={change}></input>
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
        
        </form>
      
    </div>
  )
}

export default SignupWorkshop