import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { saveReadingProgress, getReadingProgress, resetReadingProgress } from '../firebase';
import { auth } from '../firebase';

const ReadingProgressContext = createContext();

export const useReadingProgress = () => useContext(ReadingProgressContext);

export const ReadingProgressProvider = ({ children }) => {
  const [readChapters, setReadChapters] = useState([]);

  useEffect(() => {
    const storedProgress = Cookies.get('readingProgress');
    if (storedProgress) {
      setReadChapters(JSON.parse(storedProgress));
    }
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const fetchProgress = async () => {
        const progress = await getReadingProgress(user.uid);
        if (progress) {
          const progressChapters = Object.keys(progress).map(key => parseInt(key));
          setReadChapters(prevState => {
            const combinedState = [...new Set([...prevState, ...progressChapters])];
            Cookies.set('readingProgress', JSON.stringify(combinedState));
            return combinedState;
          });
        }
      };
      fetchProgress();
    }
  }, []);

  useEffect(() => {
    if (readChapters.length > 0) {
      Cookies.set('readingProgress', JSON.stringify(readChapters));
    }
  }, [readChapters]);

  const toggleChapter = async (chapterID) => {
    const user = auth.currentUser;
    if (user) {
      const updatedReadChapters = readChapters.includes(chapterID)
        ? readChapters.filter(id => id !== chapterID)
        : [...readChapters, chapterID];

      setReadChapters(updatedReadChapters);
      await saveReadingProgress(user.uid, chapterID.toString());
    }
  };

  const resetProgress = async () => {
    const user = auth.currentUser;
    if (user) {
      await resetReadingProgress(user.uid);
      setReadChapters([]);
      Cookies.remove('readingProgress');
    }
  };

  return (
    <ReadingProgressContext.Provider value={{ readChapters, toggleChapter, resetProgress }}>
      {children}
    </ReadingProgressContext.Provider>
  );
};

export default useReadingProgress;