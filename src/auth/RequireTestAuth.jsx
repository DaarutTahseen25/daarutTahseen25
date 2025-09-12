import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function RequireTestAuth({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  const isAspirant = user?.role === "student" && !user?.is_admitted;
  return isAspirant ? children : <Navigate to="/unauthorized" replace />;
}
