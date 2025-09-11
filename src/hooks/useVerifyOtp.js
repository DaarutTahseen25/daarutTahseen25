import { useReducer, useCallback } from "react";
import api from "../utils/api";
import { getErrorMessage } from "../utils/helper";

const initialState = {
  isLoading: false,
  showSuccess: false,
  showError: false,
  lockOutsideClick: true,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "STOP_LOADING":
      return { ...state, isLoading: false };
    case "SUCCESS":
      return {
        ...state,
        showSuccess: true,
        lockOutsideClick: false,
        showError: false,
        error: "",
      };
    case "ERROR":
      return {
        ...state,
        showError: true,
        showSuccess: false,
        error: action.payload || "Verification failed",
      };
    case "HIDE_POPUPS":
      return {
        ...state,
        showError: false,
        showSuccess: false,
        error: "",
      };
    default:
      return state;
  }
}

const useVerifyOtp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const verifyOtp = useCallback(async (email, code) => {
    dispatch({ type: "ERROR", payload: "" });

    try {
      dispatch({ type: "START_LOADING" });
      const response = await api.post("/auth/verify-otp", { email, code });

      if (response?.data?.success) {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({ type: "ERROR", payload: "Verification failed" });
      }

      return response.data;
    } catch (err) {
      const message = getErrorMessage(err, "otp");

      dispatch({ type: "ERROR", payload: message });
      return { success: false, message };
    } finally {
      dispatch({ type: "STOP_LOADING" });

      setTimeout(() => {
        dispatch({ type: "HIDE_POPUPS" });
      }, 3000);
    }
  }, []);

  return {
    ...state,
    verifyOtp,
  };
};

export default useVerifyOtp;
