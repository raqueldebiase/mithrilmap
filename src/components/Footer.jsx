import React from 'react';
import styles from './Footer.module.css';
import reactIcon from '../assets/react-svgrepo-com.svg';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>

      <div className={styles.description}>
        <p>This is a website for those who venture into the immense and daunting world of J.R.R. Tolkien's literature. It was built to make life easier for a two-person Book Club (since 2019), who have opted for the chaotic and challenging task of reading his publications following level 02 of reading (chronological order). If you also have the suspicious desire to suffer, here is a tool that will facilitate tracking your reading and record your progress, but I warn you that this journey will be long. Yes, believe me</p>
      </div>

      <div className={styles.copy}>
        <div>
        <p>Projeto desenvolvido em React <span><img className={styles.reactIcon} src={reactIcon}></img></span></p>
        </div>
        <div>
          <span>&copy; {currentYear} <a href='https://raqueldebiase.netlify.app/'>Raquel De Biase</a></span>
        </div>
        
        
      </div>

    </div>
  )
}

export default Footer
