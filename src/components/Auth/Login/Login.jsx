import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../../AuthContext';
import CookieConsent from '../../CookiesConsent'; // Importe o componente CookieConsent

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(auth.currentUser);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao logar o usuário:', error);
      alert(error.message);
    }
  };

  return (
    <div className={`${styles.login} modal`}>
      <h2>SHAALL YOOU PAAAS ?</h2>
      <form onSubmit={handleLogin}>
        <input
          className={styles.input}
          type="text"
          name="usernameOrEmail"
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
        <button className={styles.button} type="submit">Login</button>
        <Link className={styles.register} to="/Register">Not register yet? Click here</Link>
      </form>
      <CookieConsent />
    </div>
  );
};

export default Login;
