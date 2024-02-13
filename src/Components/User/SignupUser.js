import React, { useState } from 'react'
import './signupUser.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupUser() {

  const [State,SetState]=useState({username:'',age:'',email:'',street:'',city:'',state:'',naionality:'',number:'',password:'',confpassword:''})

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
        <img className="signupUser-img"src={Signin_image} alt='Signin_image'/>
        </div>
       
      <div className='signupUser-main'>
        <div>
          <h2 className='signupUser-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupUser-submain col-2'>
        <div>
          <label className='signupUser-label'>Name</label>
          <input className='signupUser-input' type='text' placeholder='Name' name='username' onChange={change} ></input>
        </div>
        <div>
          <label className='signupUser-label'>Age</label>
          <input className='signupUser-input' type='number' placeholder='Age' name='age' onChange={change} ></input>
        </div>
        <div>
          <label className='signupUser-label'>Email</label>
          <input className='signupUser-input' type='email' placeholder='Email' name='email' onChange={change} ></input>
         </div>
        <div>
          <label className='signupUser-label'>Street</label>
          <input className='signupUser-input' type='text' placeholder='Street' name='street' onChange={change} ></input>
        </div>
        <div>
          <label className='signupUser-label'>City</label>
          <input className='signupUser-input' type='text' placeholder='City' name='city' onChange={change} ></input>
        </div>
        <div>
          <label className='signupUser-label'>State</label>
          <input className='signupUser-input' type='text' placeholder='State' name='state' onChange={change} ></input>
          {/* <select className='signupUser-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupUser-label'>Nationality</label>
          <input className='signupUser-input' type='nationality' placeholder='Nationality' name='nationality' onChange={change} ></input>
          {/* <select className='signupUser-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupUser-label'>Phone Number</label>
          <input className='signupUser-input' type='number' placeholder='Phone Number' name='number' onChange={change} ></input>
        </div>
       
        <div>
          <label className='signupUser-label'>Password</label>
          <input className='signupUser-input' type='password' placeholder='Password' name='password' onChange={change} ></input>
        </div>
        <div>
          <label className='signupUser-label'> Confirm Password</label>
          <input className='signupUser-input' type='password' placeholder=' Confirm Password' name='confpassword' onChange={change} ></input>
        </div>
        <div>
         <p className='signupUser-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupUser-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupUser-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SignupUser