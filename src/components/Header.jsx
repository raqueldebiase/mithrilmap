import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import profileWizard from '../assets/profilewizard.png';
import { useAuth } from '../AuthContext'; // Usar o hook personalizado para acessar o contexto
import GandalfMessage from './gandalfMessage';
import { auth } from '../firebase'; // Certifique-se de que o caminho esteja correto

const Header = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null); // Limpa o estado do usuário no contexto
    auth.signOut(); // Desloga do Firebase
    navigate('/Login'); // Redireciona para a página de login
  };

  const isLoginPage = location.pathname === '/Login';
  const isRegisterPage = location.pathname === '/Register';
  const renderModal = isLoginPage || isRegisterPage;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logoTitle} to="/" aria-label='Home'>In Gandalf we trust</p>
        <Link className={styles.profileImg} to="/Login">
          <img 
            src={profileWizard} 
            alt="Wizard" 
            className={currentUser ? styles.imageLoggedIn : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </nav>
      {showModal && renderModal && <GandalfMessage onClose={() => setShowModal(false)} />}
    </header>
  );
}

export default Header;
