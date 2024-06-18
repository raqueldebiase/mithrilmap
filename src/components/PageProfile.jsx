import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageProfile.module.css';
import { useReadingProgress } from './ReadChapterList'; // Verifique o caminho correto

const PageProfile = () => {
  const { readChapters } = useReadingProgress(); // Obtém os capítulos lidos do contexto

  return (
    <div className={`${styles.profileContent} container`}>
      <div className={styles.yourEvolution}>
        <div className={styles.readChapters}>
          <h3>Chapters Read:</h3>
          <ul>
            {readChapters.length > 0 ? (
              readChapters.map(chapterId => (
                <li key={chapterId}>Chapter {chapterId}</li>
              ))
            ) : (
              <li>No chapters read yet.</li>
            )}
          </ul>
        </div>
      </div>
      
      <Link className={styles.arrowBack} to="/home">
        Back to the journey
      </Link>
    </div>
  );
};

export default PageProfile;
