import React from 'react'
import "./Workshopmain.css"
import Adminsidebar from './Adminsidebar'
import Workshopdashboard from './Workshopdashboard'

function Workshopmain({data}) {
  return (
    <div>
         <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "workshopdashboard" ?(
            <Workshopdashboard/>
        )
        :"" }
    </div>
    </div>
  )
}

export default Workshopmain