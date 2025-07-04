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

    // OPTIONAL: check size if uploaded
    if (file && file.size > 2 * 1024 * 1024) {
      errors.file = "File must be less than 2MB.";
    }

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

        <Input
          label="NIN"
          name="nin"
          value={signupForm.nin}
          onChange={handleChange}
          placeholder="Enter your NIN"
        />
        {signupErrors.nin && (
          <p className="text-red-500 text-sm">{signupErrors.nin}</p>
        )}

        <Input
          label="Name"
          name="name"
          value={signupForm.name}
          onChange={handleChange}
          placeholder="Full name"
        />
        {signupErrors.name && (
          <p className="text-red-500 text-sm">{signupErrors.name}</p>
        )}

        <Input
          label="Email"
          name="email"
          value={signupForm.email}
          onChange={handleChange}
          placeholder="Email address"
        />
        {signupErrors.email && (
          <p className="text-red-500 text-sm">{signupErrors.email}</p>
        )}

        <Input
          label="Phone"
          name="phone"
          value={signupForm.phone}
          onChange={handleChange}
          placeholder="Phone number"
        />
        {signupErrors.phone && (
          <p className="text-red-500 text-sm">{signupErrors.phone}</p>
        )}

        {/* File Upload (Optional) */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-textmain mt-4">
            Passport <span className="text-xs text-gray-500">(Optional)</span>
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
                className="block w-full text-sm text-gray-500 file:py-1 file:px-3 file:rounded-md file:bg-accent/10 hover:file:bg-accent/20"
              />
            )}
          </div>
          {signupErrors.file && (
            <p className="text-red-500 text-sm mt-1">{signupErrors.file}</p>
          )}
        </div>

        {/* Passwords */}
        {["password", "confirmPassword"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-1 font-medium text-textmain mt-4">
              {field === "password" ? "Password" : "Confirm Password"}
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name={field}
                value={signupForm[field]}
                onChange={handleChange}
                placeholder={
                  field === "password" ? "Enter password" : "Confirm password"
                }
                className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
                  signupErrors[field] ? "border-red-500" : "border-gray-300"
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
            {signupErrors[field] && (
              <p className="text-red-500 text-sm mt-1">{signupErrors[field]}</p>
            )}
          </div>
        ))}

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
              I agree to the{" "}
              <span className="text-primary underline">Terms</span> &{" "}
              <span className="text-primary underline">Privacy</span>
            </label>
          </div>
          {signupErrors.agreement && (
            <p className="text-red-500 text-sm mt-1">
              {signupErrors.agreement}
            </p>
          )}
        </div>

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
