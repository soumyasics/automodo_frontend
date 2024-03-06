import React, { useEffect, useState } from 'react'
import "./Viewsinglereq.css"
import { useParams } from 'react-router-dom'
import axiosInstance from '../../Baseurl'

function Viewsinglereq() {
    const {id}=useParams()

    const[data,setData]=useState({})

    useEffect(()=>{
        axiosInstance.post(`viewbookigbyid/${id}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

//     const dateTime = new  Date(data.bookingdate);
//     console.log(dateTime);
//       const dateOnly = dateTime.toISOString().split('T')[0];
// console.log(dateOnly);
    //  const servicedate = new  Date(data.servicedate);
    //  const sdate = servicedate.toISOString().split('T')[0];

    const dateTime = new Date(data.bookingdate);
const formattedDate = dateTime.toLocaleDateString();

const servicedate = new Date(data.servicedate);
const service = dateTime.toLocaleDateString();

  return (
<div className="container viewsinglereq">
            <h2  >Service Details</h2>
            <div className="details" style={{marginTop:"20px"}}>
                <span className="label">Service Name:</span>
                <span className="value">{data.serviceid?.serviceName}</span>
            </div>
            <div className="details">
                <span className="label">Description:</span>
                <span className="value">{data.serviceid?.description}</span>
            </div>
            <div className="details">
                <span className="label">Price:</span>
                <span className="value">{data.serviceid?.price}</span>
            </div>
            <div className="details">
                <span className="label">Service Date:</span>
                <span className="value">{service}</span>
            </div>
            <div className="details">
                <span className="label">Bookign Date:</span>
                <span className="value">{formattedDate}</span>
            </div>

            <div className="details">
                <span className="label">Customer Name</span>
                <span className="value">{data.custid?.firstname} {data.custid?.lastname}</span>
            </div>
            <div className="details">
                <span className="label">Customer Email:</span>
                <span className="value">{data.custid?.email}</span>
            </div>
            <div className="details">
                <span className="label">Customer Contact:</span>
                <span className="value">{data.custid?.contact}</span>
            </div>
            <div className="details">
                <span className="label">paymentservice:</span>
                <span className="value">Paid</span>
            </div>


           <div className='row'>
            <div className='col-6'>
                <button type='submit' className='btn btn-info' >Approve Request</button>
            </div>
            <div className='col-6'>
            <button type='submit' className='btn btn-danger' >Delete Request</button>
</div>

        </div>
        </div> 
         )
}

export default Viewsinglereq