import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Sparepartslist.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';


function SparepartsList() {
    const [state,setState]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setState(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])
    console.log(state)

  return (
    <div>
        <div>
            <h1 className='spareList-head'>Spare Parts</h1>
        </div>
        
        <div className='row spareList-main'>
            {state.map((c)=>{
                return(
                <div className="card col-4 spareList-col">
                    <Link  to={`/SparepartsInd/${c.id}`}>
                     <div >
           <img className="card-img-top spareList-img" src={c.image+" "} />
           <div className="card-body">
            <div className='spareList-name'>
            {c.title+" "}
            </div> 
            <hr/>
            <div className='spareList-price'>
            {'Rs. '+c.price+" "}
            </div> 
            </div> 
          </div>
          </Link>
          </div>
                )

            })}
        </div>
        
    </div>
  )
}


  
export default SparepartsList