import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // 🌀 Fullscreen loading screen to prevent white flashes
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-100 text-gray-600'>
        <p>Loading...</p>
      </div>
    );
  }

  // 🚫 Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  // 🚫 Role-based access control
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to='/unauthorized' replace />;
  }

  // ✅ If all checks pass, render the protected children
  return children;
};

export default ProtectedRoute;
