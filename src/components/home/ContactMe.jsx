import React from 'react'
import './styles/contacme.css'

const ContactMe = () => {
  return (
    <div className='contact'>
      <div id='contact__title'>
        <h2>Contact <span>me!</span></h2>
        <p>Si estas interesado en mi trabajo o tienes alguna consulta no dudes en escribirme!</p>
      </div>
            
      <form id='contact__form' action="">
        <div className='form__container'>        
          <div className='form__container__row'>
            <h4>Tu nombre:</h4>
            <input type='text' id='' placeholder='Nombre completo...' required/>
          </div>
          <div className='form__container__row'>
            <h4>Tu E-mail:</h4>
            <input type='email' id='' placeholder='Ingrese su email...' required/>
          </div>
          <div className='form__container__row'>
            <h4>Tu mensaje:</h4>
            <textarea id='text' placeholder='Ingrese su mensaje...' required></textarea>
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactMe