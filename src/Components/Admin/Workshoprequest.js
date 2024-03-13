import React, { useEffect, useState } from 'react'
import "./Workshoprequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'



function Workshoprequest({url}) {

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
<div className=' workshop-request-main-box' style={{padding:"10px"}}>
            <h3 className=' Workshop-request-heading'>WORKSHOP LIST</h3>
            <div>
            </div>
             {data.length ?(
          data.map((a)=>{
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();
         return( 
          <div  >
            <Link to={`/dashboard-workshop-approval/${a?._id}`}  style={{textDecoration:"none",color:"black"}}>
          
                <div className='admin_advertiser_request workshop-request-box' style={{ display: 'flex' }} >

                {/* <img src={img}  alt='images' width='130px' height='100px'/> */}

                <img src={`${url}/${a.image?.filename}`}  alt='images' width='130px' height='100px'/>


                    <div>
                        
                    <h4>Shop Name : {a.name}</h4>
                    <hr/>
                    <div className='row'>
                            <div className='col-6 work-email'>
                            <p>Email :{a.email}</p>

                            </div>
                            <div className='col-6 work-reg'>
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
export default Workshoprequest