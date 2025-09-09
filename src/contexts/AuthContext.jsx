import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import api from "../utils/api";

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(user);

  // Memoized fetchProfile to prevent unnecessary re-creation
  const fetchProfile = useCallback(async () => {
    try {
      const res = await api.get("/auth/profile", { withCredentials: true });
      setUser(res?.data?.data?.user || null);
    } catch {
      setUser(null);
      Cookies.remove("token");
    } finally {
      setLoading(false);
    }
  }, []);

  // Memoized logout function
  const logout = useCallback(() => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate]);

  // Fetch profile on mount
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      fetchProfile,
      logout,
    }),
    [user, loading, fetchProfile, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to consume auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
