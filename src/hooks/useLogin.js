import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { useAuth } from "../contexts/AuthContext";
import api from "../utils/api";

export const useLogin = () => {
  const navigate = useNavigate();
  const { fetchProfile } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const login = async (email, password) => {
    try {
      setIsSubmitting(true);

      const { data } = await api.post("/auth/login", { email, password });
      const message = data?.message || "User Login Successfully";
      setSubmitMessage(message);

      Cookies.set("token", data?.data?.token);

      const user = data?.data?.user;
      const identifier = user?.role;

      if (!identifier) throw new Error("User identifier missing");

      await fetchProfile();
      navigate(`/${identifier}`, { replace: true });
    } catch (err) {
      console.error(err?.response || err);
      const errorMsg =
        err?.response?.data?.message ||
        "Invalid Login Credentials, Login Failed";
      setSubmitMessage(errorMsg);
      throw new Error(errorMsg);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return {
    login,
    isSubmitting,
    submitMessage,
  };
};
