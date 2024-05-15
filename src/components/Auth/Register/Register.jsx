import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe Link de 'react-router-dom'
import styles from './Register.module.css';
import Login from '../Login/Login';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '', // Adicione a entrada 'age' ao estado
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
        <input
          className={styles.input}
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age} // Corrija para 'formData.age' em vez de 'formData.number'
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Register</button>
        <Link className={styles.buttonBack} to="/Login">Back to login</Link>
      </form>
    </div>
  );
};

export default Register;
