import { useReducer, useCallback } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { useAuth } from "../contexts/AuthContext";
import api from "../utils/api";
import { getErrorMessage } from "../utils/helper";

const initialState = {
  isSubmitting: false,
  submitMessage: "",
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, submitMessage: "", error: null };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        submitMessage: action.payload,
        error: null,
      };
    case "SUBMIT_ERROR":
      return {
        ...state,
        isSubmitting: false,
        submitMessage: action.payload,
        error: action.payload,
      };
    case "CLEAR_MESSAGE":
      return { ...state, submitMessage: "", error: null };
    default:
      return state;
  }
}

export const useLogin = () => {
  const navigate = useNavigate();
  const { fetchProfile } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(
    async (email, password) => {
      dispatch({ type: "SUBMIT_START" });
      try {
        const { data } = await api.post("/auth/login", { email, password });
        const message = data?.message || "User Login Successfully";
        dispatch({ type: "SUBMIT_SUCCESS", payload: message });

        Cookies.set("token", data?.data?.token);

        const user = data?.data?.user;
        const identifier = user?.role;

        if (!identifier) throw new Error("User identifier missing");

        await fetchProfile();

        navigate(`/${identifier}`, { replace: true });
        return { success: true };
      } catch (err) {
        const errorMsg = getErrorMessage(err, "Login Failed");

        dispatch({ type: "SUBMIT_ERROR", payload: errorMsg });
        return { success: false, error: errorMsg };
      } finally {
        setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 5000);
      }
    },
    [fetchProfile, navigate]
  );

  return {
    login,
    isSubmitting: state.isSubmitting,
    submitMessage: state.submitMessage,
    error: state.error,
  };
};
