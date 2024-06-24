import React from 'react';
import styles from './Footer.module.css';
import reactIcon from '../assets/react-svgrepo-com.svg';
import githubIcon from '../assets/github-outline.svg';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.copy}>
        <div>
          <span>&copy; {currentYear} <a href='https://raqueldebiase.netlify.app/'>Raquel De Biase.</a></span>
        </div>
        <div>
          <p>Project developed in React.<span><img className={styles.reactIcon} src={reactIcon}></img></span></p>
        </div> 
      </div>
      <div className={styles.linkGithub}>
          <p><a href="https://github.com/raqueldebiase/mithrilmap/blob/main/README.md" target='_blank'>See the project on GitHub.<span><img className={styles.reactGithub} src={githubIcon}></img></span></a></p>
      </div>
    </div>
  )
}

export default Footer
