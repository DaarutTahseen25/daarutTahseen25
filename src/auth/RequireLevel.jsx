import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const RequireLevel = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    user.role === "student" &&
    !user.level &&
    location.pathname !== "/student/level-registration"
  ) {
    return <Navigate to="/student/level-registration" replace />;
  }

  return <Outlet />;
};

export default RequireLevel;
