import React, { useState } from 'react'
import "./Navbar.css"
import MobileNav from './MobileNavbar/MobileNav';

const Navbar = () => {
     const [openMenu ,setOpenMenu] = useState(false);

     const toggleMenu = () => {
         setOpenMenu(!openMenu);
     };

  return (
    <>
     <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
      <div className='nav-content'>
<<<<<<< HEAD
      <img className='logo' src="./src/assets/Images/logo1.png" alt="" />  
=======
      <img className='logo' src="./src/assets/Images/logo1.png" alt="Logo" />  
>>>>>>> 4d80f64cf341fadb373f0578303b471d792e06ee
      
        <ul>
            <li>
                <a className='menu-item'>Home</a>
            </li>
            <li>
                <a className='menu-item'>Skills</a>
            </li>
            <li>
                <a className='menu-item'>Work Experience</a>
            </li>
            <li>
                <a className='menu-item'>Contact Me</a>
            </li>
                <button className='contact-btn' onClick={()=>{}}> Hire Me</button>
        </ul>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span 
                        className={"material-symbols-outlined"}
                        style={{fontSize:"1.8rem"}}
                    >
                    
                    {openMenu ? "close":"menu"}

                    </span>
                </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
