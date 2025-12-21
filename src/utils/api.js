import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => Cookies.get("token");

const api = axios.create({
  baseURL: "https://dt-backend-qxza.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

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
