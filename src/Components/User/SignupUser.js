import React, { useState } from 'react'
import './signupUser.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupUser() {

  const [data,SetData]=useState({firstname:'',lastname:'',email:'',contact:'',gender:'',image:'null',password:'',confpassword:''})
  const [errors, setErrors] = useState({firstname:'',lastname:'',email:'',contact:'',password:'',confpassword:''});

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
  const validateNumber =(fieldName,value)=>{

    if (!value.trim()) {
      return `${fieldName} is required`;
  }

    else if(value.toString().length!==10){
      return `${fieldName}  10 digits required`;
 }
  }
  const validatePassword =(fieldName,value)=>{
    var erorrsPassword=[]
     if (!value.trim()) {
       erorrsPassword.push(`${fieldName} is required and include any`);
   }
   
      if(value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0){
       erorrsPassword.push(`special character ,`);
   }
   
      if (value.length < 7) {
       erorrsPassword.push(`length minimum 8 ,`);
     }
      if (value.search(/[a-z]/) < 0) {
       erorrsPassword.push(`one small letter ,`);
     }
     if (value.search(/[A-Z]/) < 0) {
     erorrsPassword.push(`one capital letter ,`);
     }
     if (value.search(/[0-9]/) < 0) {
       erorrsPassword.push(`and any number.`);
     }
     if (erorrsPassword.length > 0) {
       return `${erorrsPassword.join("\n")}`;
   }
   return true;
   }
   
  
  let signup=(a)=>{
    a.preventDefault()
    let errors = {};
      let formIsValid = true;

      errors.firstname= validateField('firstname', data.firstname);
      errors.lastname= validateField('lastname', data.lastname);
      errors.email= validateField('email', data.email);
      errors.contact= validateNumber('contact', data.contact);
      errors.password = validatePassword('password', data.password);
      errors.confpassword= validateField('confirm password', data.confpassword);

      setErrors(errors);
      console.log(data);
      if (formIsValid) {
          console.log("data", data);
      }
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
          <label className='signupUser-label'>First Name</label>
          <input className='signupUser-input' type='text' placeholder='Firstname' name='firstname'value={data.firstname} onChange={change} />
          {errors.firstname && (
                <div className="text-danger signupUser-validation">{errors.firstname}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>Last Name</label>
          <input className='signupUser-input' type='text' placeholder='Lastname' name='lastname'value={data.lastname} onChange={change} />
          {errors.lastname && (
                <div className="text-danger signupUser-validation">{errors.lastname}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>Email</label>
          <input className='signupUser-input' type='email' placeholder='Email' name='email'value={data.email} onChange={change} />
          {errors.email && (
                <div className="text-danger signupUser-validation">{errors.email}</div>
              )}
         </div>
       
        <div>
          <label className='signupUser-label'>Contact Number</label>
          <input className='signupUser-input' type='number' placeholder='Contact Number' name='contact'value={data.contact} onChange={change} />
          {errors.contact && (
                <div className="text-danger signupUser-validation">{errors.contact}</div>
              )}
        </div>

        <div>
          <label className='signupUser-label' >Gender</label><br/>
          <input className='gender-btn' id='Idgender1' type='radio' name='gender'  onChange={change}/>
          <label  className='gender-btn' for='Idgender1'>Male</label>
          <input  className='gender-btn' id='Idgender2' type='radio' name='gender'  onChange={change}/>
          <label className='gender-btn' for='Idgender2'>Female</label>
        </div>
        <div>
        <label className='signupUser-label' >Image</label><br/>
          <input  className='gender-btn' type='file' name='image'  onChange={change}/>
        </div>
       
        <div>
          <label className='signupUser-label'>Password</label>
          <input className='signupUser-input' type='password' placeholder='Password' name='password'value={data.password} onChange={change} />
          {errors.password && (
                <div className="text-danger signupUser-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'> Confirm Password</label>
          <input className='signupUser-input' type='password' placeholder=' Confirm Password' name='confpassword'value={data.confpassword} onChange={change} />
          {errors.confpassword && (
                <div className="text-danger signupUser-validation">{errors.confpassword}</div>
              )}
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