import React, { useEffect, useState } from 'react'
import './MechanicList.css';
import axiosInstance from '../../Baseurl'

function MechanicList() {
  const [users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewMechanics',users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(users)
  return (
    <div>
      <div>
        <h3 className='MechanicList-heading'>MECHANIC LIST :</h3>
        {users && users.length ? (
          users.map((user) => ( // Changed the map function
            <div className='WorkshopList-flex' key={user.id}>
              <div>
                {'Email : ' + user.email}
              </div>
              <div>
                <p>any : lorem ipsum</p>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}      </div>
    </div>
  )
}

export default MechanicList