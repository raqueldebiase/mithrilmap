import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageProfile.module.css';
import { useReadingProgress } from './ReadingProgressContext';

const PageProfile = () => {
  const { readChapters, resetProgress } = useReadingProgress();
  
  const chaptersTitles = [
    { id: 1, title: 'The Silmarillion: Ainulindalë', avatar: '../assets/silmarills.png' },
    { id: 2, title: 'The Silmarillion: Valaquenta' },
    { id: 3, title: 'The Silmarillion: Quenta Silmarillion (up to the end of Chapter XVIII)' },
    { id: 4, title: 'Beren and Lúthien: read the entire book' },
    { id: 5, title: 'The Silmarillion: read Chapter XX' },
    { id: 6, title: 'The Children of Húrin: read the entire book OR The Silmarillion: read Chapter XXI' },
    { id: 7, title: 'Unfinished Tales: read Chapter I of the first part of Unfinished Tales “Of Tuor and his coming to Gondolin”' },
    { id: 8, title: 'The Silmarillion: continue reading The Silmarillion in the part “Quenta Silmarillion”, chapters XXIII and XXIV' },
    { id: 9, title: 'Unfinished Tales (Part II): read the chapters: I – A Description of the Island of Númenor, II – Aldarion and Erendis, III – The Line of Elros: Kings of Númenor' },
    { id: 10, title: 'The Silmarillion: read “Akallabêth” in its entirety' },
    { id: 11, title: 'Unfinished Tales: read in the second part Chapter IV “The History of Galadriel and Celeborn”' },
    { id: 12, title: 'The Silmarillion: read “Of the Rings of Power and the Third Age” up to the 30th paragraph.' },
    { id: 13, title: 'Unfinished Tales: read “The Disaster of the Gladden Fields”.' },
    { id: 14, title: 'The Lord of the Rings, The Return of the King, Appendix “A”: read the appendices “Annals of the Kings and Rulers”, up to the end of topic IV “Gondor and the heirs of Anárion”.' },
    { id: 15, title: 'Unfinished Tales: read the chapter “Cirion and Eorl and the Friendship of Gondor and Rohan”' },
    { id: 16, title: 'The Lord of the Rings, The Return of the King: read the entire second topic “The House of Eorl”.' },
    { id: 17, title: 'The Lord of the Rings, The Return of the King, in Appendix “A”: read the topic “part of the story of Arwen and Aragorn”.' },
    { id: 18, title: 'Unfinished Tales: read the fourth part in the following order: “The Istari”, “The Palantíri”, “The Drúedain”,' },
    { id: 19, title: 'The Lord of the Rings, The Return of the King, in Appendix “A”: read the topic “The People of Durin”.' },
    { id: 20, title: 'Unfinished Tales, third part: read “The Quest of Erebor”.' },
    { id: 21, title: 'The Hobbit: read the entire book' },
    { id: 22, title: 'The Lord of the Rings: The Fellowship of the Ring: read the entire book' },
    { id: 23, title: 'Unfinished Tales: read the chapter "The Hunt for the Ring".' },
    { id: 24, title: 'The Lord of the Rings: The Two Towers: read the first chapter.' },
    { id: 25, title: 'Unfinished Tales: read the chapter “The Battles of the Fords of Isen”.' },
    { id: 26, title: 'The Lord of the Rings, The Two Towers: read from the second chapter to the end of the book.' },
    { id: 27, title: 'The Lord of the Rings, The Return of the King: read the entire book.' },
    { id: 28, title: 'The Silmarillion: read “Of the Rings of Power and the Third Age”, starting from the 31st paragraph.' },
  ];

  return (
    <div className={`${styles.profile} container`}>
      <div className={styles.profileContent}>
        <div className={styles.headerProfile}>
          <h2>Profile</h2>
          <p>You can find here a summary of your journey</p>
        </div>
        <div className={styles.yourEvolution}>
          <div className={styles.personalInfos}>
            <div>
              <h3>Your informations:</h3>
              <div className={styles.yourInfo}></div>
            </div>
            <div>
              <h3>Choose your avatar:</h3>
              <div className={styles.yourInfo}></div>
            </div>
          </div>
          <div>
            <h3>Chapters Read:</h3>
            <div className={styles.readChapters}>
            <ul>
            {readChapters.length > 0 ? (
              readChapters.map((chapterId, index) => {
                const chapter = chaptersTitles.find(ch => ch.id === chapterId);
                return <li key={index}>Chapter {chapter ? chapter.title : 'Unknown'}</li>;
              })
            ) : (
              <li>No chapters read yet.</li>
            )}
          </ul>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link className={styles.arrowBack} to="/home">
            Back to the journey
          </Link>
          <button className={`${styles.arrowBack} ${styles.resetClass}`} onClick={resetProgress}>Reset Progress</button>
        </div>
      </div>
    </div>
  );
};

export default PageProfile;
