import React, { useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Home from './components/Home';
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
  
  const isNotFoundPage = location.pathname === "/notfound";
  const shouldRenderParallax = !isNotFoundPage;

  return (
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header onResetProgress={handleResetProgress} />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/register/*' element={<Register />} />
              <Route path='/cookies-policy' element={<CookiesPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
          {shouldRenderParallax && <Parallax />}
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
