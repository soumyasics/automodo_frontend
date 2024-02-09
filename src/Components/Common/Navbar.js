import React from 'react'
import './Navbar.css'
import Navbar_logo from '../../Assets/footer_logo.png'
import drop_pic from '../../Assets/droppic.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Navbar() {
  return (
    <div >
        <nav className='nav-main'>
          <div>
            <img className='navbar-logo' src={Navbar_logo} alt='Navbar_logo'/>
          </div>
          
          
          <ul className='nav-position'>
            <div>
              <li className='navbar-li'><a className='nav-ahref'href='#'>Home</a></li>
            </div>
            <div>
              <li className='navbar-li'><a className='nav-ahref'href='#'>About us</a></li>
            </div>
            <div>
              <li className='navbar-li'><a className='nav-ahref'href='#'>Gallery</a></li>
            </div>
            <div>
              <li className='navbar-li'><a className='nav-ahref'href='#'>Jobs</a></li>
            </div>
            <div>
              <li className='navbar-li'><a className='nav-ahref' href='#'>Contact us</a></li>
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