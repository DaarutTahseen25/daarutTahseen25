import React from "react";
import Button from "./Button";
import { Link } from "react-router";
import Input from "./input";
import { Eye as FiEye, EyeOff as FiEyeOff, X as FiX } from "lucide-react";
import useUIStore from "../store/useUIStore";

const StudentRegistrationForm = () => {
  const {
    showPassword,
    setShowPassword,
    file,
    setFile,
    clearFile,
    signupForm,
    signupErrors,
    setSignupForm,
    setSignupErrors,
  } = useUIStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(name, value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validate = () => {
    const errors = {};
    if (!signupForm.nin.trim()) errors.nin = "NIN is required.";
    if (!signupForm.agreed) errors.agreement = "You must agree to the terms.";
    if (!signupForm.name.trim()) errors.name = "Name is required.";
    if (!signupForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
      errors.email = "Invalid email format.";
    }
    if (!signupForm.phone.trim()) errors.phone = "Phone number is required.";
    if (!signupForm.password.trim()) errors.password = "Password is required.";
    if (signupForm.password !== signupForm.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    if (!file) errors.file = "Passport upload is required.";

    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", signupForm, file);
    }
  };

  return (
    <div className="w-full max-w-xl p-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-medium md:text-3xl text-center text-accent mb-4 font-clash">
          Create Student Account
        </h2>

        {/* NIN */}
        <Input
          label="NIN"
          name="nin"
          type="text"
          value={signupForm.nin}
          onChange={handleChange}
          placeholder="Enter your NIN"
          className={`${
            signupErrors.nin ? "border-red-500" : "border-gray-300"
          }`}
        />
        {signupErrors.nin && (
          <p className="text-red-500 text-sm">{signupErrors.nin}</p>
        )}

        <p className="text-xs italic text-textmain/60 mb-4 mt-2">
          Your NIN is an 11-digit number issued by NIMC.
        </p>

        {/* Name */}
        <Input
          label="Name"
          name="name"
          type="text"
          value={signupForm.name}
          onChange={handleChange}
          placeholder="Eg. Abdulazeez Mohammad"
          className={`${
            signupErrors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {signupErrors.name && (
          <p className="text-red-500 text-sm">{signupErrors.name}</p>
        )}

        {/* Email */}
        <Input
          label="Email"
          name="email"
          type="email"
          value={signupForm.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className={`${
            signupErrors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {signupErrors.email && (
          <p className="text-red-500 text-sm">{signupErrors.email}</p>
        )}

        {/* Phone */}
        <Input
          label="Phone"
          name="phone"
          type="text"
          value={signupForm.phone}
          onChange={handleChange}
          placeholder="0812345678"
          className={`${
            signupErrors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {signupErrors.phone && (
          <p className="text-red-500 text-sm">{signupErrors.phone}</p>
        )}

        {/* File Upload */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-textmain mt-4">
            Passport
          </label>
          <div
            className={`border rounded p-3 ${
              signupErrors.file ? "border-red-500" : "border-gray-300"
            }`}
          >
            {file ? (
              <div className="flex items-center gap-2">
                <span className="truncate max-w-[150px]">{file.name}</span>
                <span className="text-xs text-gray-400">
                  {(file.size / (1024 * 1024)).toFixed(1)}MB
                </span>
                <button
                  type="button"
                  onClick={clearFile}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-accent/10 file:text-accent hover:file:bg-accent/20"
              />
            )}
          </div>
          {signupErrors.file && (
            <p className="text-red-500 text-sm mt-1">{signupErrors.file}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-textmain mt-4">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={signupForm.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
                signupErrors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {signupErrors.password && (
            <p className="text-red-500 text-sm mt-1">{signupErrors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-textmain mt-4">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={signupForm.confirmPassword}
              onChange={handleChange}
              placeholder="Confrim your password"
              className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
                signupErrors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {signupErrors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {signupErrors.confirmPassword}
            </p>
          )}
        </div>

        {/* Agreement */}
        <div className="mb-4 mt-5">
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="agreement"
              checked={signupForm.agreed}
              onChange={(e) => setSignupForm("agreed", e.target.checked)}
              className={`w-4 h-4 accent-primary ${
                signupErrors.agreement ? "border-red-500" : "border-primary"
              }`}
            />
            <label htmlFor="agreement" className="ml-2 cursor-pointer">
              I agree with the{" "}
              <span className="text-primary underline">Terms of Service</span>{" "}
              and <span className="text-primary underline">Privacy Policy</span>
            </label>
          </div>
          {signupErrors.agreement && (
            <p className="text-red-500 text-sm mt-1">
              {signupErrors.agreement}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full mt-3">
          Create Account
        </Button>

        <p className="text-center text-sm text-textmain/80 mt-2">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
