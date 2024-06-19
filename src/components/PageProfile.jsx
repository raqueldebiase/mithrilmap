import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import styles from './PageProfile.module.css';
import { useReadingProgress } from './ReadChapterList'; // Verifique o caminho correto
import { readChaptersObservable, sendChapters } from './resetProgressObservable';

const PageProfile = () => {

  const [readChaptersList, setReadChaptersList] = useState([]);

  const { readChapters } = useReadingProgress(); // Obtém os capítulos lidos do contexto


  useEffect(() => {
    console.log('useEffect foi adicionado');
    const subscription = readChaptersObservable.subscribe(value => {
      console.log('valor recebido:', value);
      if (value) {
        setReadChaptersList(value)
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  

  return (
    <div className={`${styles.profileContent} container`}>
      <div className={styles.yourEvolution}>
        <div className={styles.readChapters}>
          <h3>Chapters Read:</h3>
          <ul>
          {readChaptersList.length > 0 ? (
            readChaptersList.map((chapterId, index) => (
              <li key={index}>Chapter {chapterId}</li>
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
