import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './LoginMech.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function LoginMechanic() {

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
        <img className="loginMech-img"src={Signin_image} alt='Signin_image'/>
      </div>
     
      <div className='loginMech-main'>
        <div>
          <h2 className='loginMech-head'>Sign In</h2>
        </div>
        <div>
          <label className='loginMech-label'>Username</label>
          <input className='loginMech-input'  name='username' value={data.username}  onChange={change} type='text' placeholder='Username'/>
          {errors.username && (
                <div className="text-danger">{errors.username}</div>
              )}
        </div>
        <div>
          <label className='loginMech-label'>Password</label>
          <input className='loginMech-input' name='password'  value={data.password}  onChange={change}  type='password' placeholder='Password'/>{errors.password && (
                <div className="text-danger ">{errors.password}</div>
              )}
        </div>
        <div className='loginMech-Areset'>
        <a className='loginMech-a' href='#'>Reset Password </a>
        </div>
        <div className='loginMech-Asignup'>
          <a className='loginMech-a'  href='#'>Signup</a>
        </div>
        <div>
          <button className='loginMech-btn' type='submit'>Sign In <img className='signupLogo' src={SignupLogo} /></button>
       
        </div>
        
        </div>
   </form>
      
    </div>
  )
}

export default LoginMechanic