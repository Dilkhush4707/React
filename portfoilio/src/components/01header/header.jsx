// src/components/Header.js
import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import styles from "../../styles/header.module.css";

const Header = () => {
  const [mode, setMode] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div className={styles.profileName}>Portfolio</div>
      </div>

      <nav className={styles.headernav}>
        <ul className={styles.navlinks}>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.themeMode}>
        <button className={`${styles.themeButton} ${mode ? styles.on : styles.off}`} onClick={() => {
          setMode(!mode);
          if (mode) {
            document.body.classList.remove('darkTheme');
            document.body.classList.add('lightTheme');
          } else {
            document.body.classList.remove('lightTheme');
            document.body.classList.add('darkTheme');
          }
        }}>{mode === false ? <CiDark /> : <CiLight />}</button>
      </div>
    </header>
  );
};

export default Header;
