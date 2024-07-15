import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

// import Footer from './Components/Footer/Footer'
// import ContactMe from './Components/ContactMe/ContactMe'
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
      {/* <ContactMe/> */}
    </div>
      {/* <Footer/> */}
    </>
  );
};

export default App
