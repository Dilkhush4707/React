// src/components/Header.js
import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import styles from "../../styles/header.module.css";

const Header = () => {
  const [mode, setMode] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div className={styles.profileName}>Portfolio</div>
      </div>

      <nav className={styles.headernav}>
        <ul className={styles.navlinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.themeMode}>
        <button className={styles.themeButton} onClick={()=>{
          setMode(!mode);
        }}>{mode == false ? <CiDark /> : <CiLight />}</button>
      </div>
    </header>
  );
};

export default Header;
