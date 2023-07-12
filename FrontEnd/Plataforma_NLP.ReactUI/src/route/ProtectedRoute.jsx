import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../redux/AuthContext';

const ProtectedRoute = ({ isProtected, allowedRoles, element }) => {
  const auth = useContext(AuthContext);

  if (isProtected && !auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (
    isProtected &&
    allowedRoles &&
    !allowedRoles.some((role) => auth.user.roles.includes(role)) &&
    !allowedRoles.includes('ALL')
  ) {
    // Redirect to a "Not Authorized" or "Access Denied" page
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
