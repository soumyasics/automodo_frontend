import React, { useEffect, useState } from 'react'
import "./Viewservices.css"
import axiosInstance from '../../Baseurl'

function Viewservices() {
    const [data,setdata]=useState([])
    useEffect(()=>{
    axiosInstance.post(`viewallservices`)
    .then((res)=>{
        console.log(res);
       setdata(res.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
  return (
    <div>
       <div className='container'>
       {data.length ?(
          data.map((a)=>{
         return(

        <div className='row viewservices-box'>
          <div className="row">
            <div className="col">
              <p>Service Name:</p>
            </div>
            <div className="col">
              <p>{a.serviceName}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Description Name:</p>
            </div>
            <div className="col">
              <p>{a.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Price:</p>
            </div>
            <div className="col">
              <p>{a.price}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Shop Name:</p>
            </div>
            <div className="col">
              <p>{a.shopid.name}</p>
            </div>
          </div>
        </div>
              )
            })
            ) : (
             <div>No data available</div>
            )} 
           
      </div>

    </div>
  )
}

export default Viewservices