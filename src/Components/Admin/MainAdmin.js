import React from 'react'
import './MainAdmin.css'
import mainImg from '../../Assets/mainimg.png'
import cat1 from '../../Assets/cat1.png'
import cat2 from '../../Assets/cat2.png'
import cat3 from '../../Assets/cat3.png'
import cat4 from '../../Assets/cat4.png'
import conv from '../../Assets/convenience.png'
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
        <img src={cat1}  alt='mainimage'/>
        <img src={cat3}  alt='mainimage'/>
        <img src={cat2}  alt='mainimage'/>
        <img src={cat4}  alt='mainimage'/>
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
          <img className='conv-img' src={conv}/>
        </div>
        <div className='conv-details col-6'>
          <h5>Schedule</h5>
          <p>Schedule routine maintenance or fix surprise issues</p>
          <p>Mention the diverse range of services available, from oil changes and brakes to diagnostics and major repairs. Highlight any unique offerings like mobile mechanics or express services.</p>
          <button>One-stop shop</button>
        </div>
      </div>
    </div>
  )
}

export default MainAdmin