import React, { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Home from './components/Home';
import PageProfile from './components/PageProfile'; // Corrected import
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Parallax from './components/Parallax/Parallax';
import CookieConsent from './components/CookiesConsent';
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
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/profile' element={<PageProfile />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/register/*' element={<Register />} />
              <Route path='/cookies-policy' element={<CookiesPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
          <ParallaxWrapper />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
};

const ParallaxWrapper = () => {
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith("/profile");
  const is404Page = !location.pathname.startsWith("/home") &&
                    !location.pathname.startsWith("/profile") && // Excluindo a página de perfil
                    !location.pathname.startsWith("/login") &&
                    !location.pathname.startsWith("/register") &&
                    !location.pathname.startsWith("/cookies-policy");

  if (is404Page) {
    return null;
  }

  if (isProfilePage) {
    return null; // Não renderiza o Parallax na página de perfil
  }

  return <Parallax />;
};



export default App;
