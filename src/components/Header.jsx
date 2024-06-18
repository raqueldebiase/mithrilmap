import React, { useState, useEffect } from 'react';
import { resetProgressObservable, setResetProgress } from './resetProgressObservable';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import profileWizard from '../assets/gandalf8bit.png';
import { useAuth } from '../AuthContext';
import GandalfMessage from './gandalfMessage';
import { auth, resetReadingProgress } from '../firebase';
import Cookies from 'js-cookie';



const Header = ({ onResetProgress }) => {
  const { currentUser, setCurrentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(`.${styles.profileMenu}`) && !event.target.closest(`.${styles.profileImg}`)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showMenu]);

  const handleResetProgress = async () => {
    // Chame a função setResetProgress para emitir um novo valor para resetProgressObservable
    setResetProgress(true);
    // Aqui você pode executar outras ações relacionadas ao reset de progresso, se necessário
  };

  const handleLogout = () => {
    setCurrentUser(null);
    auth.signOut();
    Cookies.remove('readingProgress');
    navigate('/Login');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <h1>MithrilMap</h1>
          <p className={styles.logoTitle} to="/" aria-label='Home'>In Gandalf we trust</p>
        </div>
        <div className={styles.profileContainer}>
          <img 
            src={profileWizard} 
            alt="Wizard" 
            className={`${styles.profileImg} ${currentUser ? styles.imageLoggedIn : ''}`}
            onClick={handleProfileClick}
            style={{ cursor: 'pointer', opacity: location.pathname === '/Login' ? 0.5 : 1 }}
          />
          {currentUser && showMenu && (
            <div className={styles.profileMenu}>
              <Link to='/profile'>Your journey</Link>
              {location.pathname === '/home' && <button onClick={handleResetProgress}>Reset Progress</button>}
              <button className={styles.exit} onClick={handleLogout}>Exit</button>
            </div>
          )}
        </div>
      </nav>
      {showModal && renderModal && <GandalfMessage onClose={() => setShowModal(false)} />}
    </header>
  );
}


export default Header;