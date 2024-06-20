import React, { useState } from 'react';
import { AuthProvider } from './AuthContext';
import StartPage from './components/StartPage';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Home from './components/Home';
import PageProfile from './components/PageProfile';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Parallax from './components/Parallax/Parallax';
import CookieConsent from './components/CookiesConsent';
import CookiesPolicy from './components/CookiesPolicy';
import { ReadingProgressProvider } from './components/ReadChapterList';

const App = () => {
  const [resetProgress, setResetProgress] = useState(false);
  const [readChapters, setReadChapters] = useState([]);
  const handleResetProgress = () => {
    setResetProgress(true);
  };

  return (
    <React.StrictMode>
      <AuthProvider>
        <ReadingProgressProvider> {/* Envolver com ReadingProgressProvider */}
          <BrowserRouter>
            <div className="app-container">
            <div className="divCentral">
                <Header onResetProgress={handleResetProgress} />
                <Routes>
                  <Route path='/' element={<StartPage />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/profile' element={<PageProfile />} />
                  <Route path='/login/*' element={<Login />} />
                  <Route path='/register/*' element={<Register />} />
                  <Route path='/cookies-policy' element={<CookiesPolicy />} />
                  <Route path='/404' element={<NotFound />} />
                  <Route path='*' element={<Navigate to="/404" replace />} />
                </Routes>
                <ParallaxWrapper />
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </ReadingProgressProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

const ParallaxWrapper = () => {
  const location = useLocation();

  const isProfilePage = location.pathname.startsWith("/profile");
  const is404Page = location.pathname === "/404";

  if (isProfilePage || is404Page) {
    return null;
  }

  return <Parallax />;
};

export default App;
