import React, { useEffect, useState } from 'react'
import './WorkshopList.css';
import axiosInstance from '../../Baseurl'

function WorkshopList() {
  const [Users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewApprovedWorkshops',Users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(Users)
  return (
    <div>
      <div>
        <h3 className=' WorkshopList-heading'>WORKSHOP LIST :</h3>
        {Users.map((b)=>{
          return(
          <div className=' WorkshopList-flex'>
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

export default WorkshopList