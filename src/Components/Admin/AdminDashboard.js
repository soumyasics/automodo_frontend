import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import './AdminDashboard.css'
function AdminDashboard() {
  const[users,SetUsers]=useState({})
  const[mech,SetMech]=useState({})
  const[workshop,SetWorkshop]=useState({})
 useEffect(()=>{
  axiosInstance.post('/viewCustomers',users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 useEffect(()=>{
  axiosInstance.post('/viewMechanics',mech)
  .then((res)=>{
    SetMech(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])

 useEffect(()=>{
  axiosInstance.post('/viewApprovedWorkshops',workshop)
  .then((res)=>{
    SetWorkshop(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
  return (
    
    <div>
       <div className=' AdminDash-details'>
          <div className='row'>
           <div className='col-3 dashboard-box'>
            <p>Users</p>
            <hr/> <h5>{users && users.length ? ( users.length) : '0'  }</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Mechanic</p>
            <hr/> <h5>{mech && mech.length ? ( mech.length) : '0'  } </h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Workshop</p>
            <hr/> <h5>{workshop && workshop.length ? ( workshop.length) : '0'  }</h5>
           </div>
          </div>
        
      
        </div>
    </div>
  )
}

export default AdminDashboard