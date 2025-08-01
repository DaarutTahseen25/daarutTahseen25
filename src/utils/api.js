import axios from "axios";
import Cookies from "js-cookie";

// Helper function to get token from cookies
const getToken = () => Cookies.get("token");

// Create Axios instance
const api = axios.create({
  baseURL: "https://dt-backend-qxza.onrender.com/api/v1", // Replace with your actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Add Authorization header if token exists
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("⚠️ Unauthorized. Clearing tokens.");
      Cookies.remove("token");
    }

    return Promise.reject(error);
  }
);

export default api;
