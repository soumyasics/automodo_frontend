import React, { useEffect, useState } from 'react'
import "./AdminEmergencyRequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'



function AdminEmergencyRequest({url}) {

    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`/adminApproveEmergencyReqs`,data)
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
<div className=' emergency-request-main-box' style={{padding:"10px"}}>
            <h3 className=' emergency-request-heading'>EMERGENCY REQUEST</h3>
            <div>
            </div>
             {data.length ?(
          data.map((a)=>{
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();
         return( 
          <div  >
            <Link to={`/dashboard-workshop-emergency-approval/${a?._id}`}  style={{textDecoration:"none",color:"black"}}>
          
                <div className='emergency-admin_advertiser_request emergency-request-box' style={{ display: 'flex' }} >

                {/* <img src={img}  alt='images' width='130px' height='100px'/> */}

                <img src={`${url}/${a.image?.filename}`}  alt='images' width='130px' height='100px'/>


                    <div>
                        
                    <h4>Shop Name : {a.name}</h4>
                    <hr/>
                    <div className='row'>
                            <div className='col-6 emergency-work-email'>
                            <p>Email :{a.email}</p>

                            </div>
                            <div className='col-6 emergency-work-reg'>
                            <p id='arrow'>Reg No :{a.regno}</p>

                            </div>
                    </div>
                    
                    </div>
                    
                    </div>
         
            
            </Link>
            </div>
      )
    })
 ) : (
   <div>No data available</div>
 )} 



</div>
    </div>
    </div>)

}
export default AdminEmergencyRequest