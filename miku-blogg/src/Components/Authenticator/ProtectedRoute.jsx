import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Authenticator';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
