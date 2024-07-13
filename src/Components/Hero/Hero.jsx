import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>I'm Mustafa, a passionate web developer with a proven track record of delivering exceptional user experiences.</p>
        </div>
        <div className="hero-img">
            <div>
                <div className='tech-icon'>
                    <img src='./src/assets/react.svg' alt="" />
                </div>
                <img src="./src/assets/images/hero22.jpg" alt="" />
            </div>


            <div>
                <div className="tech-icon">
                    <img src='./src/assets/images/hero1.png' alt="" />
                </div>
                <div className="tech-icon">
                    <img src='./src/assets/images/hero2.png' alt="" />
                </div>
                <div className="tech-icon">
                    <img src='./src/assets/images/hero3.png' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero