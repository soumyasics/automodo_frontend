import React, { useEffect, useState } from "react";
import './UserProfileEdit.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'
import LoginMechanic from "../Mechanic/LoginMechanic";

function UserProfileEdit()  {

  // const userid=localStorage.getItem("userid")
  // console.log(userid+"userid");
  const { id } = useParams()

  const [data,SetData]=useState({firstname:'',lastname:'',email:'',contact:'',gender:'',image:'null',password:''})
  const [errors, setErrors] = useState({firstname:'',lastname:'',email:'',contact:'',password:''});

  let formIsValid;

  

  const change=(b)=>{
    const { name, value } = b.target;
    if(b.target.name === "image"){
      // handleImageUpload(e);
      SetData({...data,image:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }

 console.log(data);



setErrors(prevErrors => ({
  ...prevErrors,
  [name]: ''
}));
  }
  useEffect(()=>{
    axiosInstance.post(`/viewCustById/${id}`)
    .then((res)=>{
      console.log(res);
      SetData(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  

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
   const navigate=useNavigate()
  
  let signup=(a)=>{
    a.preventDefault()
   
           
    let errors = {};
       formIsValid = true;

      errors.firstname= validateField('firstname', data.firstname);
      errors.lastname= validateField('lastname', data.lastname);
      errors.email= validateField('email', data.email);
      errors.contact= validateNumber('contact', data.contact);
      errors.password = validatePassword('password', data.password);
      
      setErrors(errors);
      console.log(data);

      if (formIsValid) {
          console.log("data", data);

          axiosInstance.post(`/editCustomerById/:${id}`,data,{
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
                 .then((res)=>{
                  console.log(res)
                  if(res.status==200){
                      alert('Profile edited')
                      navigate("/user-profile")
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
      <form onSubmit={signup}>
       
       
      <div className='user-edit-main'>
        <div>
          <h2 className='user-edit-head'>EDIT PROFILE</h2>
        </div>
        <div className='row'>
          <div className='user-edit-submain col-2'>
        <div>
          <label className='user-edit-label'>First Name</label>
          <input className='user-edit-input' type='text'  name='firstname' value={data.firstname} onChange={change} />
          {errors.firstname && (
                <div className="text-danger user-edit-validation">{errors.firstname}</div>
              )}
        </div>
        <div>
          <label className='user-edit-label'>Last Name</label>
          <input className='user-edit-input' type='text' placeholder='Lastname' name='lastname'value={data.lastname} onChange={change} />
          {errors.lastname && (
                <div className="text-danger user-edit-validation">{errors.lastname}</div>
              )}
        </div>
        <div>
          <label className='user-edit-label'>Email</label>
          <input className='user-edit-input' type='email' placeholder='Email' name='email'value={data.email} onChange={change} />
          {errors.email && (
                <div className="text-danger user-edit-validation">{errors.email}</div>
              )}
         </div>
       
        <div>
          <label className='user-edit-label'>Contact Number</label>
          <input className='user-edit-input' type='number' placeholder='Contact Number' name='contact'value={data.contact} onChange={change} />
          {errors.contact && (
                <div className="text-danger user-edit-validation">{errors.contact}</div>
              )}
        </div>

        <label className='user-edit-label' >Gender</label><br/>
        <div className='user-edit-genderflex'>
          <input className='user-edit-gender-btn' id='Idgender1' type='radio' name='gender' value='male'  onChange={change}/>
          <label  className='user-edit-gender-btn' for='Idgender1'>Male</label>
          <input  className='user-edit-gender-btn' id='Idgender2' type='radio' name='gender' value='female'  onChange={change}/>
          <label className='user-edit-gender-btn' for='Idgender2'>Female</label>
        </div>
        <div>
        <label className='user-edit-label' >Image</label><br/>
          <input  className='user-edit-file' type='file' name='image'  onChange={change}/>
        </div>
       
        <div>
          <label className='user-edit-label'>Password</label>
          <input className='user-edit-input' type='password' placeholder='Password' name='password' onChange={change} />
          {errors.password && (
                <div className="text-danger user-edit-validation">{errors.password}</div>
              )}
        </div>
    
        <div>
          <button className='user-edit-btn' type='submit'>Submit</button>
          <img className="user-edit-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default UserProfileEdit