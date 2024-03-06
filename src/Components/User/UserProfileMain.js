import React from 'react'
import ProfileSidebar from './ProfileSidebar';
import UserProfile from './UserProfile';
// import "./Workshopmain.css"
// import Adminsidebar from './Adminsidebar'
// import Workshopdashboard from './Workshopdashboard'
// import SignupMech from '../Mechanic/SignupMech'
// import Addservice from './Addservice'
// import Viewmyservices from './Viewmyservices'

const url = "http://localhost:4010";


function UserProfileMain({data}) {
  return (
    <div>
         <div className='container_adminprofile'>
        <ProfileSidebar/>
        {data === "viewprof" ?(
            <UserProfile url={url}/>
        ):'no data'
        
        // :data=="addservice"?(
        //   <Addservice/>
        // ):data=="myservices"?(
        //   <Viewmyservices/>
        // )
        // :<SignupMech/>
         }
    </div>
    </div>
  )
}

export default UserProfileMain