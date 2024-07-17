// import React from 'react'
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Skills from './Components/Skills/Skills'
// import WorkExperience from './Components/WorkExperience/WorkExperience'
// import ContactMe from './Components/ContactMe/ContactMe'
// import Footer from './Components/Footer/Footer'

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className='container'>
//       <Hero/>
//       <Skills/>
//       <WorkExperience/>
//       <ContactMe/>
//     </div>
//       <Footer/>
//     </>
//   );
// };

// export default App
// Example components structure
import React from 'react';
import { Element} from 'react-scroll';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import "./App.css"

const App = () => {
    return (
        <><Navbar />
        <div className='container'>
            <Element name="home">
                <Hero />
            </Element>
            <Element name="skills">
                <Skills />
            </Element>
            <Element name="work">
                <WorkExperience />
            </Element>
            <Element name="contactme">
                <ContactMe />
            </Element>
        </div>
        <Footer />
        </>
    );
}

export default App;
