import React, { useEffect, useState } from 'react'
import './MechanicList.css';
import axiosInstance from '../../Baseurl'

function MechanicList() {
  const [Users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewMechanics',Users)
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
        <h3 className='MechanicList-heading'>MECHANIC LIST :</h3>
        {Users.map((b)=>{
          return(
          <div className='MechanicList-flex'>
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

export default MechanicList