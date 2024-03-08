import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './ForgotpassWorkshop.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'


function ForgotpassWorkshop() {
  const navigate=useNavigate()
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
      axiosInstance.post('/forgotPwdWorkshop',data)
      .then((res)=>{
        console.log(res)
        if(res.data.status==200){
            alert('password updated')
            navigate("/user-login")
           }
           else if(res.data.status==500){
            alert("Customer not found")
           }
       })
       .catch((error)=>{
        console.log(error)
       })
  }
 if(data.newpassword !==data.confirmpassword){
  setErrors(prevErrors => ({
    ...prevErrors,
    confirmpassword: 'new password and confirm password should be same'
}));

 }
}
  return (
    <div >
      <form onSubmit={signin}>
      <div>
        <img className="forgotUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='forgotWorkshop-main '>
        <div>
          <h2 className='forgotWorkshop-head'>Reset Password</h2>
        </div>
        <div className='row'>
        <div className='forgotWorkshop-submain col-2'>
        <div>
          <label  className='forgotWorkshop-label'>E-mail</label>
          <input className='forgotWorkshop-input' name='email' value={data.email} onChange={change}   type='email' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='forgotWorkshop-label'>New Password</label>
          <input className='forgotWorkshop-input' name='newpassword' value={data.newpassword} onChange={change} type='password' placeholder='New Password'/>
          {errors.newpassword && (
                <div className="text-danger input-validation">{errors.newpassword}</div>
              )}
        </div>
        <div>
          <label className='forgotWorkshop-label'>Confirm Password</label>
          <input className='forgotWorkshop-input' name='confirmpassword'value={data.confirmpassword} onChange={change}  type='password' placeholder=' Re-enter Password'/>
          {errors.confirmpassword && (
                <div className="text-danger input-validation">{errors.confirmpassword}</div>
              )}
        </div>
       
        <div>
          <button className='forgotWorkshop-btn' type='submit'>Reset password <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
        </div>
        </div>
      </form>
      
    </div>
    
  )
}

export default ForgotpassWorkshop