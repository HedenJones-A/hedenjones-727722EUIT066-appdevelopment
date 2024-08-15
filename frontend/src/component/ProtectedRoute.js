import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute Component
function ProtectedRoute({ user, children }) {
  if (!user) {
    // If user is not logged in, redirect to sign-in page
    return <Navigate to="/security/authenticate" />;
  }

  // If user is logged in, render the child components
  return children;
}

export default ProtectedRoute;
