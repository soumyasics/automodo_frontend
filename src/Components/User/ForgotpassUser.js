import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './ForgotpassUser.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function ForgotpassUser() {
    const [data,SetData]=useState({email:'',newpassword:'',confirmpassword:''})
const [errors, setErrors] = useState({ email: '', newpassword: '',confirmpassword:'' });

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
  errors.newpassword = validateField('newpassword', data.newpassword);
 
  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);
  }
 if(data.newpassword !==data.confirmpassword){
  setErrors(prevErrors => ({
    ...prevErrors,
    confirmpassword: 'newpassword and confirmpassword should be same'
}));

 }
}
  return (
    <div >
      <form onSubmit={signin}>
      <div>
        <img className="forgotUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='forgotUser-main '>
        <div>
          <h2 className='forgotUser-head'>Sign In</h2>
        </div>
        <div className='row'>
        <div className='forggtUser-submain col-2'>
        <div>
          <label  className='forgotUser-label'>E-mail</label>
          <input className='forgotUser-input' name='email' value={data.email} onChange={change}   type='email' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='forgotUser-label'>New Password</label>
          <input className='forgotUser-input' name='newpassword' value={data.newpassword} onChange={change} type='password' placeholder='New Password'/>
          {errors.newpassword && (
                <div className="text-danger input-validation">{errors.newpassword}</div>
              )}
        </div>
        <div>
          <label className='forgotUser-label'>Confirm Password</label>
          <input className='forgotUser-input' name='confirmpassword'value={data.confirmpassword} onChange={change}  type='password' placeholder=' Re-enter Password'/>
          {errors.confirmpassword && (
                <div className="text-danger input-validation">{errors.confirmpassword}</div>
              )}
        </div>
       
        <div>
          <button className='forgotUser-btn' type='submit'>Sign In  <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
        </div>
        </div>
      </form>
      
    </div>
    
  )
}

export default ForgotpassUser