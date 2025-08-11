import Cookies from "js-cookie";
import api from "../utils/api";

// Login user and store token + user in localStorage
export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/login", data);

    const token = response.data.data.token;
    localStorage.setItem("token", token);
    Cookies.set("token", token, { expires: 7 });

    const profileRes = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = profileRes.data.data.user; // ✅ fixed
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Register user and optionally store email (for OTP verification flow)
export const register = async (data, role) => {
  try {
    const res = await api.post("/auth/register", {
      ...data,
      role,
    });

    if (res.data?.data?.email) {
      localStorage.setItem("userEmail", res.data.data.email);
    }

    return res.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Verify OTP and store token + user
export const verifyOtp = async (data) => {
  try {
    const res = await api.post("/auth/verify-otp", { ...data });

    const token = res.data.data.token;
    localStorage.setItem("token", token);
    Cookies.set("token", token, { expires: 7 });

    const profileRes = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = profileRes.data.data.user; // ✅ fixed
    localStorage.setItem("user", JSON.stringify(user));

    return res.data;
  } catch (error) {
    console.error("OTP verification error:", error);
    throw error;
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("user");
  Cookies.remove("token");
};

// Get token (from localStorage or cookie)
export const getToken = () => {
  return localStorage.getItem("token") || Cookies.get("token");
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!getToken();
};

// Get user profile (manual use)
export const getUserProfile = async () => {
  try {
    const res = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};
