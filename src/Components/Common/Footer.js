import React from 'react'
import './Footer.css'
import Logo from '../../Assets/footer_logo.png'

function Footer() {
  return (
    <div>
      <footer className='footer-main'>
      <div >
        <div> 
          <img className='footer-logo col-6' src={Logo} alt='Logo-footer' />
        </div>
        <div className='footer-flex'>
          <div>
            <a className='footer-a' href='#'>Home</a>
          </div>
          <div>
            <a className='footer-a' href='#'>About us</a>
          </div>
          <div>
            <a className='footer-a' href='#'>Gallery</a>
          </div>
          <div>
            <a className='footer-a' href='#'>Jobs</a>
          </div>
          <div>
            <a className='footer-a' href='#'>Contact us</a>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer