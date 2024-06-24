// AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import styles from "./components/AuthContext.module.css";
import { auth } from './firebase'; // Certifique-se de que o caminho está correto
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Adicione um estado de carregamento

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Defina o estado de carregamento como falso após a verificação
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>; // Ou um spinner de carregamento
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
