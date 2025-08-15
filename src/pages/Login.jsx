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
    <div className="flex flex-col lg:grid lg:grid-cols-2">
      {/* LEFT SECTION */}
      <div className="bg-secondary lg:h-screen flex items-center justify-center">
        <div className="text-center w-[89%] mx-auto flex flex-col justify-center items-center gap-4 px-8 py-10 lg:p-12">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[8rem] lg:w-[10rem] h-[4rem] lg:h-[6rem] cursor-pointer"
          />
          <p className="text-accent text-[30px] sm:text-[40px] font-medium font-clash leading-[100%]">
            Welcome Back to <br /> DaarutTahseen
          </p>
          <p className="font-bricolade text-[20px] font-[400px]">
            Sign in to resume your Qur’anic learning journey as part of a
            devoted learning community
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-[90%] xl:w-[80%] mx-auto p-6 sm:p-10 md:p-12 lg:p-20 flex flex-col justify-center">
        <h2 className="text-2xl font-medium md:text-3xl text-center text-accent mb-4 font-clash">
          Login to your Student Account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto w-full"
        >
          {submitMessage && (
            <div
              className={`p-3 rounded-lg text-center font-medium ${
                submitMessage.includes("successful")
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <div>
            <Input
              label="Email "
              name="email"
              type="text"
              value={loginForm.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className={`${
                loginErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isSubmitting}
            />
            {loginErrors.email && (
              <p className="text-red-500 text-sm">{loginErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-textmain font-clash md:text-lg mt-4">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full border rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-accent ${
                  loginErrors.password ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {loginErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {loginErrors.password}
              </p>
            )}
          </div>

          <div className="text-sm text-right">
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className={`w-full ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-buttonhover"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
              "Login"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            to="/create/select"
            className="text-primary hover:text-primary font-medium"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
