import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import profileWizard from '../assets/profilewizard.png';
import { AuthContext } from '../AuthContext'; // alteração aqui
import Modal from 'react-modal'; // importe a biblioteca react-modal

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // estado para controlar a exibição do modal

  const handleMouseOver = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logoTitle} to="/" aria-label='Home'>In Gandalf we trust</p>
        <div 
          className={styles.profileImg} 
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={profileWizard} 
            alt="Wizard" 
            className={currentUser ? styles.imageLoggedIn : ''}
          />
        </div>
      </nav>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleMouseLeave}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 9999
          },
          content: {
            position: 'absolute',
            top: '10%', // ajuste conforme necessário
            right: '0px', // ajuste conforme necessário
            border: 'none',
            background: '#fff',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '30%',
            maxHeight: '20%'
          }
        }}
      >
        {/* Conteúdo do modal */}
        <p>Modal content here</p>
      </Modal>
    </header>
  );
}

export default Header;
