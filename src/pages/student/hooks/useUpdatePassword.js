// src/hooks/useUpdatePassword.js
import { useState, useCallback } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../utils/helper";

export default function useUpdatePassword() {
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const handlePasswordInput = useCallback(
    (field, value) => {
      setPasswords((prev) => ({ ...prev, [field]: value }));

      let error = "";
      if (field === "current_password" && value.trim().length < 1) {
        error = "Current password is required";
      } else if (field === "new_password" && value.length < 6) {
        error = "Password must be at least 6 characters";
      } else if (
        field === "confirm_password" &&
        value !== passwords.new_password
      ) {
        error = "Passwords do not match";
      }

      setErrors((prev) => ({ ...prev, [field]: error }));
    },
    [passwords.new_password]
  );

  const handlePasswordChange = useCallback(async () => {
    const { current_password, new_password, confirm_password } = passwords;

    if (!current_password || !new_password || !confirm_password) {
      toast.warning("Please fill in all fields.");
      return;
    }
    if (
      errors.current_password ||
      errors.new_password ||
      errors.confirm_password
    ) {
      return;
    }

    setIsLoadingPassword(true);
    try {
      const res = await api.put(
        "/auth/change-password",
        { current_password, new_password, confirm_password },
        { withCredentials: true }
      );

      toast.success(res?.data?.message || "Password updated successfully!");
      setPasswords({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
      setErrors({});
    } catch (err) {
      toast.error(getErrorMessage(err, "passwordUpdate"));
    } finally {
      setIsLoadingPassword(false);
    }
  }, [passwords, errors]);

  return {
    passwords,
    errors,
    isLoadingPassword,
    handlePasswordInput,
    handlePasswordChange,
  };
}
