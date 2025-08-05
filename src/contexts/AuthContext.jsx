import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import api from "../utils/api";

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch user profile from backend
  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile", { withCredentials: true });
      setUser(res?.data?.data?.user);
    } catch {
      setUser(null);
      Cookies.remove("token");
    } finally {
      setLoading(false);
    }
  };

  // Logout function: clear token, reset state, redirect
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login", { replace: true });
  };

  // Run once on mount
  useEffect(() => {
    fetchProfile();
  }, []);

  // Memoize context value to avoid re-renders
  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      fetchProfile,
      logout,
    }),
    [user, loading]
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
