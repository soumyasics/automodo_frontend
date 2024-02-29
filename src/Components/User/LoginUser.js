import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginUser.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import  axiosInstance from '../../Baseurl'


function LoginUser() {

const [data,SetData]=useState({username:'',password:''})
const [errors, setErrors] = useState({ username: '', password: '' });

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

  errors.username= validateField('username', data.username);
  errors.password = validateField('password', data.password);

  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);
      axiosInstance.post('/loginCust',data,{

      })
      .then((res)=>{
        console.log(res)
        if(res.status==200){
            alert('succesfully registered')
           }
           else{
            alert('failed')
           }
       })
       .catch((error)=>{
        console.log(error)
       })



  }
}
  

  return (
    <div >
      <form onSubmit={signin}>
      <div>
        <img className="loginUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='loginUser-main'>
        <div>
          <h2 className='loginUser-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginUser-label'>Username</label>
          <input className='loginUser-input' name='username' value={data.username} onChange={change}  type='text' placeholder='Username'/>
          {errors.username && (
                <div className="text-danger input-validation">{errors.username}</div>
              )}
        </div>
        <div>
          <label className='loginUser-label'>Password</label>
          <input className='loginUser-input' name='password' value={data.password}  onChange={change}  type='password' placeholder='Password'/>
          {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
        </div>
        <div className='loginUser-Areset'>
        <a className='loginUser-a' href='#'>Reset Password </a>
        </div>
        <div className='loginUser-Asignup'>
          <a className='loginUser-a' href='#' >Signup</a>
        </div>
        <div>
          <button className='loginUser-btn' type='submit'>Sign In  <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
      </form>
    </div>
  )
}

export default LoginUser