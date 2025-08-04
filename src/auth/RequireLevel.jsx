import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const RequireLevel = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (user?.role === "student" && !user?.level) {
    return (
      <Navigate
        to='/student/level-registration'
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireLevel;
