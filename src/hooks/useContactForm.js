import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const errors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      errors.name = "This field cannot be empty";
    }

    if (!email) {
      errors.email = "This field cannot be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!message) {
      errors.message = "This field cannot be empty";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate sending data to a server
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Message sent:", formData);

      setFormData({ email: "", name: "", message: "" });
      setFormErrors({});
      setSubmitMessage("Message sent successfully!");

      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    formErrors,
    isSubmitting,
    submitMessage,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
