import React from 'react'
import ellipse from '../../../public/svg/ellipse2.svg'
import astronaut from '../../../public/svg/Image.svg'
import './styles/about.css'

const AboutMe = () => {
  return (
    <div className='content__aboutMe'>
      <div className='content__aboutMe_imagen'>
        <div className='content__aboutMe_imagen-ellipse1'><img src={ellipse} alt="" /></div>
        <div className='content__aboutMe_imagen-ellipse2'><img src={ellipse} alt="" /></div>
        <div className='content__aboutMe_imagen-ellipse3'><img src={ellipse} alt="" /></div>
        <div className='content__aboutMe_imagen-ellipse4'><img src={ellipse} alt="" /></div>
        <div className='content__aboutMe_imagen-astronaut'><img src={astronaut} alt="" /></div>
      </div>
      <section className='content__aboutMe_information'>
        <h1 className='content__aboutMe_information-title'>
          <span>Hi!</span> I'm a full stack developer
        </h1>
        <p className='content__aboutMe_information-paragraph'>I'm curious about technology I not only like to program but also that I am passionate about having the problem solving ability by code, ready for the challenges.</p>
        <a href="#">Download CV</a>
      </section>      
    </div>
  )
}

export default AboutMe