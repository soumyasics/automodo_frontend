import React from 'react'
import "./MechanicMain.css"
import MechanicSidebar from './MechanicSidebar.js'
import MechanicDashboard from './MechanicDashboard.js'
const url = "http://localhost:4010";


function MechanicMain({data}) {
  return (
    <div>
         <div className='container_mechanicprofile'>
        <MechanicSidebar/>
        {data === "mechanicdashboard" ?(
            <MechanicDashboard url={url}/>
        )
        :'ll' }
    </div>
    </div>
  )
}

export default MechanicMain