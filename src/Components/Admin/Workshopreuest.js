import React, { useEffect, useState } from 'react'
import "./Workshoprequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'

function Workshopreuest({url}) {
    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewWorkshopReqs`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
        
            console.log(err);
        })
    },[])
    console.log(data._id);
  return (
    <div className='container'>
<div className='col-8'>
            <div className='row' >
                <div className='col'>
                    <h2>Workshop Requests</h2>
                </div>

            </div>
             {data.length ?(
          data.map((a)=>{
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();
         return( 
            <Link to={`/dashboard-workshop-approval/${a._id}`} style={{textDecoration:"none",color:"black"}}>
            <div className='row' style={{padding:"10px"}}>
                <div className='admin_advertiser_request' style={{ display: 'flex' }} >
                <img src={`${url}/${a.image.filename}`}  alt='images' width='130px' height='100px'/>

                    <div>
                        
                    <h4 className='row'>Shop Name : {a.name}</h4>
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

export default Workshopreuest