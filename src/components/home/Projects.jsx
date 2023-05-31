import React from 'react'
import mask from '../../../public/png/MaskGroup.png'
import google from '../../../public/png/google.png'
import ellipse from '../../../public/png/EllipseMask.png'
import './styles/projects.css'
import pokemon from '../../../public/projects-img/pokemon.png'
import ecommerce from '../../../public/projects-img/e-comerce.png'
import rick from '../../../public/projects-img/rick-and-morty.png'
import weather from '../../../public/projects-img/weather.png'

const Projects = () => {
  return (
    <div className='content__pojects'>
      <div className='content__pojects__img'>
        <div id='mask'>
          <img src={mask} alt="" />
          <div id='google'><img src={google} alt="" /></div>
          <div id='ellipse'><img src={ellipse} alt="" /></div>
        </div>        
      </div>  
      <div id='content-projects'>
        <section className='content__pojects__all'>
        <h2><span>Last</span> projects<span>...</span></h2>
        </section>
        <article className='component__content__all'>
        <div className='component'>
          <div className='component__content'>
            <h4>Pokédex</h4>
            <div id='tags'>
              <span id='react'>React</span>
              <span id='redux'>Redux</span>
              <span id='javascript'>Js</span>
              <span id='css'>Css</span>
              <span id='api'>Api</span>
            </div>
            <div className='component__content__img'>
              <div><img src={pokemon} alt="" /></div>
            </div>
            <div className='component__content__footer'>
              <a id='github' href="https://github.com/Yesbany/Pokemon" target='_blank'>Github <i className="fa-brands fa-github"></i></a>
              <a id='deploy' href='https://delicate-palmier-2a7285.netlify.app/' target='_blank'>Deploy <i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>
        <div className='component'>
          <div className='component__content'>
            <h4>E-commerce</h4>
            <div id='tags'>
              <span id='react'>React</span>
              <span id='redux'>Redux</span>
              <span id='javascript'>Js</span>
              <span id='css'>Css</span>
              <span id='api'>Api</span>
            </div>
            <div className='component__content__img'>
              <div><img src={ecommerce} alt="" /></div>
            </div>
            <div className='component__content__footer'>
              <a id='github' href="https://github.com/Yesbany/e-comerce" target='_blank'>Github <i className="fa-brands fa-github"></i></a>
              <a id='deploy' href='https://splendorous-torrone-2e642b.netlify.app/' target='_blank'>Deploy <i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>
        <div className='component'>
          <div className='component__content'>
            <h4>Rick and Morty</h4>
            <div id='tags'>
            <span id='react'>React</span>
              <span id='redux'>Redux</span>
              <span id='javascript'>Js</span>
              <span id='css'>Css</span>
              <span id='api'>Api</span>
            </div>
            <div className='component__content__img'>
              <div><img src={rick} alt="" /></div>
            </div>
            <div className='component__content__footer'>
              <a id='github' href="https://github.com/Yesbany/figma" target='_blank'>Github <i className="fa-brands fa-github"></i></a>
              <a id='deploy' href='https://dazzling-douhua-cc24d6.netlify.app/' target='_blank'>Deploy <i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>
        <div className='component'>
          <div className='component__content'>
            <h4>Weather App</h4>
            <div id='tags'>
            <span id='react'>React</span>
              <span id='javascript'>Js</span>
              <span id='css'>Css</span>
              <span id='api'>Api</span>
            </div>
            <div className='component__content__img'>
              <div><img src={weather} alt="" /></div>
            </div>
            <div className='component__content__footer'>
              <a id='github' href="https://github.com/Yesbany/weather" target='_blank'>Github <i className="fa-brands fa-github"></i></a>
              <a id='deploy' href='https://astounding-bienenstitch-768f90.netlify.app/' target='_blank'>Deploy <i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>
        </article>
      </div>
          
    </div>
  )
}

export default Projects