import React, { createContext, useContext, useState } from 'react';

const ReadingProgressContext = createContext();

export const useReadingProgress = () => {
  const context = useContext(ReadingProgressContext);
  if (!context) {
    throw new Error('useReadingProgress must be used within a ReadingProgressProvider');
  }
  return context;
};

export const ReadingProgressProvider = ({ children }) => {
  const [readChapters, setReadChapters] = useState([]);

  const toggleChapter = (chapterID) => {
    setReadChapters(prevState => {
      if (prevState.includes(chapterID)) {
        return prevState.filter(id => id !== chapterID);
      } else {
        return [...prevState, chapterID];
      }
    });
  };

  const resetProgress = () => {
    setReadChapters([]);
  };

  const value = {
    readChapters,
    toggleChapter,
    resetProgress,
  };

  return (
    <ReadingProgressContext.Provider value={value}>
      {children}
    </ReadingProgressContext.Provider>
  );
};
