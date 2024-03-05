import React, { useEffect, useState } from 'react'
import "./Viewmyservices.css"
import axiosInstance from '../../Baseurl';

function Viewmyservices() {

    const wid=localStorage.getItem("workshopid")
    console.log(wid);

    const[data,setdata]=useState([])
     useEffect(()=>{
        axiosInstance.post(`viewServicesByWid/${wid}`)
        .then((res)=>{
            console.log(res);
            // setdata(res.data)
            // console.log(res.data+"hello");
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div className='col-8 row'  style={{margin:"20PX",marginLeft:"30px"}}>

{data.length ?(
                data.map((a)=>{
               return(

    <div className="service-box ">
      <div className="service-details">
        <div className="field">
          <label>Service Name:</label>
          <span >Service Name ValueService Name ValueService Name Value</span>
        </div>
        <div className="field">
          <label>Description:</label>
          <span>Description Value</span>
        </div>
        <div className="field">
          <label>Price:</label>
          <span>Price Value</span>
        </div>
        <button>Edit Service</button>
      </div>
    </div>

)
})
) : (
    <div>No Services available</div>
)}


    </div>
  )
}

export default Viewmyservices