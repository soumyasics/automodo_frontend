import React, { useEffect, useState } from "react";
import './EditMechanicProfile.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'


function EditMechanicProfile() {
    const {id}=useParams()
    const [data,SetData]=useState({name:'',contact:'',email:'',city:'',district:'',aadhar:'',password:'',image:'null',regno:''})



  useEffect(()=>{
    axiosInstance.post(`/viewMechById/${id}`,data)
    .then((res)=>{
      console.log(res);
       SetData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])
  

  const change=(b)=>{

    if(b.target.name === "image"){
      // handleImageUpload(e);
      SetData({...data,image:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }
  console.log(data);


}
  const navigate=useNavigate()

  
const editfn = ((a) => {
  a.preventDefault()
  console.log("data", data);
  axiosInstance.post(`/editMechanicById/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => {
    console.log(res)
    if (res.data.status == 200) {
      alert('Updated succesfully')
      navigate("/workshop-dashboard")
    } else {
      alert('failed')
    }
  })
  .catch((error) => {
    console.log(error)
  })
})
  return (
    <div>
         <form onSubmit={editfn}>

        
<div className='editMechanic-main'>
  <div>
    <h2 className='editMechanic-head'>Edit Profile</h2>
  </div>
  <div className='row'>
    <div className='editMechanic-submain col-2'>
  <div>
    <label className='editMechanic-label'>First Name</label>
    <input className='editMechanic-input' type='text' placeholder='Shop name' value={data.firstname} name='name' onChange={change}/>

  </div>
  <div>
    <label className='editMechanic-label'>Last Name</label>
    <input className='editMechanic-input' type='text' placeholder='Shop name' value={data.lastname} name='name' onChange={change}/>

  </div>
 
  <div>
    <label className='editMechanic-label'>Email</label>
    <input className='editMechanic-input' type='email' placeholder='Email' value={data.email} name='email' onChange={change}/>

   </div>
  <div>
    <label className='editMechanic-label'>Aadhar</label>
    <input className='editMechanic-input' type='number' placeholder='Aadhar number'value={data.aadhar} name='aadhar' onChange={change}/>

   
  </div>
  <div>
    <label className='editMechanic-label'>Contact Number</label>
    <input className='editMechanic-input' type='number' placeholder='Contact Number' value={data.contact} name='contact' onChange={change}/>

  </div>
  <div>
  <label className='editMechanic-label' >Gender</label><br/>
        <div className='mechanic-edit-genderflex'>
          <input className='mechanic-edit-gender-btn' id='Idgender1' type='radio' name='gender' value='male'  onChange={change} required/>
          <label  className='mechanic-edit-gender-btn' for='Idgender1'>Male</label>
          <input  className='mechanic-edit-gender-btn' id='Idgender2' type='radio' name='gender' value='female'  onChange={change} required/>
          <label className='mechanic-edit-gender-btn' for='Idgender2'>Female</label>
        </div>
        </div>
  <div>
  <div>
  <label className='editMechanic-label' >Certificate</label><br/>
    <input  className='editMechanic-file' type='file' name='image'  onChange={change}/>
  </div>
 
  </div>
  <div>
  <label className='editMechanic-label' >Image</label><br/>
    <input  className='editMechanic-file' type='file' name='image'  onChange={change}/>
  </div>
 
  <div>
    <label className='editMechanic-label'>Password</label>
    <input className='editMechanic-input' type='password' placeholder='Password' name='password' onChange={change}/>

  </div>
  <div>
    <button className='editMechanic-btn' type='siubmit'>Submit</button>
  </div>
  </div>
  </div>
  </div>
  
  </form>

    </div>
  )
}

export default EditMechanicProfile