// ChapterList.jsx

import React from 'react';
import ChapterItem from './ChapterItem';
import styles from './ChapterList.module.css';

const ChapterList = ({ chapters, readChapters, toggleChapter }) => {
  const unreadChapters = chapters.filter(chapter => !readChapters.includes(chapter.id));

  return (
    <div className={styles.chapterList}>
      {unreadChapters.map(chapter => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          isRead={readChapters.includes(chapter.id)}
          toggleChapter={toggleChapter}
        />
      ))}
    </div>
  );
};

export default ChapterList;
