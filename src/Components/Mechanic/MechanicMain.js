import React from 'react'
import "./MechanicMain.css"
import MechanicSidebar from './MechanicSidebar.js'
import MechanicDashboard from './MechanicDashboard.js'
import EditMechanicProfile from './EditMechanicProfile.js';
const url = "http://localhost:4010";
// const url= "http://hybrid.srishticampus.in:4006/"



function MechanicMain({data}) {
  return (
    <div>
         <div className='container_mechanicprofile'>
        <MechanicSidebar/>
        {data === "mechanicdashboard" ?(
            <MechanicDashboard url={url}/>
        )
        :data=="profileedit"?(
          <EditMechanicProfile/>
        ):'no data'}
    </div>
    </div>
  )
}

export default MechanicMain