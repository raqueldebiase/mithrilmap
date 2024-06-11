// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import sauron from '../assets/sauron8bit.png';
import { useAuth } from '../AuthContext';

const NotFound = () => {
  const { currentUser } = useAuth();
  
  return (
    <div className={`${styles.notFoundContent} container`}>
      <img src={sauron} alt='sauron' />
      <div className={styles.textNotFound}>
        <h2>404</h2>
        <p>Thou hast ventured into unknown lands, where pages fade into shadows.</p>
      </div>
      {currentUser ? (
        <Link to='/home'>Back to Home</Link>
      ) : (
        <Link to='/login'>Back to Login</Link>
      )}
    </div>
  );
};

export default NotFound;
