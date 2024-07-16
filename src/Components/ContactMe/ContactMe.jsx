import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
          <div className="contact-content">
            <div style={{flex:1}}>
              <ContactInfoCard
              title="Email"
              iconUrl="/Images/email.png"
              text="Tommylance456@gmail.com" 
              />
              <ContactInfoCard
              title="Github"
              iconUrl="/Images/github.png"
              text="Tommylance456@gmail.com" 
              />
            </div>
            <div style={{flex:1}}>
              <ContactForm/>
            </div>
          </div>
    </section>
  )
}

export default ContactMe