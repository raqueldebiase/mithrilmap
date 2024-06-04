import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQchOM95h2SyjqUxe8ut5lUH2J9e4sOYo",
  authDomain: "gandalf-f8f67.firebaseapp.com",
  projectId: "gandalf-f8f67",
  storageBucket: "gandalf-f8f67.appspot.com",
  messagingSenderId: "321780663035",
  appId: "1:321780663035:web:d481af5a495ac046d5265e",
  measurementId: "G-3YKDYE2JKW",
  databaseURL: "https://gandalf-f8f67.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistência de autenticação configurada para LOCAL");
  })
  .catch((error) => {
    console.error("Erro ao configurar persistência de autenticação:", error);
  });

export { auth, firestore };

export const saveReadingProgress = async (userId, chapterId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    console.log("Chapter ID:", chapterId);
    const readingProgressRef = doc(userDocRef, 'readingProgress', chapterId.toString());
    
    await setDoc(readingProgressRef, {
      read: true,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Erro ao salvar progresso de leitura:', error);
  }
};

export const getReadingProgress = async (userId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const readingProgressRef = collection(userDocRef, 'readingProgress');
    const snapshot = await getDocs(readingProgressRef);
    let progress = {};
    snapshot.forEach(doc => {
      progress[doc.id] = doc.data();
    });
    return progress;
  } catch (error) {
    console.error('Erro ao recuperar progresso de leitura:', error);
  }
};

export const resetReadingProgress = async (userId) => {
  try {
    
    const userDocRef = doc(firestore, 'users', userId);
    const readingProgressRef = collection(userDocRef, 'readingProgress');
    const snapshot = await getDocs(readingProgressRef);

    // Criar uma nova instância do batch
    const batch = writeBatch(firestore);

    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  } catch (error) {
    console.error('Erro ao redefinir progresso de leitura:', error);
  }
};

export const firebaseInstance = app;
