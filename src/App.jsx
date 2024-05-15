import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

const App = () => {



  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Definindo a página de login como a página inicial */}
          <Route path='/' element={<Login />} />
          {/* Rota para a página de home */}
          <Route path='/home' element={<Home />} />
          {/* Rota para a página de login */}
          <Route path='/login/*' element={<Login />} />
          {/* Rota para a página de registro */}
          <Route path='/register/*' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
