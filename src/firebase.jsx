// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDocs, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-qslKDQjWMM8r9nIRAVPCSvjI7h2GSq8",
  authDomain: "gandalf-a8023.firebaseapp.com",
  projectId: "gandalf-a8023",
  storageBucket: "gandalf-a8023.appspot.com",
  messagingSenderId: "94615992892",
  appId: "1:94615992892:web:12ec2c6f7777d21e5c6139",
  measurementId: "G-1G7RB3DTV8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };

// Funções para salvar e recuperar os dados de leitura do usuário no Firestore.

export const saveReadingProgress = async (userId, chapterId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const readingProgressRef = doc(userDocRef, 'readingProgress', chapterId);
    await setDoc(readingProgressRef, {
      read: true,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Erro ao salvar progresso de leitura:', error);
  }
};

// Recuperar os dados das leituras
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
