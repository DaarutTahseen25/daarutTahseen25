import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import api from "../../utils/api"; // Axios instance or fetch wrapper

export default function useTestQuestions(autoFetch = true) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  // ---- shuffle helper ----
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Fetch questions from API
  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get("/tests/questions");
      const data = res.data;

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch questions");
      }

      const shuffled = shuffle(data.data.questions || []);
      setQuestions(shuffled);
    } catch (err) {
      console.error("Error fetching test questions:", err);
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchQuestions();
    }
  }, [fetchQuestions, autoFetch]);

  return {
    questions,
    loading,
    error,
    setQuestions,
  };
}
