import React, { useEffect, useState } from "react";
import './UserProfile.css'
import axiosInstance from '../../Baseurl'
import { Link } from "react-router-dom";

function UserProfile({url}) {
  const id=localStorage.getItem("workshopid")
  console.log(id);
  const [Users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post(`/viewCustById/${id}`,Users)
  .then((res)=>{
    console.log(res);
     SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])

 

  return (
    
    <div>
      <div className="col-8" style={{ marginLeft: "50px" }}>
 
            
            <div className="reader_profile_account_info" style={{width:"60rem" }}>
            <div className="reader_profile_account_info_details row">
              <div className="col-7  reader_profile_account_info_fulldetails ">
                <p>Account Info</p>
    
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Name</p>
                  <p>{Users.firstname} {Users.lastname}</p>
                </div>
                {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Owner Name</p>
                  <p>rfjhrjfrjr</p>
                </div> */}
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Email</p>
                  <p>{Users.email}</p>
                </div>
               
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Gender</p>
                  <p>{Users.gender=='On' ?'Male':'Female'}</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Contact</p>
                  <p>{Users.contact}</p>
                </div>
              
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Image</p>
                  <image src={Users.image} alt='profile Picture' />
                </div>
                {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p></p>
                  <p>hbfrjbrfr</p>
                </div> */}
    
                {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p>Email</p>
                  <p
                    style={{
                      overflow: "hidden",
                      maxWidth: "100%",
                      wordBreak: "break-all",
                    }}
                  >
                    frbfrhjr
                  </p>
                </div> */}
    
                
    
                <div className="reader_profile_account_info_editbtn ">
                  <Link to="">
                    <button className="btn btn-primary">Edit Profile</button>
                  </Link>
                </div>
              </div>
              <div className="col-5 reader_profile_account_info_image">
              {Users && Users.image && Users.image.filename && (
    <img src={`${url}/${Users.image.filename}`} />
)}
              </div>
            </div>
          </div>
         
        
           </div>
   </div>
  );
}

export default UserProfile