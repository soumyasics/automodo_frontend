import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
function AdminDashboard() {
  return (
    <div>
    <div className='row'>
      <div className='col-4'>
        <div className='sidebar-admin row'>
          <h3 className='col-5'>Admin</h3>
          <hr/>
          <p>User</p>
          <p>Mechanic</p>
          <p>Workshop</p>
          <p>Requests</p>
          <button className='Admin-logout'>LOG OUT</button>
        
        </div>
       
       
      </div>

      <div className='col-7 profU-details'>
        <div className='row'>
         <div className='col-3 dashboard-box'>
          <p>1</p>
         </div>
         <div className='col-3 dashboard-box'>
          <p>1</p>
         </div>
         <div className='col-3 dashboard-box'>
          <p>1</p>
         </div>
        </div>
        
        <hr/>
       
    
      </div>
    </div>
   
    </div>
  )
}

export default AdminDashboard