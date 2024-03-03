import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'


function Adminlogin() {
    const[data,setdata]=useState({
        username:"",
        password:""
    })
const username="admin"
const password="admin123#"

const changefn=((a)=>{
    setdata({
        ...data,[a.target.name]:a.target.value
    })
})
const navigate=useNavigate()
const submitfn=((b)=>{
    b.preventDefault()
    if(username==data.username){
        if(password==data.password){
            alert("Login Succesfully")
            navigate("/admin-dashboard")
        }
        else{
            alert("Incorrect Password")
        }
    
    }
    else{
        alert("User Not Found")
    }
})
  return (
    <div>
    <form onSubmit={submitfn}>
    <div>
      <img className="loginWorkshop-img"src={Signin_image} alt='Signin_image'/>
    </div>
   
    <div className='loginWorkshop-main'>
      <div>
        <h2 className='loginWorkshop-head'>Admin Sign In</h2>
      </div>
      <div>
        <label className='loginWorkshop-label'>Username</label>
        <input className='loginWorkshop-input1' name='username'  type='text' placeholder='Username' onChange={changefn}/>
      </div>
      <div>
        <label className='loginWorkshop-label'>Password</label>
        <input className='loginWorkshop-input'  name='password'  type='password' placeholder='Password'onChange={changefn}/>
       
      </div>
     
      <div>
        <button className='loginWorkshop-btn' type='submit'  style={{marginTop:"20px"}}>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>

      </div>
      </div>
      </form>
  </div>

  )
}

export default Adminlogin