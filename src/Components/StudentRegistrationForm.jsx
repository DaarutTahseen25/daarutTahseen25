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
    formData,
    formErrors,
    setFormData,
    setFormErrors,
  } = useUIStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validate = () => {
    const errors = {};
    if (!formData.nin.trim()) errors.nin = "NIN is required.";
    if (!formData.agreed) errors.agreement = "You must agree to the terms.";
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.password.trim()) errors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    if (!file) errors.file = "Passport upload is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData, file);
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
          value={formData.nin}
          onChange={handleChange}
          placeholder="Enter your NIN"
          className={`${formErrors.nin ? "border-red-500" : "border-gray-300"}`}
        />
        {formErrors.nin && (
          <p className="text-red-500 text-sm">{formErrors.nin}</p>
        )}
        <p className="text-xs italic font-bricolage text-textmain/60 mb-4 mt-2">
          Your NIN is an 11-digit number issued by the National Identity
          Management Commission (NIMC). Please make sure it's correct and
          matches your registration details.
        </p>

        {/* Name */}
        <Input
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Eg. Abdulazeez Mohammad"
          className={`${
            formErrors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm">{formErrors.name}</p>
        )}
        <p className="text-sm font-bricolage italic text-textmain/60 mb-4 mt-2">
          First name&nbsp;&nbsp;&nbsp;&nbsp;middle name
          (Optional)&nbsp;&nbsp;&nbsp;&nbsp;Last name
        </p>

        {/* Email */}
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Eg. example@gmail.com"
          className={`${
            formErrors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}

        {/* Phone */}
        <Input
          label="Phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0812345678"
          className={`${
            formErrors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formErrors.phone && (
          <p className="text-red-500 text-sm">{formErrors.phone}</p>
        )}

        {/* Passport */}
        <div className="mb-4">
          <label className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4">
            Passport
          </label>
          <div
            className={`border rounded p-3 ${
              formErrors.file ? "border-red-500" : "border-gray-300"
            }`}
          >
            {file ? (
              <div className="inline-flex items-center gap-2 border border-accent rounded px-3 py-1 text-sm">
                <span className="text-gray-800 truncate max-w-[150px]">
                  {file.name}
                </span>
                <span className="text-gray-400 text-xs">
                  {(file.size / (1024 * 1024)).toFixed(1)}MB
                </span>
                <button
                  type="button"
                  onClick={clearFile}
                  className="text-gray-400 hover:text-red-500"
                >
                  <FiX className="text-sm" />
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
          {formErrors.file && (
            <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className={`w-full border rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-accent ${
                formErrors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70 font-semibold"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className={`w-full border rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-accent ${
                formErrors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70 font-semibold"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.confirmPassword}
            </p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="mb-4 mt-5">
          <div className="flex items-center space-x-2 text-sm font-bricolage text-textmain">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreed}
              onChange={(e) => setFormData("agreed", e.target.checked)}
              className={`
    w-4 h-4 rounded border
    ${formErrors.agreement ? "border-red-500" : "border-primary"}
    accent-primary
    focus:outline-none focus:ring-none focus:ring-offset-1 focus:ring-primary
  `}
            />

            <label
              htmlFor="agreement"
              className="cursor-pointer select-none ml-1"
            >
              I agree with the{" "}
              <span className="text-primary font-medium underline">
                Terms of Services
              </span>{" "}
              and{" "}
              <span className="text-primary font-medium underline">
                Privacy Policy
              </span>
            </label>
          </div>
          {formErrors.agreement && (
            <p className="text-red-500 text-sm mt-1">{formErrors.agreement}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-3">
          Create Account
        </Button>
        <p className="text-center text-sm text-textmain/80 mt-2">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
