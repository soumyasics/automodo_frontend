import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './SpareIndividual.css';


function SpareIndividualpage() {
  const { id } = useParams()
  let [Count,SetCount]=useState(1)
  const [state, setState] = useState({})
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setState(res.data)
      })
      .catch((err) => {
        console.log(err)

      })
  }, [])
  console.log(state)
function Addcount(){
  SetCount(Count++)


}
function Subcount(){
  SetCount(Count--)
}
  return (
   
      <div className="row">
        <div
          id="carouselExample"
          class="carousel slide col-5  "
        >
          <div class="carousel-inner " >
            <div class="carousel-item active spareindcaro-change" >
              <img src={state.image} class="d-block w-100 spareindprod-img" alt="..." />
            </div>
            <div class="carousel-item spareindcaro-change">
              <img src={state.image} class="d-block w-100 spareindprod-img" alt="..." />
            </div>
            <div class="carousel-item spareindcaro-change">
              <img src={state.image} class="d-block w-100 spareindprod-img" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden" >Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <br /> <br /> <br /> <br />
          <div>
            <button className='spareindbuy-btn' type='submit'>BUY NOW</button>
          </div>
        </div>

        <div className="col-7">
          <div className="spareindprod-title">
            <h2><b>{state.title}</b></h2>
           
          </div>
          <hr style={{ width: '50rem' }} />

          <div>
            <p className='spareind-price'> Rs: {state.price}</p>
          </div>

          <hr style={{ width: '50rem' }} />


          <div>
           
            <div>

            <h6 className='spareind-dec'>Description : </h6>
             <p> {state.description}</p>
           
            </div>
            <hr style={{ width: '50rem' }} />
            <div>
              <h6 className='spareind-spec'>Specifications:</h6>
              <p>gdfbdfbdfbcbncvcvbb</p>
            </div>
            <hr style={{ width: '50rem' }} />
            <div>
            <h6 className='spareind-spec'>Manufacturer:</h6>
              <p>Manufacturer</p>
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