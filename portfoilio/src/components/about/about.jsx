import React from 'react';
import styles from '../../styles/about.module.css';


const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutimage}>
       
      </div>
      <div className={styles.aboutcontent}>
        <h1 className={styles.abouttitle}>Welcome to My Portfolio</h1>
        <h2 className={styles.abouttitle}> Hi, I am Dilkhush jangid ✋!</h2>
        <p className={styles.aboutdescription}>Software engineer </p>
        <p className={styles.aboutdescription}> 🎨 I specialize in turning creative designs into functional, responsive interfaces. 🚀 Building seamless, user-focused web experiences is my passion! ✨</p>
      </div>
    </section>
  );
}

export default About;