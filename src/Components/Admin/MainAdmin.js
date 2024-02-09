import React from 'react'
import './MainAdmin.css'
import mainImg from '../../Assets/mainimg.png'
import Cat1 from '../../Assets/cat1.png'
import Cat2 from '../../Assets/cat2.png'
import Cat3 from '../../Assets/cat3.png'
import Cat4 from '../../Assets/cat4.png'
import Conv from '../../Assets/convenience.png'
import HeadPhone from '../../Assets/headp.png'
import Arrow from '../../Assets/Arrow.png'
import Rectangle from '../../Assets/rect.png'
import Polygon from '../../Assets/poly.png'
import Fourarrow from '../../Assets/fourarrow.png'
import Car from '../../Assets/carrep.png'
import Ellipse from '../../Assets/Ellipse.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function MainAdmin() {
  return (
    <div>
      <div className='Main-box'>
        <p className='main-heading'>Keep Your Car Running Smoothly with Easy,<br/> Convenient Service</p> 
        <div className='main-search'>
          <input className='main-input' type='search' placeholder='Service Name'></input>
          <input  className='main-input' type='search' placeholder='Location'></input>
          <button  className='main-search-btn'>Search</button>
        </div>
      </div>
      <div>
        <img className='main-img' src={mainImg}  alt='mainimage'/>
      </div>
      <div>
        <h2 className='main-category'>Popular Category</h2>
        <p className='main-cat-title'>Many desktop publishing packages and web page editors</p>
      </div>
      <div className='main-categorydiv'>
        <img src={Cat1}  alt='mainimage'/>
        <img src={Cat3}  alt='mainimage'/>
        <img src={Cat2}  alt='mainimage'/>
        <img src={Cat4}  alt='mainimage'/>
      </div>
      <div className='main-categorydiv2'>
        <p className='category-service'>Service Name</p>
        <p className='category-service'>Service Name</p>
        <p className='category-service'>Service Name</p>
        <p className='category-service'>Service Name</p>
      </div>
      <div className='popular-category-div'>
        <h2 className='popular-category'>Convenience</h2>
        <p className='popular-title'>Emphasize easy online booking, transparent pricing, service reminders, and <br/>
        progress tracking.</p>
      </div>
      <div className='conv-div row'>
        <div className='col-3'>
          <img className='conv-img' src={Conv}/>
        </div>
        <div className='conv-details col-6'>
          <h5 className='schedule-title'>Schedule</h5>
          <p className='schedule-details'>Schedule routine maintenance or fix surprise issues</p>
          <p className='schedule-details1'>Mention the diverse range of services available, from oil changes and brakes to diagnostics and major repairs. Highlight any unique offerings like mobile mechanics or express services.</p>
          <button className='schedule-btn'>One-stop shop</button>
        </div>
        <div>
          <h3 className='trustworthy-title'>Trustworthy network</h3>
          <p className='trustworthy-title1'>Briefly introduce your vetted and qualified mechanics or partner garages.<br/>
           Mention certifications, experience, and positive customer reviews.</p>
        </div>
        <div className='icons-flex'>
          <img src={HeadPhone}  alt='icons'/>
          <img src={Arrow}  alt='icons'/>
          <img src={Rectangle}  alt='icons'/>
          <img src={Arrow}  alt='icons'/>
          <img src={Car}  alt='icons'/>
        </div>
      </div>
    </div>
  )
}

export default MainAdmin