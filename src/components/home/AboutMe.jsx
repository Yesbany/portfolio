import React from 'react'
import { useTranslation } from 'react-i18next'
import ellipse from '../../../public/svg/ellipse2.svg'
import astronaut from '../../../public/svg/Image.svg'
import './styles/about.css'

const AboutMe = () => {
  const { t } = useTranslation(["about"]);

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
          <span>{t('hi')}</span> {t('h1')}
        </h1>
        <p className='content__aboutMe_information-paragraph'>{t('description')}</p>
        <a href="#">{t('cv')}</a>
      </section>      
    </div>
  )
}

export default AboutMe