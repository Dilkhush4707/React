import styles from '../../styles/contact.module.css';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
   <>
   <section className={styles.contact}>
    <h2 className={styles.heading}>Contact-us</h2>
    <div className={styles.contactContainer}>
      <div className={styles.contactme}>
        <h3>Contact me</h3>
        <p className={styles.question}>How can I help you?</p>
        <p className={styles.question1}>Fill in the form or drop an email</p>
        <p><MdOutlineAttachEmail /> : dilkhushjangid4707@gmail.com</p>
        <p><IoPhonePortraitOutline />: +91 8306257568</p>
        </div>
        <div className={styles.messagebox}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input}  type="email" placeholder="Email" />
          <input className={styles.input}  type="text" placeholder="Subject" />
          <textarea className={styles.messagebox}  placeholder="Message"></textarea>
          <button className=''>Send</button>
        
        </div>
      </div>
    </section></>
  );
}
export default Contact;
