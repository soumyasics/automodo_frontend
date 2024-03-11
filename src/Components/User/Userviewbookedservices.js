import React, { useEffect, useState } from 'react'
import "./Userviewbookedservices.css"
import img from "../../Assets/cat2.png"
import axiosInstance from '../../Baseurl';
import { Link } from 'react-router-dom';

function Userviewbookedservices() {
    const id=localStorage.getItem("userid")
    console.log(id);

    const [data,setdata]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewBookingByCustid/${id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div style={{display:"flex"}}>
                         {data.length ?(
              data.map((a)=>{
    
               
                   const dateTime = new  Date(a.bookingdate);
                   const dateOnly = dateTime.toISOString().split('T')[0];

                   const servicedate = new  Date(a.servicedate);
                   const sdate = servicedate.toISOString().split('T')[0];

    
    console.log(a._id+"serviceid");
             return( 
<Link to={`/bookservices/${a.serviceid._id}`} style={{textDecoration:"none",color:"black"}}>
    <div className="booked-service-container" >
      {/* <img src={img} alt="Service Image" className="service-image" /> */}
      <div className="booking-info">
        <p><strong>Booking Date:</strong> {dateOnly}</p>
        <p><strong>Service Date:</strong> {sdate}</p>
        <p><strong>Service  Name:</strong> {a.serviceid?.serviceName}</p>
        <p><strong>Service Center Name:</strong> {a.shopid?.name}</p>
        <p><strong>Service Center Contact:</strong>  {a.shopid?.contact}</p>
        <p><strong>Booking Status:</strong> {a.approvalstatus ? 'Approved' : 'Pending'}</p>
        <p>
            <button type='submit' className='btn btn-danger'>Cancel Service</button>
        </p>
      </div>
    </div></Link>
              )
            })
         ) : (
           <div>No data available</div>
         )}  
        
        
    
    </div>
  )
}

export default Userviewbookedservices