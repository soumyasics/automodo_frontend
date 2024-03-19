import React, { useEffect, useState } from 'react'
import './Viewupdatedservice.css'
import CustImg from '../../Assets/cat3.png'
import axiosInstance from '../../Baseurl';
import { Link } from 'react-router-dom';


function ViewUpdatedservice() {
  const mechid=localStorage.getItem("mechid")
  console.log(mechid+"mechid");
const[data,setData]=useState([])

useEffect(()=>{
  axiosInstance.post(`viewBookingByMechid/${mechid}`)
  .then((res)=>{
    console.log(res);
    setData(res.data.data)
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

  return (
    <div>


      <div className='updated-service-req-title'>
        <h1>Service Updations</h1>
      </div>
     
<div  >
      {data.length ? (
          data.map((a) => {
            const dateTime = new Date(a.bookingdate);
            const dateOnly = dateTime.toISOString().split("T")[0];

            const servicedate = new Date(a.servicedate);
            const sdate = servicedate.toISOString().split("T")[0];

            return (
              <div>
      <div className='row' >
        <div className='updated-service-req-description '>
        <h5 className='col-12 text-danger'>Service : {a.serviceid?.serviceName}</h5>
        {/* <h6 className='col-3 service-req-date'>Service Date : 03/06/2024</h6>
        <h6 className='col-3 service-req-date'>Booking Date : 03/06/2024</h6> */}

        <h6 className='text-success'>Service Description :{a.serviceid?.description} </h6>
        </div>
        <div className='updated-service-req-customer col-6'>
          <h4 className='updated-service-req-customer-title'>CUSTOMER DETAILS</h4>
          <hr></hr>
          <div className='row'>
            <div className='col-12'>
              <p>Name : {a.custid?.firstname}  {a.custid?.lastname} </p>
              <p>Contact :  {a.custid?.contact}</p>
              <p>Payment Status : Paid</p>
              <p>Booking Date : {dateOnly}</p>
              <p>Service Date : {sdate} </p>
            </div>
            {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
          </div>
        </div>

        <div className='updated-service-req-customer col-6'>
          <h4 className='updated-service-req-customer-title'>UPDATION</h4>
          <hr></hr>
          <div className='row'>
            <div className='col-12'>
              
              
              <label>Updation : lorem ipsum</label><br/>
            <img src='' alt='updated image'/><br/>
            <label>Date : 18/03/2024</label>
             
            </div>
            {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
          </div>
        </div>
        
      
      </div>
      </div>
        )
          })
        ) : (
          <div  >No data available</div>
        )}


      </div>

      </div>
 
  )
}


export default ViewUpdatedservice