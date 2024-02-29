import React from 'react'
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
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
}

export default AdminDashboard