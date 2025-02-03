import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/contact.module.css';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gylwjgg',  // Replace with your actual EmailJS service ID
      'template_3wycr9x', // Replace with your actual EmailJS template ID
      form.current,
      '7vAEYGqrOsuG-4bf3'   // Replace with your actual EmailJS public key
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
    });
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Contact-us</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactme}>
          <h3>Contact me</h3>
          <p className={styles.question}>How can I help you?</p>
          <p className={styles.question1}>Fill in the form or drop an email</p>
          <p><MdOutlineAttachEmail />: dilkhushjangid4707@gmail.com</p>
          <p><IoPhonePortraitOutline />: +91 8306257568</p>
        </div>
        <div className={styles.messagebox}>
          <form ref={form} onSubmit={sendEmail}>
            <input 
              className={styles.input} 
              type="text" 
              name="user_name" 
              placeholder="Name" 
              required 
            />
            <input 
              className={styles.input}  
              type="email" 
              name="user_email" 
              placeholder="Email" 
              required 
            />
            <input 
              className={styles.input}  
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
            />
            <textarea 
              className={styles.input}  
              name="message" 
              placeholder="Message"
              required 

            ></textarea>
            <button 
              className={styles.input} 
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;