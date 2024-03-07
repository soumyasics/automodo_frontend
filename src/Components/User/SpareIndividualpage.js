import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './SpareIndividual.css';
import axiosInstance from '../../Baseurl';


function SpareIndividualpage({url}) {
  const { id } = useParams()




  let [Count,SetCount]=useState(1)
  const [data, setdata] = useState({})


const [order,setorder]=useState({
  userid:"",
  sparepartid:"",
  count:"",
  price:""
})

  useEffect(() => {
    axiosInstance.post(`/viewSparePartById/${id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(data)
function Addcount(){
  SetCount(Count++)


}
function Subcount(){
  SetCount(Count--)
}

console.log(data);
  return (
   
      <div className="row">
        <div
          id="carouselExample"
          class="carousel slide col-5  "
        >
          
          <div>
            <p style={{paddingLeft:"100px",paddingTop:"20PX"}}>PartName: {data?.partName}</p>
           <img className="card-img-top spareList-img" src={`${url}/${data.img?.filename}`} alt='images' style={{margin:"40px"}}/>
           </div>
          <br /> <br /> <br /> <br />
          <div>
            <button className='spareindbuy-btn' type='submit'>BUY NOW</button>
          </div>
        </div>

        <div className="col-7">
          {/* <div className="spareindprod-title">
            <h2><b>{data?.title}</b></h2>
           
          </div> */}
          <hr style={{ width: '50rem' }} />

          <div>
            {/* <p className='spareind-price'> Rs: {state.price}</p> */}
          </div>

          <hr style={{ width: '50rem' }} />


          <div>
           
            <div>

            <h6 className='spareind-dec'>Description : </h6>
             <p> {data?.description}</p>
           
            </div>
            <hr style={{ width: '50rem' }} />
            <div>
              <h6 className='spareind-spec'>Shopname:</h6>
              <p>{data.shopid?.name}</p>
            </div>
            <hr style={{ width: '50rem' }} />

            <div>
              <h6 className='spareind-spec'>Price:</h6>
              <p>{data?.price}</p>
            </div>
            <hr style={{ width: '50rem' }} />
            <div>
            <h6 className='spareind-spec'>Manufacturer:</h6>
             <p>{data?.manufacturer}</p> 
            </div>
            <hr style={{ width: '50rem' }} />
<div>
  <button className='spareind-btn' onClick={Addcount}>+</button><br/>
  <p className='spareind-count'> Spare count: {Count}</p>
  <button  className='spareind-btn'onClick={Subcount}>-</button>
 
</div>
          </div>
        </div>



      </div>
  
  )}

      export default SpareIndividualpage