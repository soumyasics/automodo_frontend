import React from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './LoginMech.css'

function LoginMechanic() {
  return (
    <div>
      <div>
        <img className="loginMech-img"src={Signin_image} alt='Signin_image'/>
      </div>
    </div>
  )
}

export default LoginMechanic