import React from "react";
import Button from "./Button";
import { Link } from "react-router";
import Input from "./input";
import { Eye as FiEye, EyeOff as FiEyeOff, X as FiX } from "lucide-react";
<<<<<<< HEAD
=======

>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
import useUIStore from "../store/useUIStore";

const StudentRegistrationForm = () => {
  const {
    showPassword,
    setShowPassword,
    file,
    setFile,
    clearFile,
<<<<<<< HEAD
    signupForm,
    signupErrors,
    setSignupForm,
    setSignupErrors,
=======
    formData,
    formErrors,
    setFormData,
    setFormErrors,
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
  } = useUIStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    setSignupForm(name, value);
=======
    setFormData(name, value);
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validate = () => {
    const errors = {};
<<<<<<< HEAD
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
=======
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
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
<<<<<<< HEAD
      console.log("Form submitted:", signupForm, file);
=======
      console.log("Form submitted:", formData, file);
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
        </p>

        {/* Name */}
        <Input
          label="Name"
          name="name"
          type="text"
<<<<<<< HEAD
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
=======
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
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d

        {/* Email */}
        <Input
          label="Email"
          name="email"
          type="email"
<<<<<<< HEAD
          value={signupForm.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className={`${
            signupErrors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {signupErrors.email && (
          <p className="text-red-500 text-sm">{signupErrors.email}</p>
=======
          value={formData.email}
          onChange={handleChange}
          placeholder="Eg. example@gmail.com"
          className={`${
            formErrors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
        )}

        {/* Phone */}
        <Input
          label="Phone"
          name="phone"
          type="text"
<<<<<<< HEAD
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
=======
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
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            Passport
          </label>
          <div
            className={`border rounded p-3 ${
<<<<<<< HEAD
              signupErrors.file ? "border-red-500" : "border-gray-300"
            }`}
          >
            {file ? (
              <div className="flex items-center gap-2">
                <span className="truncate max-w-[150px]">{file.name}</span>
                <span className="text-xs text-gray-400">
=======
              formErrors.file ? "border-red-500" : "border-gray-300"
            }`}
          >
            {file ? (
              <div className="inline-flex items-center gap-2 border border-accent rounded px-3 py-1 text-sm">
                <span className="text-gray-800 truncate max-w-[150px]">
                  {file.name}
                </span>
                <span className="text-gray-400 text-xs">
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
                  {(file.size / (1024 * 1024)).toFixed(1)}MB
                </span>
                <button
                  type="button"
                  onClick={clearFile}
<<<<<<< HEAD
                  className="text-gray-500 hover:text-red-600"
                >
                  <FiX className="w-4 h-4" />
=======
                  className="text-gray-400 hover:text-red-500"
                >
                  <FiX className="text-sm" />
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
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
<<<<<<< HEAD
          {signupErrors.file && (
            <p className="text-red-500 text-sm mt-1">{signupErrors.file}</p>
=======
          {formErrors.file && (
            <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
<<<<<<< HEAD
          <label className="block mb-1 font-medium text-textmain mt-4">
=======
          <label className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4">
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
<<<<<<< HEAD
              value={signupForm.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
                signupErrors.password ? "border-red-500" : "border-gray-300"
=======
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className={`w-full border rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-accent ${
                formErrors.password ? "border-red-500" : "border-gray-300"
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
<<<<<<< HEAD
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
=======
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70 font-semibold"
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
<<<<<<< HEAD
          {signupErrors.password && (
            <p className="text-red-500 text-sm mt-1">{signupErrors.password}</p>
=======
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
<<<<<<< HEAD
          <label className="block mb-1 font-medium text-textmain mt-4">
=======
          <label className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4">
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
<<<<<<< HEAD
              value={signupForm.confirmPassword}
              onChange={handleChange}
              placeholder="Confrim your password"
              className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
                signupErrors.confirmPassword
=======
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className={`w-full border rounded px-4 py-2 pr-14 focus:outline-none focus:ring-2 focus:ring-accent ${
                formErrors.confirmPassword
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={setShowPassword}
<<<<<<< HEAD
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
=======
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-textmain/70 font-semibold"
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
<<<<<<< HEAD
          {signupErrors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {signupErrors.confirmPassword}
=======
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.confirmPassword}
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
            </p>
          )}
        </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
        </p>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
