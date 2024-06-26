import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReadingProgress } from './ReadingProgressContext';
import { auth } from '../firebase';
import styles from './Home.module.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const chapters = [
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

const Home = () => {
  const { readChapters, toggleChapter, resetProgress } = useReadingProgress();
  const [recentlyMarkedReadChapters, setRecentlyMarkedReadChapters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleProgressBarComplete();
  }, [readChapters]);

  const handleUndoMarkChapterAsRead = () => {
    if (recentlyMarkedReadChapters.length > 0) {
      const lastReadChapter = recentlyMarkedReadChapters[recentlyMarkedReadChapters.length - 1];
      toggleChapter(lastReadChapter);
      setRecentlyMarkedReadChapters(recentlyMarkedReadChapters.slice(0, -1));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    const user = auth.currentUser;
    if (user) {
      resetProgress();
    }
  };

  const handleLogout = () => {
    navigate('/Login');
  };

  const handleProgressBarComplete = () => {
    if (readChapters.length === chapters.length) {
      setShowModal(true);
    }
  };

  const handleAddChapterToJourney = (chapterID) => {
    toggleChapter(chapterID);
    setShowMessage(true); // Exibir a mensagem ao adicionar um capítulo
  };

  return (
    <div className={`${styles.home} container`}>
      {showMessage && (
        <div className={styles.message}>
          <p>Chapter added to your journey!</p>
          <Link to="/profile">
            <button>See all chapters</button>
          </Link>
        </div>
      )}
      <div className={styles.evolution}>
        <h2>The Evolution of your journey</h2>
        <ProgressBar total={chapters.length} completed={readChapters.length} onComplete={handleProgressBarComplete} />
      </div>

      {readChapters.length < chapters.length ? (
        <>
          <div className={styles.undoButton}>
            <button onClick={handleUndoMarkChapterAsRead}>Return the last one</button>
          </div>
          <div className={styles.chapters}>
            <ChapterList chapters={chapters} readChapters={readChapters} toggleChapter={toggleChapter} handleAddChapterToJourney={handleAddChapterToJourney} />
          </div>
        </>
      ) : (
        <Modal onClose={handleCloseModal} />
      )}
    </div>
  );
};

const ProgressBar = ({ total, completed, onComplete }) => {
  const percentage = (completed / total) * 100;

  useEffect(() => {
    if (percentage >= 100) {
      onComplete();
    }
  }, [percentage, onComplete]);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const ChapterList = ({ chapters, readChapters, toggleChapter, handleAddChapterToJourney }) => {
  const unreadChapters = chapters.filter(chapter => !readChapters.includes(chapter.id));

  return (
    <div className={styles.chapterList}>
      {unreadChapters.map(chapter => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          isRead={readChapters.includes(chapter.id)}
          toggleChapter={toggleChapter}
          handleAddChapterToJourney={handleAddChapterToJourney}
        />
      ))}
    </div>
  );
};

const ChapterItem = ({ chapter, isRead, toggleChapter, handleAddChapterToJourney }) => {
  const handleClick = () => {
    toggleChapter(chapter.id);
    handleAddChapterToJourney(chapter.id); // Chame handleAddChapterToJourney após marcar o capítulo como lido
    
    const element = document.getElementById(`chapter-${chapter.id}`);
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'translateX(100%)';
    element.addEventListener('transitionend', () => {
      element.parentNode.removeChild(element);
    });
  };

  return (
    <div
      id={`chapter-${chapter.id}`}
      className={`${styles.chapterItem} ${isRead && styles.read}`}
      onClick={handleClick}
    >
      {chapter.title}
    </div>
  );
};

export default Home;
