import React from 'react'
import AdminDashboardSidebar from './AdminDashboardSidebar';
import AdminDashboard from './AdminDashboard';
import UserList from '../User/UserList'
import MechanicList from '../Mechanic/MechanicList'
import WorkshopList from '../Workshop/WorkshopList'
import Workshoprequest from './Workshoprequest';
import AdminEmergencyRequest from './AdminEmergencyRequest';


const url = "http://localhost:4006";
// const url= "http://hybrid.srishticampus.in:4006/"



function Workshopmain({data}) {
  return (
    <div>
         <div style={{display:'flex'}}>
        <AdminDashboardSidebar/>
        {data === "Admindashboard" ?(
             <AdminDashboard url={url}/>
         ):data=="UserList"?(
          <UserList/>
         ):data=="mechanic"?(
          <MechanicList/>
        ):data=="workshop"?(
           <WorkshopList/>
        ):data=="request"?(
         <Workshoprequest/>
         ):data=="emergency"?(
          <AdminEmergencyRequest/>
        )
        :'No data' }
    </div>
    </div>
  )
}

export default Workshopmain