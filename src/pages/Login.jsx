import React from "react";
import { Link, NavLink, useNavigate } from "react-router"; // ✅ Corrected import
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../Components/Button";
import Input from "../Components/input";
import useUIStore from "../store/useUIStore";
import { user } from "../App";

const Login = () => {
  const navigate = useNavigate();
  // Zustand state for login
  const {
    showPassword,
    setShowPassword,
    loginForm,
    loginErrors,
    setLoginForm,
    setLoginErrors,
  } = useUIStore();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(name, value);
  };

  // Validate form before submit
  const validate = () => {
    const errors = {};
    if (!loginForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
      errors.email = "Invalid email format.";
    }
    if (!loginForm.password.trim()) {
      errors.password = "Password is required.";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", loginForm);
      // Optional: clear/reset login form here

      user.isAuthenticated = !user.isAuthenticated;
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2">
      {/* ---------- LEFT SECTION (Welcome Message) ---------- */}
      <div className="bg-secondary lg:h-screen flex items-center justify-center">
        <div className="text-center w-[89%] mx-auto flex flex-col justify-center items-center gap-4 px-8 py-10 lg:p-12">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[8rem] lg:w-[10rem] h-[4rem] lg:h-[6rem] cursor-pointer"
          />
          <p className="text-accent text-[30px] sm:text-[40px] font-medium leading-[100%] font-clash text-center">
            Welcome Back to <br /> DaarutTahseen
          </p>
          <p className="font-bricolade text-[20px] font-[400px] text-center">
            Sign in to resume your Qur’anic learning journey as part of a
            devoted learning community
          </p>
        </div>
      </div>

      {/* ---------- RIGHT SECTION (Login Form) ---------- */}
      <div className="w-full md:w-[90%] xl:w-[80%] mx-auto lg:mt-[-52px] p-6 sm:p-10 md:p-12 lg:p-20 min-h-[50vh] lg:min-h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-medium md:text-3xl text-center text-accent mb-4 font-clash">
          Login to your Student Account
        </h2>

        <form
          className="space-y-4 max-w-md mx-auto w-full"
          onSubmit={handleSubmit}
        >
          {/* -------- Email Field -------- */}
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              value={loginForm.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className={`${
                loginErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {loginErrors.email && (
              <p className="text-red-500 text-sm">{loginErrors.email}</p>
            )}
          </div>

          {/* -------- Password Field -------- */}
          <div className="mb-4">
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
              />
              <button
                type="button"
                onClick={setShowPassword}
                aria-label="Toggle password visibility"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70 font-semibold"
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

          {/* -------- Forgot Password -------- */}
          <div className="text-sm text-right">
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* -------- Submit Button -------- */}
          <Button type="submit" className="w-full mt-3 hover:bg-buttonhover">
            Login
          </Button>
        </form>

        {/* -------- Sign Up Link -------- */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            className="text-primary hover:text-primary font-medium"
            to="/create/select"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
