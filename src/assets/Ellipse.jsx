import React from 'react'

const Ellipse = (width="0", height="0", opacity="0.35") => {
  return (
    <svg width={"776"} height={"776"} viewBox="0 0 870 837" fill="none" xmlns="http://www.w3.org/2000/svg" 
    style={{position: 'sticky', top: '-189px', left: '1050px'}}
    >
      <g opacity={opacity} filter="url(#filter0_f_138_774)">
      <circle cx="638" cy="199" r="388" fill="url(#paint0_radial_138_774)"/>
      </g>
      <defs>
      <filter id="filter0_f_138_774" x="0" y="-439" width="1276" height="1276" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_138_774"/>
      </filter>
      <radialGradient id="paint0_radial_138_774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(847.561 45.4599) rotate(136.101) scale(580.512)">
      <stop stop-color="#1FC3E7" stop-opacity="0.84375"/>
      <stop offset="1" stop-color="#1F34E7"/>
      </radialGradient>
      </defs>
</svg>

  )
}

export default Ellipse