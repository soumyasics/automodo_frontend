import React, { useEffect, useState } from 'react'
import './MechanicList.css';
import axios from 'axios'

function MechanicList() {
  const [Userz,SetUserz]=useState([]);

 useEffect(()=>{
  axios.get('https://api.escuelajs.co/api/v1/users')
  .then((res)=>{
    SetUserz(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(Userz)
  return (
    <div>
      <div>
        <h3 className='MechanicList-heading'>MECHANIC LIST</h3>
        {Userz.map((b)=>{
          return(
          <div className='MechanicList-flex'>
            <div>
             <p>{b.id}</p>
             </div>
             <div>
              {'Name : '+b.name}
              </div>
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