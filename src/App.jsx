import React, { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Parallax from './components/Parallax/Parallax';
import CookieConsent from './components/CookiesConsent'; // Importe o componente CookieConsent
import CookiesPolicy from './components/CookiesPolicy';

const App = () => {
  const [resetProgress, setResetProgress] = useState(false);

  const handleResetProgress = () => {
    setResetProgress(true);
  };

  return (
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header onResetProgress={handleResetProgress} />
            <Routes>
              {/* Definindo a página de login como a página inicial */}
              <Route path='/' element={<Login />} />
              {/* Rota para a página de home */}
              <Route path='/home' element={<Home />} />
              {/* Rota para a página de login */}
              <Route path='/login/*' element={<Login />} />
              {/* Rota para a página de registro */}
              <Route path='/register/*' element={<Register />} />
              {/* Rota para a política de cookies */}
              <Route path='/cookies-policy' element={<CookiesPolicy />} />
            </Routes>
            <Footer />
          </div>
          <Parallax />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
