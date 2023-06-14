import React from 'react'
import {useTranslation} from 'react-i18next'
import './styles/contacme.css'

const ContactMe = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div className='contact'>
      <div id='contact__title'>
        <h2>{t('contact')}<span>{t('me')}</span></h2>
        <p>{t('paragraph')}</p>
      </div>
            
      <form id='contact__form' action="">
        <div className='form__container'>        
          <div className='form__container__row'>
            <h4>{t('name')}</h4>
            <input type='text' id='' placeholder={t('fullName')} required/>
          </div>
          <div className='form__container__row'>
            <h4>{t('email')}</h4>
            <input type='email' id='' placeholder={t('inputEmail')} required/>
          </div>
          <div className='form__container__row'>
            <h4>{t('message')}</h4>
            <textarea id='text' placeholder={t('inputMessage')} required></textarea>
          </div>
          <div className='form__container__button'>
            <button className='form__button'>{t("submit")}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactMe