import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../../utils/api";
import { getErrorMessage } from "../../utils/helper";

export const useSubmitTest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigate();

  async function submitTest(payload = {}) {
    if (isSubmiting) return;
    setIsSubmiting(true);

    try {
      const response = await api.post("/tests/submit", payload, {
        withCredentials: true,
      });

      toast.success(
        response?.data?.message || "Answers submitted successfully!"
      );

      setIsSubmitted(true);

      navigate("/student/level-registration", { replace: true });
    } catch (error) {
      const message = getErrorMessage(error, "testErrors");

      toast.error(message);
      console.error("Submission error:", error);
    } finally {
      setIsSubmiting(false);
    }
  }

  return {
    isSubmitted,
    isSubmiting,
    submitTest,
    setIsSubmitted,
  };
};
