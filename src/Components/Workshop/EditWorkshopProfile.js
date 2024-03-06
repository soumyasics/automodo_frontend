import React, { useEffect, useState } from "react";
import './editWorkshopprofile.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'


function EditProfile() {
  const {id}=useParams()
    const [data,SetData]=useState({name:'',contact:'',email:'',city:'',district:'',aadhar:'',password:'',image:'null',regno:''})
  const [errors, setErrors] = useState({name:'',contact:'',email:'',city:'',district:'',aadhar:'',password:'',image:'',regno:''});

  let formIsValid;
  useEffect(()=>{
    axiosInstance.post(`viewWorkshopById/${id}`,data)
    .then((res)=>{
      console.log(res);
       SetData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])
  

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

      errors.name= validateField('name', data.name);
      errors.email= validateField('email', data.email);
      errors.city= validateField('city', data.city);
      errors.district= validateField('district', data.district);
      errors.aadhar= validateField('aadhar', data.aadhar);
      errors.contact= validateNumber('contact', data.contact);
      errors.regno= validateField('regno', data.regno);
      errors.password = validatePassword('password', data.password);
      setErrors(errors);
      console.log(formIsValid);

      if (formIsValid) {
          console.log("data", data);
          axiosInstance.post(`/editWorkshopById/${id}`,data,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
      .then((res)=>{
        console.log(res)
        if(res.data.status==200){
            alert('succesfully registered')
            navigate("/workshop-login")
           }
           else if(res.data.Error.code===11000){
            alert('This workshop has already registered')
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
    <div>
      <form onSubmit={signup}>
        
      <div className='editWorkshop-main'>
        <div>
          <h2 className='editWorkshop-head'>Edit Profile</h2>
        </div>
        <div className='row'>
          <div className='editWorkshop-submain col-2'>
        <div>
          <label className='editWorkshop-label'>Shop name</label>
          <input className='editWorkshop-input' type='text' placeholder='Shop name' value={data.name} name='name' onChange={change}/>
          {errors.name&& (
                <div className="text-danger editWorkshop-validation">{errors.name}</div>
              )}
        </div>
       
        <div>
          <label className='editWorkshop-label'>Email</label>
          <input className='editWorkshop-input' type='email' placeholder='Email' value={data.email} name='email' onChange={change}/>
          {errors.email && (
                <div className="text-danger editWorkshop-validation">{errors.email}</div>
              )}
         </div>
       
        <div>
          <label className='editWorkshop-label'>City</label>
          <input className='editWorkshop-input' type='text' placeholder='City' value={data.city} name='city' onChange={change}/>
          {errors.city && (
                <div className="text-danger editWorkshop-validation">{errors.city}</div>
              )}
        </div>
        <div>
          <label className='editWorkshop-label'>District</label>
          <input className='editWorkshop-input' type='text' placeholder='District' value={data.district} name='district' onChange={change}/>
          {errors.district && (
                <div className="text-danger editWorkshop-validation">{errors.district}</div>
              )}
         
        </div>
        <div>
          <label className='editWorkshop-label'>Aadhar</label>
          <input className='editWorkshop-input' type='number' placeholder='Aadhar number'value={data.aadhar} name='aadhar' onChange={change}/>
          {errors.aadhar && (
                <div className="text-danger editWorkshop-validation">{errors.aadhar}</div>
              )}
         
        </div>
        <div>
          <label className='editWorkshop-label'>Contact Number</label>
          <input className='editWorkshop-input' type='number' placeholder='Contact Number' value={data.contact} name='contact' onChange={change}/>
          {errors.contact && (
                <div className="text-danger editWorkshop-validation">{errors.contact}</div>
              )}
        </div>
        <div>
          <label className='editWorkshop-label'>Register Number</label>
          <input className='editWorkshop-input' type='number' placeholder='Register Number'value={data.regno} name='regno' onChange={change}/>
          {errors.regno && (
                <div className="text-danger editWorkshop-validation">{errors.regno}</div>
              )}
        </div>
        <div>
        <label className='editWorkshop-label' >Image</label><br/>
          <input  className='editWorkshop-file' type='file' name='image'  onChange={change}/>
        </div>
       
        <div>
          <label className='editWorkshop-label'>Password</label>
          <input className='editWorkshop-input' type='password' placeholder='Password' name='password' onChange={change}/>
          {errors.password && (
                <div className="text-danger editWorkshop-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <button className='editWorkshop-btn' type='siubmit'>Submit</button>
        </div>
        </div>
        </div>
        </div>
        
        </form>
      
    </div>
  )
}

  

export default EditProfile