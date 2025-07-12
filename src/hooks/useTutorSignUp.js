// hooks/useTutorSignupForm.js
import { useState } from "react";

const useTutorSignUp = () => {
  const [signupForm, setSignupFormState] = useState({
    inviteCode: "",
    nin: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [signupErrors, setSignupErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const setSignupForm = (name, value) => {
    setSignupFormState((prev) => ({ ...prev, [name]: value }));
    if (signupErrors[name]) {
      setSignupErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const clearFile = () => setFile(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (signupErrors.file) {
      setSignupErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const validate = () => {
    const errors = {};

    if (!signupForm.inviteCode.trim())
      errors.inviteCode = "Invite code is required.";
    if (!signupForm.nin.trim()) errors.nin = "NIN is required.";
    if (!signupForm.name.trim()) errors.name = "Name is required.";
    if (!signupForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
      errors.email = "Invalid email format.";
    }
    if (!signupForm.phone.trim()) errors.phone = "Phone number is required.";
    if (!signupForm.password.trim()) errors.password = "Password is required.";
    if (signupForm.password !== signupForm.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    if (!signupForm.agreed) errors.agreement = "You must agree to the terms.";
    if (file && file.size > 2 * 1024 * 1024)
      errors.file = "File must be less than 2MB.";

    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Teacher form submitted:", signupForm, file);
      setSubmitMessage("Account created successfully!");
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    signupForm,
    signupErrors,
    setSignupForm,
    file,
    setFile,
    clearFile,
    showPassword,
    setShowPassword: () => setShowPassword((prev) => !prev),
    isSubmitting,
    submitMessage,
    handleSubmit,
    handleFileChange,
  };
};

export default useTutorSignUp;
