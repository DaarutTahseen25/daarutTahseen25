// src/auth/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, fetchProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth cannot be used outside of the AuthContext provider"
    );
  }

  return context;
};
