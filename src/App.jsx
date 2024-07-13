import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
    </div>
    </>
  )
}

export default App
