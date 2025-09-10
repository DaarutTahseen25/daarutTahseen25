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

// errorHandler.js
export function getErrorMessage(error, context = "general") {
  if (!error || !error.response) {
    return "Something went wrong. Please try again.";
  }

  const status = error.response.status;

  const messages = {
    // General fallback
    general: {
      400: "Invalid request. Please check and try again.",
      401: "You are not authorized. Please login.",
      403: "You don’t have permission to do this.",
      404: "Resource not found.",
      500: "Server error. Please try again later.",
    },

    // Registration context
    registration: {
      400: "Invalid registration details. Please check your input.",
      409: "This email is already registered.",
      500: "Unable to register now. Try again later.",
    },

    // Login context
    login: {
      400: "Please enter a valid email and password.",
      401: "Incorrect credentials. Please try again.",
      403: "Your account is blocked. Contact support.",
      500: "Login service unavailable. Try again later.",
    },

    // OTP context
    otp: {
      400: "Invalid OTP format.",
      401: "OTP expired or incorrect.",
      429: "Too many attempts. Please wait and try again.",
      500: "Couldn’t verify OTP. Try again later.",
    },

    // Profile Update context
    profileUpdate: {
      400: "Invalid profile details. Please check your input.",
      401: "You must be logged in to update your profile.",
      403: "You don’t have permission to update this profile.",
      404: "Profile not found.",
      409: "This email/username is already taken.",
      500: "Couldn’t update profile. Try again later.",
    },

    // Password Update context
    passwordUpdate: {
      400: "New password does not meet requirements.",
      401: "You must be logged in to update your password.",
      403: "Old password is incorrect.",
      404: "User account not found.",
      409: "New password cannot be the same as the old one.",
      500: "Couldn’t update password. Try again later.",
    },

    // Level Registration context
    levelRegistration: {
      400: "Invalid level selection. Please check and try again.",
      401: "You must be logged in to register a level.",
      403: "You are not eligible to register this level.",
      404: "Level not found.",
      409: "You have already registered for this level.",
      500: "Couldn’t complete level registration. Try again later.",
    },
  };

  const contextMessages = messages[context] || messages.general;

  return (
    contextMessages[status] ||
    messages.general[status] ||
    "Unexpected error occurred."
  );
}
