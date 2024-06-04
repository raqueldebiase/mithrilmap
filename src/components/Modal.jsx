import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.finalMessage}>
      <h2>Parabéns!</h2>
      <div className={styles.messageModal}>
        <div className={styles.iframe}>
          <iframe
            src="https://giphy.com/embed/dYTfJZ2dCQBhK"
            frameBorder="0"
            allowFullScreen
            title="Parabéns"
          ></iframe>
        </div>
        <p>
          That is, congratulations!<br />
          Now, go live the little life you have left.
        </p>
      </div>
    </div>
  );
};

export default Modal;
