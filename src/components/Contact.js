// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();

    // You can add your logic here to handle form submission
  };

  return (
    <div className="contact-container">
      
      <div className="contact-form" onSubmit={handleSubmit}>
          <div className="label-column">
            <div className='row'><label htmlFor="name">name</label></div>
            <div className='row'><label htmlFor="email">email</label></div>
            <div className='row'><label htmlFor="message">message</label></div>
          </div>

          <div className="input-column">
            <input type="text" id="name" name="name" required />
            <input type="email" id="email" name="email" required />
            <textarea id="message" name="message" rows="6" required />
            <button type="submit">send</button>
          </div>
      </div>

      <div className="email-address">
        andimazreku0(at)gmail(dot)com
      </div>

      <div className="instagram-link">
        <a 
          href="https://instagram.com/andibiotiker" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
