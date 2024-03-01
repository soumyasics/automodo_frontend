import React, { useEffect, useState } from "react";
import "./Workshopdashboard.css";
import axiosInstance from '../../Baseurl'
import { Link } from "react-router-dom";

function Workshopdashboard() {
  const [Users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewCustomers',Users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(Users)

  return (
    
    <div>
      <div className="col-8" style={{ marginLeft: "50px" }}>
     {Users.map((b)=>{
          return(
            
            <div className="reader_profile_account_info" style={{width:"60rem" }}>
            <div className="reader_profile_account_info_details row">
              <div className="col-7  reader_profile_account_info_fulldetails ">
                <p>Account Info</p>
    
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Shop Name</p>
                  <p>rkfhrkufjrfr</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Owner Name</p>
                  <p>rfjhrjfrjr</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Email</p>
                  <p>{b.email}</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Street</p>
                  <p>ejfbhjherh</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">City</p>
                  <p>rfhrufrf</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">State</p>
                  <p>fkjhfjkrf</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Nationality</p>
                  <p>fkjrhkfjrf</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Number</p>
                  <p>iheriuirfmnf</p>
                </div>
                <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-4">Reg No</p>
                  <p>fjbrhjgfrhjsdfhdu</p>
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
                <img src={""} />
              </div>
            </div>
          </div>
         
          )})}
           </div>
   </div>
  );
}


export default Workshopdashboard;
