import { useReducer, useCallback } from "react";

const initialState = {
  formData: {
    email: "",
    name: "",
    message: "",
  },
  formErrors: {},
  isSubmitting: false,
  submitMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },

        formErrors: {
          ...state.formErrors,
          [action.field]: "",
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        formErrors: action.errors,
      };
    case "SUBMIT_START":
      return {
        ...state,
        isSubmitting: true,
        submitMessage: "",
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        submitMessage: action.message,
        formData: { email: "", name: "", message: "" },
        formErrors: {},
      };
    case "SUBMIT_FAILURE":
      return {
        ...state,
        isSubmitting: false,
        submitMessage: action.message,
      };
    case "CLEAR_MESSAGE":
      return {
        ...state,
        submitMessage: "",
      };
    default:
      return state;
  }
}

const validateForm = (formData) => {
  const errors = {};
  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!name) errors.name = "This field cannot be empty";
  if (!email) errors.email = "This field cannot be empty";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address";
  if (!message) errors.message = "This field cannot be empty";

  return errors;
};

const useContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", field: name, value });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const errors = validateForm(state.formData);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", errors });
        return;
      }

      dispatch({ type: "SUBMIT_START" });

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Message sent:", state.formData);

        dispatch({
          type: "SUBMIT_SUCCESS",
          message: "Message sent successfully!",
        });

        setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 5000);
      } catch (error) {
        console.error("Error sending message:", error);
        dispatch({
          type: "SUBMIT_FAILURE",
          message: "Failed to send message. Please try again.",
        });
      }
    },
    [state.formData]
  );

  return {
    formData: state.formData,
    formErrors: state.formErrors,
    isSubmitting: state.isSubmitting,
    submitMessage: state.submitMessage,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
