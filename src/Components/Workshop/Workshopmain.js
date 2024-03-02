import React from 'react'
import "./Workshopmain.css"
import Adminsidebar from './Adminsidebar'
import Workshopdashboard from './Workshopdashboard'
import SignupMech from '../Mechanic/SignupMech'

function Workshopmain({data}) {
  return (
    <div>
         <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "workshopdashboard" ?(
            <Workshopdashboard/>
        )
        :<SignupMech/> }
    </div>
    </div>
  )
}

export default Workshopmain