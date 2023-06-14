import React, { useEffect, useState } from 'react'
import {useTranslation} from 'react-i18next'
import horizontal from '../../../public/png/Ellipse.png'
import vertical from '../../../public/png/Ellipse2.png'
import './style/header.css'
import i18next from 'i18next'



const Header = () => {
  const [active , setActive ] = useState(true)
  const { i18n, t } = useTranslation(["common"]);

  const handleClick = () => {
    setActive(!active)
  }

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en")
    }
  }, [])
  

  return (
    <header className='content__header'>
      <div className='content__header__icons'>
        <div className='content__header_logo'>
          <div className='content__header_logo-img'><img src={horizontal} alt="" /></div>
          <div className='content__header_logo-img2'><img src={vertical} alt="" /></div>
        </div>
        <div>
          <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
            <option value="es">es</option>
            <option value="en">en</option>
          </select>
        </div>
      </div>
      

      <nav className='content__header_nav'>
        <ul className={`content__header_nav_lista ${active ? "" : "active"}`}>
          <li className='content__header_nav_listaItem'><a href=''><span>{t("aboutme")}</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>{t("skills")}</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>{t("projects")}</span></a></li>
          <li className='content__header_nav_listaItem'><a href=""><span>{t("contactme")}</span></a></li>
        </ul>                         
      </nav>

      <div className="btn-mobile" onClick={handleClick}><i className={active ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i></div>
    </header>
  )
}

export default Header