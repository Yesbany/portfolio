import React, { useState } from 'react'
import horizontal from '../../../public/png/Ellipse.png'
import vertical from '../../../public/png/Ellipse2.png'
import './style/header.css'



const Header = () => {
  const [active , setActive ] = useState(true)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className='content__header'>
      <div className='content__header_logo'>
        <div className='content__header_logo-img'><img src={horizontal} alt="" /></div>
        <div className='content__header_logo-img2'><img src={vertical} alt="" /></div>
      </div>

      <nav className='content__header_nav'>
        <ul className={`content__header_nav_lista ${active ? "" : "active"}`}>
          <li className='content__header_nav_listaItem'><a href=''><span>About me</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>Skills</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>Projects</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>Contact me</span></a></li>
        </ul>                         
      </nav>

      <div className="btn-mobile" onClick={handleClick}><i className={active ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i></div>
    </header>
  )
}

export default Header