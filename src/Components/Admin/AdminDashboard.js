import React from 'react'

function AdminDashboard() {
  return (
    <div>
    <div className='row'>
      <div className='col-4'>
        <div className='profU-name row'>
        <img className='col-5 profU-img' src={profilepic} />
          <p className='col-5 profU-left1'>Robin Abraham</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Products ➡️</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Warehouse ➡️</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Help center ➡️</p>
        </div>
        <div >
          <button className='profU-logout'>LOG OUT</button>
        </div>
      </div>

      <div className='col-7 profU-details'>
        <h3 className='profU-head'><b>DETAILS</b></h3>
        <hr/>
        <div className='profU-body'>
          <p>Name : Robin Abraham</p>
          <p>Mobile : 89xxxxx32</p>
          <p>Email : robxxx@gmail.com</p>
          <p>Gender : Male</p>
          <p>DOB : 02/02/2001</p>
        </div>
        <div>
          <button className='profU-edit'><Link className='Link-decoration' to='/ProfileeditUser'>EDIT</Link></button>
        </div>
      </div>
    </div><div className='row'>
      <div className='col-4'>
        <div className='profU-name row'>
        <img className='col-5 profU-img' src={profilepic} />
          <p className='col-5 profU-left1'>Robin Abraham</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Products ➡️</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Warehouse ➡️</p>
        </div>
        <div className='profU-name1'>
          <p className='profU-left'>Help center ➡️</p>
        </div>
        <div >
          <button className='profU-logout'>LOG OUT</button>
        </div>
      </div>

      <div className='col-7 profU-details'>
        <h3 className='profU-head'><b>DETAILS</b></h3>
        <hr/>
        <div className='profU-body'>
          <p>Name : Robin Abraham</p>
          <p>Mobile : 89xxxxx32</p>
          <p>Email : robxxx@gmail.com</p>
          <p>Gender : Male</p>
          <p>DOB : 02/02/2001</p>
        </div>
        <div>
          <button className='profU-edit'><Link className='Link-decoration' to='/ProfileeditUser'>EDIT</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard