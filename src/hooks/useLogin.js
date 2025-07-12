import { useState } from "react";
import { useNavigate } from "react-router";
import { user } from "../App"; // Or however you manage auth

const useLogin = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginFormState] = useState({
    identifier: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const setLoginForm = (name, value) => {
    setLoginFormState((prev) => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    const identifier = loginForm.identifier.trim();

    if (!identifier) {
      errors.identifier = "Email or NIN is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier) &&
      !/^\d{11}$/.test(identifier)
    ) {
      errors.identifier = "Enter a valid email or 11-digit NIN.";
    }

    if (!loginForm.password.trim()) {
      errors.password = "Password is required.";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Logging in with:", loginForm);
      user.isAuthenticated = true;

      setSubmitMessage("Login successful!");
      setTimeout(() => navigate("/", { replace: true }), 1000);
    } catch (error) {
      setSubmitMessage("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return {
    loginForm,
    loginErrors,
    setLoginForm,
    showPassword,
    setShowPassword: () => setShowPassword((prev) => !prev),
    isSubmitting,
    submitMessage,
    handleSubmit,
  };
};

export default useLogin;
