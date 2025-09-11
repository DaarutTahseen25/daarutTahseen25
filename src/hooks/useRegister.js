import { useReducer, useCallback } from "react";
import { useNavigate } from "react-router";
import api from "../utils/api";
import { getErrorMessage } from "../utils/helper";

const initialState = {
  isSubmitting: false,
  submitMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, submitMessage: "" };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmitting: false, submitMessage: action.payload };
    case "SUBMIT_ERROR":
      return { ...state, isSubmitting: false, submitMessage: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, submitMessage: "" };
    default:
      return state;
  }
}

const useRegister = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = useCallback(
    async (formData, role) => {
      console.log(formData, role);
      try {
        dispatch({ type: "SUBMIT_START" });

        const res = await api.post("/auth/register", { ...formData, role });

        dispatch({
          type: "SUBMIT_SUCCESS",
          payload: res?.data?.message || "User Registered Successfully",
        });

        const registeredEmail = res?.data?.data?.email;

        navigate("/otp-page", { state: { email: registeredEmail } });
      } catch (err) {
        const errorMsg = getErrorMessage(err, "registration");
        dispatch({ type: "SUBMIT_ERROR", payload: errorMsg });
        throw new Error(errorMsg);
      } finally {
        setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 5000);
      }
    },
    [navigate]
  );

  return {
    register,
    isSubmitting: state.isSubmitting,
    submitMessage: state.submitMessage,
  };
};

export default useRegister;
