import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div >
        <nav className='nav-main'>
          
          
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
              
            </div>


          </ul>
        </nav>
    </div>
  )
}

export default Navbar