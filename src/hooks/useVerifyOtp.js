import { useState } from "react";
import api from "../utils/api";

const useVerifyOtp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [lockOutsideClick, setLockOutsideClick] = useState(true);
  const [error, setError] = useState("");

  const verifyOtp = async (email, code) => {
    setError("");
    setShowError(false);

    try {
      setIsLoading(true);
      const response = await api.post("/auth/verify-otp", { email, code });

      if (response?.data?.success) {
        setShowSuccess(true);
        setLockOutsideClick(false);
        return { success: true };
      } else {
        setError("Verification failed");
        setShowError(true);
        return { success: false };
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Invalid OTP code or expired";
      setError(message);
      setShowError(true);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verifyOtp,
    isLoading,
    showSuccess,
    showError,
    error,
    lockOutsideClick,
  };
};

export default useVerifyOtp;
