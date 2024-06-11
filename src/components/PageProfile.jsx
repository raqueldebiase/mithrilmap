import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageProfile.module.css';
import gollum from '../assets/gollum8bit-removebg-preview.png';
import arrow from '../assets/icons8-arrow-24.png';

const PageProfile = () => {
  return (
    <div className={`${styles.profileContent} container`}>
      <div className={styles.soon}>
        <img src={gollum} alt="Gollum" />
        <h2>Your precious is not ready <strong>YET!</strong></h2>
        <Link className={styles.arrowBack} to="/home">
          <img src={arrow} alt="Back arrow" />Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default PageProfile;
