import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import profileWizard from '../assets/profilewizard.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logoTitle} to="/" aria-label='Home'>In Gandalf we trust</Link>
        <Link className={styles.profileImg} to="/Login"><img src={profileWizard} alt="Wizard" /></Link>  
      </nav>
    </header>
  )
}

export default Header;
