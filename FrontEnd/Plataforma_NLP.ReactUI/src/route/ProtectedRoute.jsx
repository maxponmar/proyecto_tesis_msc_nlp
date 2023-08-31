import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isProtected, allowedRoles, element }) => {
  const { isAuthenticated } = useAuth0();
  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isProtected && !allowedRoles.includes('ALL')) {
    // Redirect to a "Not Authorized" or "Access Denied" page
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
