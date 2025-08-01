// Components/DefaultDashboardRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import QuranIcon from "./QuranIcon";

const DefaultDashboardRedirect = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role) {
      navigate(`/dashboard/${user.role}`, { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className='flex items-center justify-center w-full h-full bg-secondary'>
      <div className='animate-pulse p-6 rounded-full border-4 border-accent border-dashed'>
        <QuranIcon className='text-accent animate-pulse' />
      </div>
    </div>
  ); // Optional: Spinner or loader
};

export default DefaultDashboardRedirect;
