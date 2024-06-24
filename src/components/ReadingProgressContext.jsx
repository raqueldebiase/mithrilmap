// ReadingProgressContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveReadingProgress, getReadingProgress, resetReadingProgress } from '../firebase';
import { useAuth } from '../AuthContext';

const ReadingProgressContext = createContext();

export const useReadingProgress = () => useContext(ReadingProgressContext);

export const ReadingProgressProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [readChapters, setReadChapters] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchProgress = async () => {
        const progress = await getReadingProgress(currentUser.uid);
        if (progress) {
          const progressChapters = Object.keys(progress).map(key => parseInt(key));
          setReadChapters(progressChapters);
        }
      };
      fetchProgress();
    }
  }, [currentUser]);

  const toggleChapter = async (chapterID) => {
    if (currentUser) {
      const updatedReadChapters = readChapters.includes(chapterID)
        ? readChapters.filter(id => id !== chapterID)
        : [...readChapters, chapterID];

      setReadChapters(updatedReadChapters);
      await saveReadingProgress(currentUser.uid, chapterID.toString());
    }
  };

  const resetProgress = async () => {
    if (currentUser) {
      await resetReadingProgress(currentUser.uid);
      setReadChapters([]);
    }
  };

  return (
    <ReadingProgressContext.Provider value={{ readChapters, toggleChapter, resetProgress }}>
      {children}
    </ReadingProgressContext.Provider>
  );
};

export default useReadingProgress;
