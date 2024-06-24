// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
