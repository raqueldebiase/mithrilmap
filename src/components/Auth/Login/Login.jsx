import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../../AuthContext';
import CookieConsent from '../../CookiesConsent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetPasswordError, setResetPasswordError] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Tentando logar usuário:", email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuário logado com sucesso:", userCredential.user);
      setCurrentUser(auth.currentUser);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao logar o usuário:', error);
      alert(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (email.trim() === '') {
      setEmailError('Please enter your email address');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert('A password reset email has been sent to your email address. Please check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setResetPasswordError('There was an error sending the password reset email. Please try again later.');
    }
  };

  return (
    <div className={`${styles.login} modal`}>
      <h2>SHAALL YOOU PAAAS ?</h2>
      <form onSubmit={handleLogin}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.resetButton}
          type="button"
          onClick={handleResetPassword}
        >
          Forgot your password?
        </button>
        <button className={styles.button} type="submit">Login</button>
        
        {resetPasswordError && <p className={styles.error}>{resetPasswordError}</p>}
        <Link className={styles.register} to="/Register">Not register yet? Click here</Link>
      </form>
      <CookieConsent />
    </div>
  );
};

export default Login;
