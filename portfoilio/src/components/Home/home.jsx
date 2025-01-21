import React from 'react';
import styles from '../../styles/home.module.css';
import { MdOutlineDownloading } from "react-icons/md";
const Home = () => {
  return (
      <button className={styles.button}><MdOutlineDownloading /></button>);
}
export default Home;