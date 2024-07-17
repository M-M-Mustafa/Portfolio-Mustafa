import React from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen, toggleMenu }) => {
    const handleNavDownload = () => {
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
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                 <img  className="logo" src="/Images/logo1.png" alt="" />
                 <ul>
                    <li>
                        <a className='menu-item' href="#home">Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#projects">Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#contact">Contact Me</a>
                    </li>

                    <button 
                        className='contact-btn'
                        onClick={handleNavDownload}
                        >Hire Me</button>
                 </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav