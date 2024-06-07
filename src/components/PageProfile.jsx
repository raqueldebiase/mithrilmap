import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageProfile.module.css';
import gollun from '../assets/gollum8bit-removebg-preview.png';
import { useAuth } from '../AuthContext';
import arrow from '../assets/icons8-arrow-24.png';

const PageProfile = () => {
  const { currentUser, updateProfile } = useAuth(); // Obtendo o usuário atual e o método updateProfile do contexto de autenticação
  const [username, setUsername] = useState(currentUser ? currentUser.displayName || '' : ''); // Verificando se currentUser não é null antes de acessar displayName



  return (
    <div className={`${styles.profileContent} container`}>

      <div className={styles.soon}>
        <img src={gollun}></img>
        <h2>Your precious is not ready <strong>YET!</strong></h2>
        <Link className={styles.arrowBack} to="/home"><img src={arrow}></img>Back to homepage</Link>
      </div>
    </div>
  );
}

export default PageProfile;
