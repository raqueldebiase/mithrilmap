import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.finalMessage}>
      <h2>Parabéns!</h2>
      <div className={styles.messageModal}>
        <p>
          That is, congratulations!<br />
          Now, go live the little life you have left.
        </p>
        <div className={styles.gifContainer}>
          <iframe
            src="https://giphy.com/embed/dYTfJZ2dCQBhK"
            frameBorder="0"
            allowFullScreen
            title="Parabéns"
            className={styles.gif}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
