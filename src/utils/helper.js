export function formatDate(dateInput) {
  const date = new Date(dateInput);

  if (isNaN(date)) return "Invalid date";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const getUserRole = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role || "student";
  } catch (error) {
    return "student";
  }
};

export const validate = (signupForm, file, setSignupErrors) => {
  const errors = {};

  if (!signupForm.NIN) errors.NIN = "NIN is required.";

  if (!signupForm.full_name.trim()) errors.full_name = "Full name is required.";

  if (!signupForm.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
    errors.email = "Invalid email format.";
  }

  if (!signupForm.gender) {
    errors.gender = "Gender is required.";
  } else if (!["male", "female"].includes(signupForm.gender.toLowerCase())) {
    errors.gender = "Gender must be 'male' or 'female'.";
  }

  if (!signupForm.phone_number.trim()) {
    errors.phone_number = "Phone number is required.";
  }

  if (!signupForm.password.trim()) {
    errors.password = "Password is required.";
  } else if (signupForm.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (signupForm.password !== signupForm.confirm_password) {
    errors.confirm_password = "Passwords do not match.";
  }

  if (!signupForm.agreed) {
    errors.agreement = "You must agree to the terms.";
  }

  if (file && file.size > 2 * 1024 * 1024) {
    errors.file = "File must be less than 2MB.";
  }

  setSignupErrors(errors);
  return Object.keys(errors).length === 0;
};

export const truncateEmail = (email, maxUsernameLength = 6) => {
  const [username, domain] = email.split("@");
  if (!username || !domain) return email;

  if (username.length <= maxUsernameLength) return email;

  return `${username.slice(0, maxUsernameLength)}...@${domain}`;
};

// utils/getErrorMessage.js
// utils/getErrorMessage.js
export const getErrorMessage = (err, fallback = "Something went wrong") => {
  const errorMessages = {
    400: "Bad request. Please check your input.",
    401: "Invalid credentials.",
    403: "Access denied.",
    404: "Resource not found.",
    500: "Server error. Please try again later.",
  };

  if (!err?.response) {
    if (err?.message?.toLowerCase().includes("network error")) {
      return "No internet connection. Please check your network.";
    }
    return "Unable to connect to the server. Try again later.";
  }

  return (
    err?.response?.data?.message ||
    errorMessages[err?.response?.status] ||
    fallback
  );
};
