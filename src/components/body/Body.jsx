import React from 'react'
import './styles/body.css'
import ellipseTop from '../../../public/bodySvg/EllipseTop.svg'

const Body = () => {
  return (
    <div className='body'>
        <img className='ellipe_one' src={ellipseTop} alt="" />
        {/* <img className='ellipe_one' src={ellipse} alt="" /> */}
    </div>
  )
}

export default Body