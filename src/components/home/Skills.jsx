import React from 'react'
import { useTranslation } from 'react-i18next'
import './styles/skills.css'
import css from '../../../public/logos/css.png'
import github from '../../../public/logos/github.png'
import html from '../../../public/logos/html.png'
import js from '../../../public/logos/js.png'
import mysql from '../../../public/logos/mysql.png'
import nodejs from '../../../public/logos/nodejs.png'
import postgresql from '../../../public/logos/postgresql.png'
import react from '../../../public/logos/react.png'
import sqlserver from '../../../public/logos/sqlserver.png'

const Skills = () => {
  const { t } = useTranslation(["skills"])

  return (
    <div className='skills'>
      <h2>{t('ski')}<span>{t('lls')}</span>...</h2>      
      <div className='skills__grid'>
        <div className='skills__content'>
          <div className='skills__content-img'><img src={react} alt="" /></div>
          <p>React JS</p>
        </div>
        <div className='skills__content'>
          <div className='skills__content-img'><img src={nodejs} alt="" /></div>
          <p>Node JS</p>
        </div> 
        <div className='skills__content'>
          <div className='skills__content-img'><img src={postgresql} alt="" /></div>
          <p>PostgreSql</p>
        </div>
        <div className='skills__content'>
          <div className='skills__content-img'><img src={sqlserver} alt="" /></div>
          <p>Sql Server</p>
        </div>   
        <div className='skills__content'>
          <div className='skills__content-img'><img src={mysql} alt="" /></div>
          <p>MySql</p>
        </div>   
        <div className='skills__content'>
          <div className='skills__content-img'><img src={css} alt="" /></div>
          <p>Css3</p>
        </div>   
        <div className='skills__content'>
          <div className='skills__content-img'><img src={github} alt="" /></div>
          <p>GitHub</p>
        </div> 
        <div className='skills__content'>
          <div className='skills__content-img'><img src={js} alt="" /></div>
          <p>JavaScript</p>
        </div> 
        <div className='skills__content'>
          <div className='skills__content-img'><img src={html} alt="" /></div>
          <p>Html5</p>
        </div>              
      </div>
    </div>
  )
}

export default Skills