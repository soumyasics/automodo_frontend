import React, { useEffect, useState } from 'react'
import "./Viewsinglereq.css"
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Baseurl'

function Viewsinglereq() {
    const {id}=useParams()
    const wid=localStorage.getItem("workshopid")


    const[data,setData]=useState({})
    const[mechanic,setmechanic]=useState([])

    const [selectedMechanic, setSelectedMechanic] = useState(""); 

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

    useEffect(()=>{
        axiosInstance.post(`viewMechanicsByShopid/${wid}`)
        .then((res)=>{
            console.log(res);
            setmechanic(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    const dateTime = new Date(data.bookingdate);
const formattedDate = dateTime.toLocaleDateString();

const servicedate = new Date(data.servicedate);
const service = servicedate.toLocaleDateString();

const approvefn=((b)=>{
    b.preventDefault()
    axiosInstance.post(`approveBookingByWid/${id}`,data)
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            // alert("Request approved succesfully")
        }
        else{
            alert("something went wrong")
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})
const navigate=useNavigate()

const assignmech=((e)=>{
    e.preventDefault()
    axiosInstance.post(`assignMechForService/${id}`, { mechid: selectedMechanic })
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
             alert("Request approved and assign mechnaic succesfully")
            navigate("/workshop-dashboard-viewrequest")
        }
    else{
        alert("Please select a Mechanic")
    }
    })
    .catch((err)=>{
        console.log(err);
    })
})

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

            <div className="details">
            <h4 style={{marginLeft:"140px",fontWeight:"600"}}> Assign Mechanic: </h4> 
             <select style={{width:"200px",height:"40px",marginLeft:"100px",border:"2px solid black",borderRadius:"12px"}}
             value={selectedMechanic} 
             onChange={(e) => setSelectedMechanic(e.target.value)}
             required 
             >
                <option >select</option>

                {mechanic.length ?(
              mechanic.map((a)=>{    
             return( 
                    <option key={a._id} value={a._id}>{a.firstname} {a.lastname}</option>
                    )
                })
             ) : (
               <div>No data available</div>
             )}  
            
        

                </select>
            </div>


           <div className='row'>
            <div className='col-6'>
                <button type='submit' className='btn btn-info'  onClick={(e) => {
                                        approvefn(e);
                                        assignmech(e);
                                      }}>Approve Request</button>
            </div>
            <div className='col-6'>
            <button type='submit' className='btn btn-danger' >Delete Request</button>
</div>

        </div>
        </div> 
         )
}

export default Viewsinglereq