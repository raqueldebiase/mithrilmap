import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { auth } from '../../../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Tentando registrar usuário:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário registrado com sucesso:", userCredential.user);
      alert('Usuário registrado com sucesso');
    } catch (error) {
      console.error('Erro ao cadastrar novo usuário:', error);
      alert(error.message);
    }
  };

  return (
    <div className={`${styles.login} modal`}>
      <h2>Start your journey, join the fellowship!</h2>
      <p className={styles.messageRegister}><span className={styles.hello}>Hello!</span>! This app is your guide to uncovering and tracking your journey through the works of J.R.R. Tolkien. Keep track of and log your progress in reading the works, following level 2 (intermediate).</p>
      <form onSubmit={handleRegister}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">Register</button>
        <Link className={styles.buttonBack} to="/Login">Back to login</Link>
      </form>
    </div>
  );
};

export default Register;
