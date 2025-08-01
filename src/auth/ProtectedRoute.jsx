import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to='/login' replace />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to='/unauthorized' replace />;
  }

  return children;
};

export default ProtectedRoute;
