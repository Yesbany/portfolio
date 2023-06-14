import { useState } from 'react'
import { Suspense } from 'react'

import './App.css'
import Body from './components/body/Body'
import Header from './components/header/Header'
import AboutMe from './components/home/AboutMe'
import ContactMe from './components/home/ContactMe'
import Projects from './components/home/Projects'
import Skills from './components/home/Skills'



function App() {
  const [dark, setDark] = useState(false)
  
  return (
    <Suspense>
      <div className='App'>
        {/* <Body /> */}
        <Header />      
        <AboutMe />
        <Skills />
        <Projects />      
        <ContactMe />
      </div>
    </Suspense>
  )
}

export default App
