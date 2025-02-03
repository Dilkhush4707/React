import React from 'react';
import { MdOutlineDownloading } from 'react-icons/md';
import styles from '../../styles/home.module.css';


const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './DILKHUSH-JANGID.pdf'; // Add the path to your PDF here
    link.download = 'resume.pdf'; // You can set the desired file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      
      <button onClick={handleDownload} className={styles.button}>
        <MdOutlineDownloading />
      </button>
    </div>
  );
};

export default Home;