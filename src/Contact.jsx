import React, { useState } from 'react';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',   // Updated to match EmailJS template
    from_email: '',  // Updated to match EmailJS template
    message: ''      // Remains the same to match template
  });

  const [messageStatus, setMessageStatus] = useState('');

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send email using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_gmail_vt', 'template_gmail_vt', formData, '8MUenrVwaX6SNXpJn') // Use public key here
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setMessageStatus('Failed to send message.');
        }
      );

    // Clear form after submission
    setFormData({
      from_name: '',   // Updated variable name
      from_email: '',  // Updated variable name
      message: ''      // Remains the same
    });
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>If you have any questions, want to schedule a meeting or hire me at this moment, feel free to drop a message here!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Your Name</label>
          <input
            type="text"
            name="from_name" // Updated to match EmailJS template
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">Your Email</label>
          <input
            type="email"
            name="from_email" // Updated to match EmailJS template
            id="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>

        {messageStatus && <p className="status-message">{messageStatus}</p>}
      </form>
      <div className="contact-buttons">
        <div className="contact-button">
          <p>Chat with me on WhatsApp:</p>
          <a
            href="https://wa.me/35679060965"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>
        </div>

        <div className="contact-button">
          <p>Check out my GitHub profile:</p>
          <a
            href="https://github.com/ValentynTokariuk"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            GitHub
          </a>
        </div>

        <div className="contact-button">
          <p>Connect with me on LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/valentyn-tokariuk-445535237/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-button">
          <p>Send me an email:</p>
          <a
            href="mailto:valentyn.tokariuk@gmail.com"
            className="email-btn"
          >
            Send Email
          </a>
        </div>

        <div className="contact-button">
          <p>Call me directly:</p>
          <a
            href="tel:+35679060965"
            className="call-btn"
          >
            Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
