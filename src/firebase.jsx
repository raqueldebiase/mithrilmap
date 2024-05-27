import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth"; // Importe setPersistence e browserLocalPersistence
import { getFirestore, collection, doc, setDoc, getDocs, serverTimestamp } from "firebase/firestore";

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Configuração da persistência do estado de autenticação
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistência de autenticação configurada para LOCAL");
  })
  .catch((error) => {
    console.error("Erro ao configurar persistência de autenticação:", error);
  });

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

// Configuração da persistência do estado de autenticação
// Neste exemplo, estamos utilizando a persistência LOCAL para manter o usuário autenticado mesmo após a atualização da página
// Outras opções são: 'session' e 'none'
// Você pode escolher a opção que melhor se adequa às necessidades do seu aplicativo
setPersistence(auth, browserLocalPersistence, onAuthStateChanged);

