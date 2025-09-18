// src/hooks/useUpdatePassword.js
import { useState, useCallback } from "react";
import api from "../../../utils/api";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../utils/helper";

export default function useUpdatePassword() {
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const validate = useCallback(
    (fields = passwords) => {
      const newErrors = {};

      if (!fields.current_password.trim()) {
        newErrors.current_password = "Current password is required";
      }

      if (!fields.new_password) {
        newErrors.new_password = "New password is required";
      } else if (fields.new_password.length < 8) {
        newErrors.new_password = "Password must be at least 8 characters";
      }

      if (!fields.confirm_password) {
        newErrors.confirm_password = "Please confirm your new password";
      } else if (fields.confirm_password !== fields.new_password) {
        newErrors.confirm_password = "Passwords do not match";
      }

      return newErrors;
    },
    [passwords]
  );

  const handlePasswordInput = useCallback(
    (field, value) => {
      setPasswords((prev) => ({ ...prev, [field]: value }));

      const fieldErrors = validate({ ...passwords, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] || "" }));
    },
    [passwords, validate]
  );

  const handlePasswordChange = useCallback(async () => {
    const allErrors = validate();
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      toast.warning("Please correct the highlighted errors.");
      return;
    }

    setIsLoadingPassword(true);
    try {
      const { current_password, new_password, confirm_password } = passwords;
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
  }, [passwords, validate]);

  return {
    passwords,
    errors,
    isLoadingPassword,
    handlePasswordInput,
    handlePasswordChange,
  };
}
