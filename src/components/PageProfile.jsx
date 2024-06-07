import React, { useState, useEffect } from 'react';
import styles from './PageProfile.module.css';
import photo from '../assets/gandalf8bit.png';
import gollun from '../assets/gollum8bit-removebg-preview.png';
import { useAuth } from '../AuthContext';

const PageProfile = () => {
  const { currentUser, updateProfile } = useAuth(); // Obtendo o usuário atual e o método updateProfile do contexto de autenticação
  const [username, setUsername] = useState(currentUser ? currentUser.displayName || '' : ''); // Verificando se currentUser não é null antes de acessar displayName



  return (
    <div className={`${styles.profileContent} container`}>

      <div className={styles.soon}>
        <img src={gollun}></img>
        <h2>Your precious is not here <strong>YET!</strong></h2>
      </div>
    </div>
  );
}

export default PageProfile;
