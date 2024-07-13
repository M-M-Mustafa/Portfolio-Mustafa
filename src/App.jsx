import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
    </div>
    </>
  )
}

export default App
