import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import { useParams } from 'react-router-dom'


function WorkshopRequestApproval() {
  const {id}=useParams()
  const [state,setState]=useState({})
  useEffect(()=>{
      axiosInstance.get(`/approveWorkshopById/${id}`)
      .then((res)=>{
          setState(res.data)
      })
      .catch((err)=>{
          console.log(err)

      })
  },[])
  console.log(state)
  console.log('id ='+id);

return (
  <div className='row'>
   
    
      <div class="card col-4" style={{ margin:'1rem',width:'30%'}}>
<img src={state.image} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
      
      

</div>
)
}

export default WorkshopRequestApproval