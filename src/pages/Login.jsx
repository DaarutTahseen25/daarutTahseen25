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
    <div className='min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-gradient-to-br from-slate-50 to-blue-50/30'>
      {/* LEFT SECTION */}
      <div className='bg-secondary lg:h-screen flex items-center justify-center'>
        <div className='text-center w-[89%] mx-auto flex flex-col justify-center items-center gap-4 px-8 py-10 lg:p-12'>
          <img
            src='/logo.png'
            alt='logo'
            className='w-[8rem] lg:w-[10rem] h-[4rem] lg:h-[6rem] cursor-pointer'
          />
          <p className='text-accent text-[30px] sm:text-[40px] font-medium font-clash leading-[100%]'>
            Welcome Back to <br /> DaarutTahseen
          </p>
          <p className='font-bricolade text-[20px] font-[400px]'>
            Sign in to resume your Qur'anic learning journey as part of a
            devoted learning community
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='w-full flex flex-col justify-center bg-white/80 backdrop-blur-sm'>
        <div className='w-full md:w-[90%] xl:w-[80%] mx-auto p-6 sm:p-10 md:p-12 lg:p-20'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-accent mb-2 font-clash'>
              Welcome Back
            </h2>
            <p className='text-gray-600 font-bricolade'>
              Login to your Account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='space-y-6 max-w-md mx-auto w-full'>
            {submitMessage && (
              <div
                className={`p-4  text-center font-medium backdrop-blur-sm border transition-all duration-300 ${
                  submitMessage.includes("successful")
                    ? "bg-emerald-50/80 text-emerald-700 border-emerald-200 shadow-emerald-100/50 shadow-lg"
                    : "bg-red-50/80 text-red-700 border-red-200 shadow-red-100/50 shadow-lg"
                }`}>
                {submitMessage}
              </div>
            )}

            <div className='space-y-2'>
              <Input
                label='Email Address'
                name='email'
                type='text'
                value={loginForm.email}
                onChange={handleChange}
                placeholder='Enter your email address'
                className={`transition-all  duration-200 bg-white/70 backdrop-blur-sm border-2 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                  loginErrors.email
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200"
                }`}
                disabled={isSubmitting}
              />
              {loginErrors.email && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {loginErrors.email}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <label className='block mb-2 font-semibold text-textmain font-clash text-sm uppercase tracking-wide'>
                Password
              </label>
              <div className='relative group'>
                <Input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  value={loginForm.password}
                  onChange={handleChange}
                  placeholder='Enter your password'
                  className={`w-full border-2  px-4 py-3 pr-14 bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary ${
                    loginErrors.password
                      ? "border-red-400 bg-red-50/50"
                      : "border-gray-200"
                  }`}
                  disabled={isSubmitting}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-gray-400 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-primary/10'>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {loginErrors.password && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {loginErrors.password}
                </p>
              )}
            </div>

            <div className='text-sm text-right'>
              <Link
                to='/forgot-password'
                className='text-primary hover:text-primary/80 font-medium hover:underline transition-all duration-200 inline-flex items-center gap-1'>
                Forgot password?
                <svg
                  className='w-3 h-3 transition-transform group-hover:translate-x-0.5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>

            <Button
              type='submit'
              className={`w-full py-3  font-semibold transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-xl ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed scale-100"
                  : "hover:bg-buttonhover hover:-translate-y-0.5 hover:shadow-primary/25"
              }`}
              disabled={isSubmitting}>
              {isSubmitting ? (
                <span className='flex items-center justify-center gap-3'>
                  <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                      fill='none'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span className='flex items-center justify-center gap-2'>
                  Login
                  <svg
                    className='w-4 h-4 transition-transform group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                    />
                  </svg>
                </span>
              )}
            </Button>
          </form>

          <div className='mt-8 text-center'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-gray-500 font-medium'>
                  New to DaarutTahseen?
                </span>
              </div>
            </div>
            <Link
              to='/create/select'
              className='mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-200 hover:gap-3 group'>
              Create an Account
              <svg
                className='w-4 h-4 transition-transform group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
