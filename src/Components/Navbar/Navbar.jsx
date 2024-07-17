// import React, { useState } from 'react'
// import "./Navbar.css"
// import MobileNav from './MobileNavbar/MobileNav';
//  ;

// const Navbar = () => {
//      const [openMenu ,setOpenMenu] = useState(false);

//      const toggleMenu = () => {
//          setOpenMenu(!openMenu);
//      };

//   return (
//     <>
//      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
//     <nav className='nav-wrapper'>
//       <div className='nav-content'>


//       <img className='logo' src="/Images/logo1.png" alt="Logo" />  

      
//         <ul>
//             <li>
//                 <a className='menu-item'>Home</a>
//             </li>
//             <li>
//                 <a className='menu-item'>Skills</a>
//             </li>
//             <li>
//                 <a className='menu-item'>Work Experience</a>
//             </li>
//             <li>
//                 <a className='menu-item'>Contact Me</a>
//             </li>
//                 <button className='contact-btn' onClick={()=>{}}> Hire Me</button>
//         </ul>
//                 <button className='menu-btn' onClick={toggleMenu}>
//                     <span 
//                         className={"material-symbols-outlined"}
//                         style={{fontSize:"1.8rem"}}
//                     >
                    
//                     {openMenu ? "close":"menu"}

//                     </span>
//                 </button>
//       </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling

import './Navbar.css';
import MobileNav from './MobileNavbar/MobileNav';

const Navbar = (
) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleDownload = () => {
        // Create a link element
        console.log('Download button clicked!');
        const link = document.createElement('a');
        link.href = './Mustafa-Resume.pdf';  // Replace with actual path to your PDF file
        link.download ='Mustafa-Resume.pdf';        // Replace with desired filename for the download

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the click event on the link
        link.click();

        // Clean up: Remove the link from the body
        document.body.removeChild(link);
    };
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src="/Images/logo1.png" alt="Logo" />

                    <ul>
                        <li>
                            <Link
                                className='menu-item'
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='menu-item'
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='menu-item'
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Work Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='menu-item'
                                activeClass="active"
                                to="contactme"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact Me
                            </Link>
                        </li>
                        <button className='contact-btn'   onClick={handleDownload}>Hire Me</button>
                    </ul>
                </div>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span
                        className={"material-symbols-outlined"}
                        style={{ fontSize: "1.8rem" }}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </nav>
        </>
    );
}

export default Navbar;