import React from 'react'
import "./Workshopmain.css"
import Adminsidebar from './Adminsidebar'
import Workshopdashboard from './Workshopdashboard'
import SignupMech from '../Mechanic/SignupMech'
import Addservice from './Addservice'

const url = "http://localhost:4010";


function Workshopmain({data}) {
  return (
    <div>
         <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "workshopdashboard" ?(
            <Workshopdashboard url={url}/>
        ):data=="addservice"?(
          <Addservice/>
        )
        :<SignupMech/> }
    </div>
    </div>
  )
}

export default Workshopmain