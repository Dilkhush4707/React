import React from 'react';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <p>&copy; 2025 Dilkhush Jangid. All rights reserved.</p>
        <div className={styles.sociallinks}>
          <a href="https://github.com/Dilkhush4707" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/Dilkhush4707" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;