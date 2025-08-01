import { useState } from "react";
import { useNavigate } from "react-router";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { register } from "../services/authService";
import api from "../utils/api";

const useRegister = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const register = async (formData, role) => {
    try {
      setIsSubmitting(true);
      const res = await api.post("/auth/register", { ...formData, role });
      setSubmitMessage(res?.data?.message || "User Registered Successfully");
      navigate("/otp-page", { state: { email: formData.email } });
    } catch (err) {
      setSubmitMessage(err?.response?.data?.message || "Registration failed");
      throw new Error(err?.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return {
    register,
    isSubmitting,
    submitMessage,
  };
};

export default useRegister;
