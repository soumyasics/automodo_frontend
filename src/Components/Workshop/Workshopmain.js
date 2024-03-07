import React from 'react'
import "./Workshopmain.css"
import Adminsidebar from './Adminsidebar'
import Workshopdashboard from './Workshopdashboard'
import SignupMech from '../Mechanic/SignupMech'
import Addservice from './Addservice'
import Viewmyservices from './Viewmyservices'
import Viewservicerequest from './Viewservicerequest'
import SparepartsWorkshop from './SparepartsWorkshop'
import EditProfile from './EditWorkshopProfile'
import Viewsinglereq from './Viewsinglereq'

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
        ):data=="viewrequest"?(
          <Viewservicerequest/>
        ):data=="profileedit"?(
          <EditProfile/>
        ):data=="addspareparts"?(
          <SparepartsWorkshop/>
        ):data=="singlerequest"?(
          <Viewsinglereq/>
        )
        :<SignupMech/> }
    </div>
    </div>
  )
}

export default Workshopmain