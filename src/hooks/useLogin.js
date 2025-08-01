import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { useAuth } from "./../contexts/AuthContext";

import api from "../utils/api";

export const useLogin = () => {
  const navigate = useNavigate();

  const { fetchProfile } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const login = async (email, password) => {
    try {
      setIsSubmitting(true);
      const res = await api.post("/auth/login", { email, password });
      setSubmitMessage(res?.data?.message || "User Login Successfully");
      Cookies.set("token", res.data.data.token);
      await fetchProfile();

      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err?.response);
      setSubmitMessage(
        err?.response?.data?.message ||
          "Invalid Login Credentials , Login Failed"
      );
      throw new Error(
        err?.response?.data?.message ||
          "Invalid Login Credentials , Login Failed"
      );
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
