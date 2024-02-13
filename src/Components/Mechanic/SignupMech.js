import React, { useState } from 'react'
import './SignupMech.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupMech() {

  const [State,SetState]=useState({username:'',age:'',email:'',street:'',city:'',state:'',naionality:'',number:'',license:'',password:'',confpassword:''})

  const change=(b)=>{
    SetState({...State,[b.target.name]:b.target.value})
  }
  
  let signup=(a)=>{
    a.preventDefault()
    console.log(State)
  }
  return (
    <div >
      <form onSubmit={signup}>
        <div>
        <img className="signupMech-img"src={Signin_image} alt='Signin_image'/>
        </div>
        
      <div className='signupMech-main'>
        <div>
          <h2 className='signupMech-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupMech-submain col-2'>
        <div>
          <label className='signupMech-label'>Name</label>
          <input className='signupMech-input' type='text' placeholder='Name' name='username' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>Age</label>
          <input className='signupMech-input' type='number' placeholder='Age' name='age' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>Email</label>
          <input className='signupMech-input' type='email' placeholder='Email' name='email' onChange={change} ></input>
         </div>
        <div>
          <label className='signupMech-label'>Street</label>
          <input className='signupMech-input' type='text' placeholder='Street' name='street' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>City</label>
          <input className='signupMech-input' type='text' placeholder='City' name='city' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>State</label>
          <input className='signupMech-input' type='text' placeholder='State' name='state' onChange={change} ></input>
          {/* <select className='signupMech-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupMech-label'>Nationality</label>
          <input className='signupMech-input' type='nationality' placeholder='Nationality' name='nationality' onChange={change} ></input>
          {/* <select className='signupMech-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupMech-label'>Phone Number</label>
          <input className='signupMech-input' type='number' placeholder='Phone Number' name='number' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>Liscense Number</label>
          <input className='signupMech-input' type='number' placeholder='License Number' name='license' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'>Password</label>
          <input className='signupMech-input' type='password' placeholder='Password' name='password' onChange={change} ></input>
        </div>
        <div>
          <label className='signupMech-label'> Confirm Password</label>
          <input className='signupMech-input' type='password' placeholder=' Confirm Password' name='confpassword' onChange={change} ></input>
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
        
        </form>
      
    </div>
  )
}

export default SignupMech