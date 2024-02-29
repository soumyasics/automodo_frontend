import React, { useEffect, useState } from 'react'
import './UserList.css';
import  axiosInstance from '../../Baseurl'

function UserList() {
  const [Users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewCustomers',Users,)
      .then((res)=>{
        console.log(res)
        SetUsers(res.data.data)
       })
       .catch((error)=>{
        console.log(error)
       })
 },[])
 console.log(Users)
  return (
    <div>
      <div>
        <h3 className='usersList-heading'>USERS LIST</h3>
        {Users.map((b)=>{
          return(
          <div className='ban-flex'>
            {/* <div>
             <p>{b.id}</p>
             </div>
             <div>
              {'Name : '+b.name}
              </div> */}
              <div>
              {'Email : '+b.email}
              </div>
              <div>
              <p>any : lorem ipsum</p>
              </div>              
          </div>
          )
        })} 
      </div>
    </div>
  )
}

export default UserList