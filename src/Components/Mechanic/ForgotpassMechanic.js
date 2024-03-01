import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './ForgotpassMechanic.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'

function ForgotpassMechanic() {
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
        <img className="forgotMechanic-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='forgotMechanic-main '>
        <div>
          <h2 className='forgotMechanic-head'>Reset Password</h2>
        </div>
        <div className='row'>
        <div className='forgotMechanic-submain col-2'>
        <div>
          <label  className='forgotMechanic-label'>E-mail</label>
          <input className='forgotMechanic-input' name='email' value={data.email} onChange={change}   type='email' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='forgotMechanic-label'>New Password</label>
          <input className='forgotMechanic-input' name='newpassword' value={data.newpassword} onChange={change} type='password' placeholder='New Password'/>
          {errors.newpassword && (
                <div className="text-danger input-validation">{errors.newpassword}</div>
              )}
        </div>
        <div>
          <label className='forgotMechanic-label'>Confirm Password</label>
          <input className='forgotMechanic-input' name='confirmpassword'value={data.confirmpassword} onChange={change}  type='password' placeholder=' Re-enter Password'/>
          {errors.confirmpassword && (
                <div className="text-danger input-validation">{errors.confirmpassword}</div>
              )}
        </div>
       
        <div>
          <button className='forgotMechanic-btn' type='submit'>Reset password <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
        </div>
        </div>
      </form>
      
    </div>
    
  )
}

export default ForgotpassMechanic