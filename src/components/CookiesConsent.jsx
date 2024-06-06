import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './CookieConsent.module.css';

const CookieConsent = ({ onAccept }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('consent', 'accepted', { expires: 1 / (24 * 12), sameSite: 'None', secure: true });
    setShowBanner(false);
    if (onAccept) {
      onAccept();
    }
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieConsentBanner}>
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <div>
        <Link to='/cookies-policy'>Learn more</Link>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
