import { useReducer, useCallback } from "react";
import api from "../utils/api";
import { getErrorMessage } from "../utils/helper";

const initialState = {
  isLoading: false,
  message: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, isLoading: true, error: "", message: "" };
    case "SUCCESS":
      return { ...state, isLoading: false, message: action.payload };
    case "ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

const useResendOtp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resendOtp = useCallback(async (email) => {
    try {
      dispatch({ type: "START" });
      const res = await api.post("/auth/resend-otp", { email });
      dispatch({
        type: "SUCCESS",
        payload: res?.data?.message || "OTP resent successfully",
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: getErrorMessage(err, "otp"),
      });
    }
  }, []);

  return { ...state, resendOtp };
};

export default useResendOtp;
