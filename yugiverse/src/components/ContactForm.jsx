import React, { useState } from 'react';
import '../pages/css/About.css';

const ContactForm = () => {
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));
    setResultMessage('Please wait...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResultMessage('Form submitted successfully');
      } else {
        setResultMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setResultMessage('Something went wrong!');
    } finally {
      form.reset();
      setTimeout(() => {
        setResultMessage('');
      }, 3000);
    }
  };

  return (
    <section id="contact-container" className="one">
      <h2>Contact Us</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="6606bd2d-b0c4-4409-a58b-0441de9b56e8" />

        <div className="input-sec">
          <p>Name</p>
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="input-sec">
          <p>Email</p>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="input-sec">
          <p>Questions, Comments, or Concerns</p>
          <textarea placeholder="Comments" name="message" required></textarea>
        </div>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        <button type="submit">Submit Form</button>

        <div id="result">{resultMessage}</div>
      </form>
    </section>
  );
};

export default ContactForm;
