import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AdminDashboard.css';
import UserList from '../User/UserList';
import MechanicList from '../Mechanic/MechanicList';
import WorkshopList from '../Workshop/WorkshopList';
function AdminDashboard() {

  const[State,setState]=useState(1)

  let clickUser=()=>{
   setState(1)
  }

  let clickMechanic=()=>{
    setState(2)
  }
  let clickWorkshop=()=>{
    setState(3)
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
            <button className='sidebar-dash-btn' >Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
          <div className='row'>
           <div className='col-3 dashboard-box'>
            <p>Users</p>
            <hr/> <h5>56</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Mechanic</p>
            <hr/> <h5>16</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Workshop</p>
            <hr/> <h5>5</h5>
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
            <button className='sidebar-dash-btn' >Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
          <div className='row'>
           <div className='col-3 dashboard-box'>
            <p>Users</p>
            <hr/> <h5>56</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Mechanic</p>
            <hr/> <h5>16</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Workshop</p>
            <hr/> <h5>5</h5>
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
            <button className='sidebar-dash-btn' >Requests</button>
            <button className='Admin-logout'>LOG OUT</button>
            </div>
          </div>
         
         
        </div>
  
        <div className='col-8 AdminDash-details'>
          <div className='row'>
           <div className='col-3 dashboard-box'>
            <p>Users</p>
            <hr/> <h5>56</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Mechanic</p>
            <hr/> <h5>16</h5>
           </div>
           <div className='col-3 dashboard-box'>
           <p>Workshop</p>
            <hr/> <h5>5</h5>
           </div>
          </div>
        
         <WorkshopList/>
      
        </div>
      </div>
     
      </div>
    )
   
  }
}

export default AdminDashboard