// src/components/CookiesPolicy.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import styles from './CookiesPolicy.module.css';
import arrow from '../assets/icons8-arrow-24.png';

const CookiesPolicy = () => {
  const [isOpen, setIsOpen] = useState({
    intro: false,
    whatAreCookies: false,
    howWeUseCookies: false,
    typesOfCookies: false,
    manageCookies: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`${styles.policyContainer} container`}>
      <div className={styles.policyContent}>
        <h1 className={styles.title}>Cookies Policy</h1>
        <p>We use cookies to enhance the user experience on our site. This document explains what cookies are, how we use them, and how you can manage them.</p>


        <div className={styles.section}>
          <h2 onClick={() => toggleSection('whatAreCookies')} className={styles.sectionTitle}>
            What are cookies?
          </h2>
          <Collapse isOpened={isOpen.whatAreCookies}>
            <p>Cookies are small text files stored on your device when you visit a website. They allow the site to recognize your device and store some information about your preferences or past actions.</p>
          </Collapse>
        </div>

        <div className={styles.section}>
          <h2 onClick={() => toggleSection('howWeUseCookies')} className={styles.sectionTitle}>
            How do we use cookies?
          </h2>
          <Collapse isOpened={isOpen.howWeUseCookies}>
            <p>We use cookies to store reading processo of the chapters, remember your preferences and settings and improve site functionalities.</p>
          </Collapse>
        </div>

        <div className={styles.section}>
          <h2 onClick={() => toggleSection('typesOfCookies')} className={styles.sectionTitle}>
            Types of cookies we use
          </h2>
          <Collapse isOpened={isOpen.typesOfCookies}>
            <p>We are using functionality cookiers, for remember your choices and improve your experience.</p>
          </Collapse>
        </div>

        <div className={styles.section}>
          <h2 onClick={() => toggleSection('manageCookies')} className={styles.sectionTitle}>
            How to manage cookies
          </h2>
          <Collapse isOpened={isOpen.manageCookies}>
            <p>You can manage cookies through your browser settings. However, blocking cookies may affect site functionality.</p>
            <p>For more information, consult our privacy policy or contact us.</p>
          </Collapse>
        </div>
      </div>
      <Link className={styles.arrowBack} to='/Login'>Back to login page</Link>
    </div>
  );
};

export default CookiesPolicy;
