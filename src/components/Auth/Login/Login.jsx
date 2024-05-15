import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com a submissão do formulário de login
  };

  return (
    <div className={`${styles.login} modal`}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="usernameOrEmail"
          placeholder="Username or Email"
          value={formData.usernameOrEmail}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Login</button>
        <Link className={styles.register} to="/Register">Not register yet? Click here</Link>
      </form>
    </div>
  );
};

export default Login;
