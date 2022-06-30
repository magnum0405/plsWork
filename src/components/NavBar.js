import React from 'react'
import './NavBar.css'
import Swiper from './Swiper'

const NavBar = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className="icon">
        <Swiper setCategory={setCategory}/>
     </div>
     <img
      style={ { cursor:"pointer" } } 
       src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height='200%'
        alt='logo'
      />
    </div>
  )
}

export default NavBar
