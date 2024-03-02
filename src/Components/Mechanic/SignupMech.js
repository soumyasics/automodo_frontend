import React, { useState } from 'react'
import './SignupMech.css'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'





function SignupMech() {

  const [data,SetData]=useState({firstname:'',lastname:'',email:'',contact:'',aadhar:'',gender:'',password:'',image:'null',certificate:'null', shopid:''});
  const [errors, setErrors] = useState({firstname:'',lastname:'',email:'',contact:'',aadhar:'',password:''});
  let formIsValid;


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
      formIsValid=false
        return `${fieldName} is required`;
    }
    return '';
  };

  const validateNumber =(fieldName,value)=>{

    if (!value.trim()) {
      formIsValid=false
      return `${fieldName} is required`;
  }

    else if(value.toString().length!==10){
      formIsValid=false
      return `${fieldName}  10 digits required`;
 }
  }

  
const validatePassword =(fieldName,value)=>{
  var erorrsPassword=[]
   if (!value.trim()) {
    formIsValid=false
     erorrsPassword.push(`${fieldName} is required and include any`);
 }
 
    if(value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0){
      formIsValid=false
     erorrsPassword.push(`special character ,`);
 }
 
    if (value.length < 7) {
      formIsValid=false
     erorrsPassword.push(`length minimum 8 ,`);
   }
    if (value.search(/[a-z]/) < 0) {
      formIsValid=false
     erorrsPassword.push(`one small letter ,`);
   }
   if (value.search(/[A-Z]/) < 0) {
    formIsValid=false
   erorrsPassword.push(`one capital letter ,`);
   }
   if (value.search(/[0-9]/) < 0) {
    formIsValid=false
     erorrsPassword.push(`and any number.`);
   }
   if (erorrsPassword.length > 0) {
    formIsValid=false
     return `${erorrsPassword.join("\n")}`;
 }
 return true;
 }
 const shopid=localStorage.getItem("workshopid")
 console.log(shopid,);
  
  let signup=(a)=>{
    a.preventDefault()
    let errors = {};
      let formIsValid = true;

      errors.firstname= validateField('firstname', data.firstname);
      errors.lastname= validateField('lastname', data.lastname);
      errors.email= validateField('email', data.email);
      errors.aadhar= validateField('aadhar', data.aadhar);
      errors.contact= validateNumber('contact', data.contact);
      errors.password = validatePassword('password', data.password);
      

    

      setErrors(errors);
      console.log(formIsValid);

      if (formIsValid) {
          console.log("data", data);
          if (formIsValid) {
            console.log("data", data);
            axiosInstance.post(`/addMechanic/${shopid}`,data,{
              headers: {
                "Content-Type": "multipart/form-data",
              }
            })
        .then((res)=>{
          console.log(res)
          if(res.data.status==200){
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
  }
  return (
    <div >
      <form onSubmit={signup}>
       
        
      <div className='signupMech-main'>
        <div>
          <h2 className='signupMech-head'>Adding Mechanic</h2>
        </div>
        <div className='row'>
          <div className='signupMech-submain col-2'>
        <div>
          <label className='signupMech-label'>First Name</label>
          <input className='signupMech-input' type='text' placeholder='Firstname' name='firstname' value={data.firstname} onChange={change} /> {errors.firstname && (
                <div className="text-danger signupMech-validation">{errors.firstname}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Last Name</label>
          <input className='signupMech-input' type='text' placeholder='Last name' name='lastname' value={data.lastname} onChange={change} /> {errors.lastname && (
                <div className="text-danger signupMech-validation">{errors.lastname}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Email</label>
          <input className='signupMech-input' type='email' placeholder='Email' name='email' value={data.email} onChange={change}/> {errors.email && (
                <div className="text-danger signupMech-validation">{errors.email}</div>
              )}
         </div>
       
        <div>
          <label className='signupMech-label'>Contact Number</label>
          <input className='signupMech-input' type='number' placeholder='Contact Number' name='contact' value={data.contact} onChange={change}/> {errors.contact && (
                <div className="text-danger signupMech-validation">{errors.contact}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Aadhar Number</label>
          <input className='signupMech-input' type='number' placeholder='Aadhar Number' name='aadhar' value={data.aadhar} onChange={change}/> {errors.aadhar && (
                <div className="text-danger signupMech-validation">{errors.aadhar}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label' >Gender</label><br/>
          <input className='gender-btn' id='Idgender1' type='radio' name='gender'  onChange={change}/>
          <label  className='gender-btn' for='Idgender1'>Male</label>
          <input  className='gender-btn' id='Idgender2' type='radio' name='gender'  onChange={change}/>
          <label className='gender-btn' for='Idgender2'>Female</label>
        </div>
        <div>
        <label className='signupWorkshop-label' >Image</label><br/>
          <input  className='gender-btn' type='file' name='image'  onChange={change}/>
        </div>
        <div>
        <label className='signupWorkshop-label' >Certificate</label><br/>
          <input  className='gender-btn' type='file' name='certificate'  onChange={change}/>
        </div>
        <div>
          <label className='signupMech-label'>Password</label>
          <input className='signupMech-input' type='password' placeholder='Password' name='password' value={data.password} onChange={change} /> {errors.password && (
                <div className="text-danger signupMech-validation">{errors.password}</div>
              )}
        </div>
        <div>
         <p className='signupMech-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupMech-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupMech-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SignupMech