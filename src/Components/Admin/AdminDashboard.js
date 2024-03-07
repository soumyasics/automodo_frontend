import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AdminDashboard.css';
import UserList from '../User/UserList';
import MechanicList from '../Mechanic/MechanicList';
import WorkshopList from '../Workshop/WorkshopList';
import Workshoprequest from './Workshoprequest';
const url = "http://localhost:4010";

function AdminDashboard() {

  const[State,setState]=useState(1)
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

  let clickUser=()=>{
   setState(1)
  }

  let clickMechanic=()=>{
    setState(2)
  }
  let clickWorkshop=()=>{
    setState(3)
  }
  let clickreq=()=>{
    setState(4)
  }

  if(State==1){
    return(
      <div>
      <div className='row'>
        <div className='col-3'>
          <div className='sidebar-admin row'>
            <h3  className='sidebar-heading'>Admin</h3>
            <hr/>
            <div className='sidebar-dash-btnflex'>
            <button className='sidebar-dash-btn' onClick={clickUser}>User</button>
            <button className='sidebar-dash-btn' onClick={clickMechanic}>Mechanic</button>
            <button className='sidebar-dash-btn' onClick={clickWorkshop}>Workshop</button>
            <button className='sidebar-dash-btn'  onClick={clickreq}>Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
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
        
         <UserList/>
      
        </div>
      </div>
     
      </div>
    )
   
  }

  
  if(State==2){
    return(
      <div>
      <div className='row'>
        <div className='col-3'>
          <div className='sidebar-admin row'>
            <h3 className='sidebar-heading'>Admin</h3>
            <hr/>
            <div className='sidebar-dash-btnflex'>
            <button className='sidebar-dash-btn' onClick={clickUser}>User</button>
            <button className='sidebar-dash-btn' onClick={clickMechanic}>Mechanic</button>
            <button className='sidebar-dash-btn' onClick={clickWorkshop}>Workshop</button>
            <button className='sidebar-dash-btn' onClick={clickreq}>Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
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
        
         <MechanicList/>
      
        </div>
      </div>
     
      </div>
    )
   
  }
  
  if(State==3){
    return(
      <div>
      <div className='row'>
        <div className='col-3'>
          <div className='sidebar-admin row'>
            <h3 className='sidebar-heading'>Admin</h3>
            <hr/>
            <div className='sidebar-dash-btnflex'>
            <button className='sidebar-dash-btn' onClick={clickUser}>User</button>
            <button className='sidebar-dash-btn' onClick={clickMechanic}>Mechanic</button>
            <button className='sidebar-dash-btn' onClick={clickWorkshop}>Workshop</button>
            <button className='sidebar-dash-btn' onClick={clickreq}>Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
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
        
         <WorkshopList/>
      
        </div>
      </div>
     
      </div>
    )
   
  }

  if(State==4){
    return(
      <div>
      <div className='row'>
        <div className='col-3'>
          <div className='sidebar-admin row'>
            <h3 className='sidebar-heading'>Admin</h3>
            <hr/>
            <div className='sidebar-dash-btnflex'>
            <button className='sidebar-dash-btn' onClick={clickUser}>User</button>
            <button className='sidebar-dash-btn' onClick={clickMechanic}>Mechanic</button>
            <button className='sidebar-dash-btn' onClick={clickWorkshop}>Workshop</button>
            <button className='sidebar-dash-btn' onClick={clickreq}>Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
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
        
         <Workshoprequest url={url}/>
     
      
        </div>
      </div>
     
      </div>
    )
   
  }
}

export default AdminDashboard
