import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className='container'>
        <Link to="/" aria-label='Home'>Logo</Link>
        <Link className={styles.login} to="/Login">Login</Link>  
      </nav>
    </header>
  )
}

export default Header
