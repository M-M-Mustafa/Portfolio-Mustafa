import React from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                 <img  className="logo" src="./src/assets/images/logo.svg" alt="" />
                 <ul>
                    <li>
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Work Experience </a>
                        <a href="#contact">Contact Me</a>
                    </li>

                    <button 
                        className='contact-btn'
                        onClick={()=>{}}
                        >Hire Me</button>
                 </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav