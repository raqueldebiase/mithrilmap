import React from 'react';
import styles from './gandalfMessage.module.css'; // Corrigido o nome da importação do módulo CSS

const GandalfMessage = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <p><span className={styles.hello}>Hello!</span>! This app is your guide to uncovering and tracking your journey through the works of J.R.R. Tolkien. Keep track of and log your progress in reading the works, following level 2 (intermediate).</p>
      </div>
    </div>
  );
};

export default GandalfMessage; // Renomeando o componente para começar com letra maiúscula
