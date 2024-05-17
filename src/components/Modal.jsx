import React from 'react';
import styles from './Modal.module.css'; // Importe os estilos do modal

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <h2>Parabéns!</h2>
        <div className={styles.messageModal}>
          <div className={styles.iframe}>
            <iframe src="https://giphy.com/embed/dYTfJZ2dCQBhK" frameBorder="0" allowFullScreen></iframe>
          </div>
          <p>That is, congratulations!<br /> Now, go live the little life you have left.</p>
        </div>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
