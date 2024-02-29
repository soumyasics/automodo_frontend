import React, { useEffect, useState } from 'react'
import './WorkshopList.css';
import axios from 'axios'

function WorkshopList() {
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
        <h3 className=' WorkshopList-heading'>WORKSHOP LIST</h3>
        {Userz.map((b)=>{
          return(
          <div className=' WorkshopList-flex'>
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

export default WorkshopList