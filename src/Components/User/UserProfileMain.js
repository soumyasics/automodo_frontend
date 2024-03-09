import React from 'react'
import ProfileSidebar from './ProfileSidebar';
import UserProfile from './UserProfile';
import UserProfileEdit from './UserProfileEdit';
import Userviewbookedservices from './Userviewbookedservices';
// import "./Workshopmain.css"
// import Adminsidebar from './Adminsidebar'
// import Workshopdashboard from './Workshopdashboard'
// import SignupMech from '../Mechanic/SignupMech'
// import Addservice from './Addservice'
// import Viewmyservices from './Viewmyservices'

const url = "http://localhost:4010";
// const url= "http://hybrid.srishticampus.in:4006/"


function UserProfileMain({data}) {
  return (
    <div>
         <div className='container_adminprofile'>
        <ProfileSidebar/>
        {data === "viewprof" ?(
            <UserProfile url={url}/>
        )  
        :data=="editprof"?(
          <UserProfileEdit/>
        ):data=="bookedservices"?(
          <Userviewbookedservices/>
        )
        
        :'no data'
      // :data=="myservices"?(
        //   <Viewmyservices/>
        // )
        // :<SignupMech/>
         }
    </div>
    </div>
  )
}

export default UserProfileMain