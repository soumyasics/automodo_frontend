import React from 'react'
import './Navbar.css'
import Navbar_logo from '../../Assets/footer_logo.png'
import drop_pic from '../../Assets/droppic.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
        <nav className='nav-main'>
          <div>
            <img className='' src={imglogo} alt='' width="60px" height="60px" style={{marginLeft:"190px",marginTop:"20px",}}/>
          </div>
          
          
          <ul className='nav-position'>
              <div>
              <li className='navbar-li'><Link className='nav-ahref'to='/'>Home</Link></li>
            </div>
            <div>
              <li className='navbar-li'><Link className='nav-ahref'to='/'>About us</Link></li>
            </div>
            <div>
              <li className='navbar-li'><Link className='nav-ahref'to='/'>Gallery</Link></li>
            </div>
            <div>
              <li className='navbar-li'><Link className='nav-ahref'to='/'>Jobs</Link></li>
            </div>
            <div>
              <li className='navbar-li'><Link className='nav-ahref' to='/'>Contact us</Link></li>
            </div>
            <div>
              <img className='dropdown_pic'src={drop_pic} alt='dropdown_pic'/>
            </div>
            <div>
            <div class="dropdown">
              <button className="btn btn-secondary dropdown-toggle navdrop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">a</a></li>
                <li><a class="dropdown-item" href="#">b</a></li>
                <li><a class="dropdown-item" href="#">c</a></li>
              </ul>
            </div>

            </div>


          </ul>
        </nav>
    </div>
  )
}

export default Navbar