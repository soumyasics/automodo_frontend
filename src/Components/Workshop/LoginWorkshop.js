import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginWorkshop.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'


function LoginWorkshop() {

  const [data,SetData]=useState({email:'',password:''})
  const [errors, setErrors] = useState({ email: '', password: '' });

const navigate=useNavigate()
const change=(b)=>{
  const { name, value } = b.target;
  SetData(prevData => ({
      ...prevData,
      [name]: value
  }));
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
}));
}
const validateField = (fieldName, value) => {
  if (!value.trim()) {
      return `${fieldName} is required`;
  }
  return '';
};


let signin=(a)=>{
  a.preventDefault()

  let errors = {};
  let formIsValid = true;

  errors.email= validateField('email', data.email);
  errors.password = validateField('password', data.password);

  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);

      axiosInstance.post(`loginworkshops`,data)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          localStorage.setItem("workshopid", result.data.data._id);
          console.log("workshopid", result.data.data._id);
          alert("login Sucessfully...");
          navigate("")
         
        } else if (result.data.status==401) {
            alert("password mismatch")
        }else if(result.data.status==400){
          alert("user not found")
        }
        else  {
          alert(result.data.msg)
        }
      })
    
      .catch((err)=>{
        console.log(err);
      })
  }
}


  return (
    <div>
      <form onSubmit={signin}>
      <div>
        <img className="loginWorkshop-img"src={Signin_image} alt='Signin_image'/>
      </div>
     
      <div className='loginWorkshop-main'>
        <div>
          <h2 className='loginWorkshop-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginWorkshop-label'>Email</label>
          <input className='loginWorkshop-input1' name='email' value={data.email} onChange={change}  type='text' placeholder='E-mail'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='loginWorkshop-label'>Password</label>
          <input className='loginWorkshop-input'  name='password' value={data.password} onChange={change}  type='password' placeholder='Password'/>
          {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
        </div>
        <div className='loginWorkshop-Areset'>
        <a className='loginWorkshop-a' href='#'>Reset Password </a>
        </div>
        <div className='loginWorkshop-Asignup'>
          <a className='loginWorkshop-a' href='#'>Signup</a>
        </div>
        <div>
          <button className='loginWorkshop-btn' type='submit'>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>

        </div>
        </div>
        </form>
    </div>
  )
}

export default LoginWorkshop