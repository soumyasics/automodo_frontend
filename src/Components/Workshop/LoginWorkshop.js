import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './loginWorkshop.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'


function LoginWorkshop() {

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
          <label className='loginWorkshop-label'>Username</label>
          <input className='loginWorkshop-input' name='username' value={data.username} onChange={change}  type='text' placeholder='Username'/>
          {errors.username && (
                <div className="text-danger input-validation">{errors.username}</div>
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
          <button className='loginWorkshop-btn' type='siubmit'>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>

        </div>
        </div>
        </form>
    </div>
  )
}

export default LoginWorkshop