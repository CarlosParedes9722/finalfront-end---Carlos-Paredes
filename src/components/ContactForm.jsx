import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields!');
      return;
    }
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" placeholder="Name" value={formData.names} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

