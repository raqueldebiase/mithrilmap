// Register.js
import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com a submissão do formulário de registro
  };

  return (
    <div className={`${styles.login} modal`}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
        className={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
        className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
