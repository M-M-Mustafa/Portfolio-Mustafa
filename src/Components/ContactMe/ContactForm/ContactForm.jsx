import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className="name-container">
                <input type="text" name='Firstname' placeholder=" First Name" />
                <input type="text" name='Lastname' placeholder="Last Name" />
            </div>
            <input type="text" name='email' placeholder='Email' />
            <textarea  type='text' name="message " placeholder="Messsage" rows={3}/>  
            <button type="button">Send</button>
        </form>
    </div>
  )
}

export default ContactForm