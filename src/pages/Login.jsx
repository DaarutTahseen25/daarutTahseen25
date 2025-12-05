import React, { useState } from "react";
import { Link } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../Components/Button";
import Input from "../Components/input";
import { useLogin } from "../hooks/useLogin";
import { usePageTitle } from "../hooks/usePageTitle";

const Login = () => {
  usePageTitle("Login");
  const { login, isSubmitting, submitMessage } = useLogin();
  const [loginForm, setLoginFormState] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const setLoginForm = (name, value) => {
    setLoginFormState((prev) => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    const email = loginForm.email.trim();

    if (!email) {
      errors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      !/^\d{11}$/.test(email)
    ) {
      errors.email = "Enter a valid email ";
    }

    if (!loginForm.password.trim()) {
      errors.password = "Password is required.";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await login(loginForm.email, loginForm.password);
  };

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-bglight">
      {/* LEFT SECTION */}
      <div className="bg-secondary hidden lg:flex lg:h-screen flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-multiply"></div>
        <div className="text-center w-[80%] max-w-lg mx-auto flex flex-col justify-center items-center gap-6 px-8 py-10 lg:p-12 z-10">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 lg:w-40 h-auto object-contain mb-4"
          />
          <h1 className="text-accent text-4xl lg:text-5xl font-medium font-clash leading-tight">
            Welcome Back to <br /> DaarutTahseen
          </h1>
          <p className="font-bricolage text-lg lg:text-xl text-textmain/80 font-normal leading-relaxed">
            Sign in to resume your Qur'anic learning journey as part of a
            devoted learning community
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full min-h-screen flex flex-col justify-center bg-white lg:bg-transparent">
        <div className="w-full max-w-md mx-auto p-6 sm:p-10 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-accent mb-3 font-clash">
              Welcome Back
            </h2>
            <p className="text-textmuted font-bricolage text-lg">
              Login to your Account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {submitMessage && (
              <div
                className={`p-4 rounded-lg text-center font-medium text-sm backdrop-blur-sm border transition-all duration-300 ${
                  submitMessage.includes("successful")
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <div className="space-y-2">
              <Input
                label="Email Address"
                name="email"
                type="text"
                value={loginForm.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  loginErrors.email
                    ? "border-red-400 bg-red-50/10"
                    : "border-gray-200 hover:border-primary/50"
                }`}
                disabled={isSubmitting}
              />
              {loginErrors.email && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {loginErrors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block mb-1.5 font-semibold text-textmain font-clash text-sm uppercase tracking-wide">
                Password
              </label>
              <div className="relative group">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginForm.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary pr-12 ${
                    loginErrors.password
                      ? "border-red-400 bg-red-50/10"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {loginErrors.password && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {loginErrors.password}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-primary hover:text-primary/80 font-medium text-sm hover:underline transition-all duration-200"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className={`w-full py-3.5 rounded-lg font-semibold text-white bg-primary transition-all duration-300 transform active:scale-[0.98] shadow-md hover:shadow-lg hover:bg-buttonhover ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:-translate-y-0.5 hover:shadow-primary/30"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Login
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
