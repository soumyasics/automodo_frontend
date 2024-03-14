import React, { useEffect, useState } from 'react'
import "./ViewMechaniclist.css"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'


function ViewMechaniclist({url}) {
    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`/viewWorkshopReqs`)
        .then((res)=>{
            console.log(res.data);
             setData(res.data.data)
        })
        .catch((err)=>{

            console.log(err);
        })
    },[])
    // console.log(data._id);
    

   

  return (
    <div className='container'>

<div className='col-8'>
<div className='viewmechanic-main-box' style={{padding:"10px"}}>
            <h3 className=' viewmechanic-heading'>Mechanic List</h3>
            <div>
            </div>

            <div className='row viewmechanic-main'>
            {data ? (
                
  data.length ? (
    data.map((a) => {
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();
         return( 
            <div className="card col-4 viewmechanic-card">
          
             <div >
   <img className="card-img-top viewmechanic-img" src={`${url}/${a.image?.filename}`} alt='images'/>
   <div className="card-body">
    
    <hr/>
    
    <div className='viewmechanic-name'>
    {a?.name}
    </div> 
    {a?.email}<br/>
    {a?.district}
  
    </div> 
  </div>
  <div>
    <button className='viewmechanic-deletebtn'>Delete</button>
  </div>
  
  </div>
      )
    })
 ) : (
   <div>No data available</div>
   )
   ) : (
     <div>No request is available</div>
   )}


</div>
    </div>
    </div>
    </div>
  )
}

export default ViewMechaniclist