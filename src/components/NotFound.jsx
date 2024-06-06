// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import sauron from '../assets/sauron8bit.png';
import { useAuth } from '../AuthContext';


const NotFound = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={`${styles.notFoundContent} container`}>
      <img src={sauron} alt='sauron'></img>
      <div className={styles.textNotFound}>
        <h2>404</h2>
        <p>Thou hast ventured into unknown lands, where pages fade into shadows.</p>
      </div>
      {isAuthenticated ? (
        <Link to='./home'>Back to Home</Link> // Se estiver logado, redirecione para a página inicial
      ) : (
        <Link to='./login'>Back to Login</Link> // Se não estiver logado, redirecione para a página de login
      )}
    </div>
  );
};

export default NotFound;
