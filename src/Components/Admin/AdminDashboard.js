
import React from 'react'
import { Link } from 'react-router-dom';

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './AdminDashboard.css';
import UserList from '../User/UserList';
import MechanicList from '../Mechanic/MechanicList';
import WorkshopList from '../Workshop/WorkshopList';
function AdminDashboard() {

  return (
    <div>
   
   <div className='col-9' style={{margin:"20px"}}>

<div className='admin_dashboard container'>
    <div className='row'>
        <div className='admin_dashboard_text'>
            <h2 className='admindashboard_h2'>Dashboard</h2>
        </div>
        <div className='admin_dashboard_box col-2'>
            <p>UserCount</p>
            <h1 id='count'>4</h1>
        </div>
        <div className='admin_dashboard_box col-2'>
            <p>Contributor count</p>
            <h1 id='count'>4</h1>
        </div>
        <div className='admin_dashboard_box col-2'>
            < p>Advertiser Count</p>
            <h1 id='count'>4</h1>
        </div>
        <div className='admin_dashboard_box col-2'>
            <p>Moderator Count</p>
            <h1 id='count'>1</h1>
        </div>
    </div>
    <div className='row'>
        <div className='admin_dashboard_text'>
            <h2 className='admindashboard_h2' >Users</h2>
        </div>


        <div className='admindashboard_users' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Name</p>
            <p className='col-2'>Status </p>
            <p className='col-3'>Account Status</p>
            {/* <p className='col-2'>Activity</p> */}
            <p className='col-4'>Location</p>
        </div>
   
                <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                    <p className='col-2'>784</p>
                    <p className='col-2'>kefhkrfr</p>
                    <p className='col-2'>Paid </p>
                    <p className='col-3'>Activite</p>

                    <p className='col-4'>ekjnfkufbgekfbef</p>
                </div>
 




        {/*   <div className='admindashboard_users_list' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Name</p>
            <p className='col-2'>Status </p>
            <p className='col-4'>Account Status</p>
         
            <p className='col-4'>Location</p>
        </div> */}

    </div>

    <div className='row'>
        <div className='admin_dashboard_text' style={{ marginTop: '30px' }}>
            <h2 className='admindashboard_h2' >Advertiser</h2>
        </div>
        <div className='admindashboard_users' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Company </p>
            <p className='col-3'>Email </p>
            <p className='col-3'>Contact</p>
            {/* <p className='col-2'>Activity</p> */}
            <p className='col-4'>Location</p>
        </div>
                <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                    <p className='col-2'>regno</p>
                    <p className='col-2'>edmhvedeghd</p>
                    <p className='col-3'>ehjbcehjvedc</p>
                    <p className='col-3'>374634</p>
                    {/* <p className='col-2'>Activity</p> */}
                    <p className='col-4'>ejbdehjyf</p>
                </div>
   

        {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Name</p>
            <p className='col-2'>Status </p>
            <p className='col-4'>Account Status</p>
            <p className='col-4'>Location</p>
        </div> */}

    </div>

    <div className='row'>
        <div className='admin_dashboard_text' style={{ marginTop: '30px' }}>
            <h2 className='admindashboard_h2' >Advertiser</h2>
        </div>
        <div className='admindashboard_users' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Company </p>
            <p className='col-3'>Email </p>
            <p className='col-3'>Contact</p>
            {/* <p className='col-2'>Activity</p> */}
            <p className='col-4'>Location</p>
        </div>
                <div className='admindashboard_users_list' style={{ display: 'flex' }}>
                    <p className='col-2'>regno</p>
                    <p className='col-2'>edmhvedeghd</p>
                    <p className='col-3'>ehjbcehjvedc</p>
                    <p className='col-3'>374634</p>
                    {/* <p className='col-2'>Activity</p> */}
                    <p className='col-4'>ejbdehjyf</p>
                </div>
   

        {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Name</p>
            <p className='col-2'>Status </p>
            <p className='col-4'>Account Status</p>
            <p className='col-4'>Location</p>
        </div> */}

    </div>
        {/* <div className='admindashboard_users_list' style={{ display: 'flex' }}>
            <p className='col-2'>Reg no</p>
            <p className='col-2'>Name</p>
            <p className='col-2'>Status </p>
            <p className='col-4'>Account Status</p>
          
            <p className='col-4'>Location</p>
        </div> */}

    </div>



</div>
</div>

       
    
   
    
  )
=======

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
            <h3 >Admin</h3>
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
            <h3 >Admin</h3>
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