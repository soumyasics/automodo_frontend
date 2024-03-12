import React, { useEffect, useState } from 'react'
import "./AdminEmergencyRequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'



function AdminEmergencyRequest({url}) {

    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`/viewWorkshopReqs`,data)
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
            <div className='row' >
                <div className='col'>
                    <h2>Emergency Requests</h2>
                </div>

            </div>
             {data.length ?(
          data.map((a)=>{

           
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();


         return( 
            <Link to={`/dashboard-emergency-request/${a?._id}`} style={{textDecoration:"none",color:"black"}}>
            <div className='row workshop-emergency-request-main-box' style={{padding:"10px"}}>
                <div className='admin_emergency_request' style={{ display: 'flex' }} >

                {/* <img src={img}  alt='images' width='130px' height='100px'/> */}

                <img src={`${url}/${a.image?.filename}`}  alt='images' width='130px' height='100px'/>


                    <div>
                        
                    <h4 className='row'>Name : {a.name}</h4>
                    <div className='row'>
                            <div className='col-6 emergencywork-email'>
                            <p>Email :{a.email}</p>

                            </div>
                            <div className='col-6 emergencywork-reg'>
                            <p id='arrow'>Reg No :{a.regno}</p>

                            </div>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
            
            </Link>
      )
    })
 ) : (
   <div>No data available</div>
 )} 



</div>
    </div>
  )

}
export default AdminEmergencyRequest