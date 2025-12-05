import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router";
import Input from "./input";
import {
  Eye as FiEye,
  EyeOff as FiEyeOff,
  X as FiX,
  Upload,
  Check,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import useRegister from "../hooks/useRegister";
import { validate } from "../utils/helper";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const MultiStepStudentForm = () => {
  const role = "student";
  const { register, isSubmitting, submitMessage } = useRegister();

  const [currentStep, setCurrentStep] = useState(1);
  const [signupForm, setSignupFormState] = useState({
    NIN: "",
    full_name: "",
    email: "",
    gender: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    agreed: false,
  });

  const [signupErrors, setSignupErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);

  const setSignupForm = (name, value) => {
    setSignupFormState((prev) => ({ ...prev, [name]: value }));
    if (signupErrors[name]) {
      setSignupErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const clearFile = () => setFile(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (signupErrors.file) {
      setSignupErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(name, value);
  };

  const validateStep = (step) => {
    const errors = {};
    let isValid = true;

    if (step === 1) {
      if (!signupForm.NIN) errors.NIN = "NIN is required";
      if (!signupForm.full_name) errors.full_name = "Full Name is required";
      if (!signupForm.gender) errors.gender = "Gender is required";
    } else if (step === 2) {
      if (!signupForm.email) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(signupForm.email))
        errors.email = "Email is invalid";
      if (!signupForm.phone_number)
        errors.phone_number = "Phone Number is required";
    } else if (step === 3) {
      // Profile picture is optional, so no validation needed strictly unless required
    } else if (step === 4) {
      if (!signupForm.password) errors.password = "Password is required";
      if (signupForm.password !== signupForm.confirm_password)
        errors.confirm_password = "Passwords do not match";
      if (!signupForm.agreed) errors.agreement = "You must agree to the terms";
    }

    if (Object.keys(errors).length > 0) {
      setSignupErrors(errors);
      isValid = false;
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    // Final full validation just in case
    if (!validate(signupForm, file, setSignupErrors)) return;

    try {
      let imageUrl = null;
      if (file) {
        imageUrl = await uploadToCloudinary(file, `${role}s`);
      }

      const payload = {
        ...signupForm,
        image: imageUrl,
      };

      await register(payload, role);
    } catch (error) {
      // Error handled in hook usually, or we can set error state here
      console.error(error);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center items-center mb-8 space-x-2">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              step === currentStep
                ? "bg-primary text-white ring-4 ring-primary/10"
                : step < currentStep
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {step < currentStep ? <Check className="w-4 h-4" /> : step}
          </div>
          {step < 4 && (
            <div
              className={`w-8 h-0.5 mx-1 transition-all duration-300 ${
                step < currentStep ? "bg-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-xl p-8 mx-auto bg-white rounded-2xl border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold capitalize text-accent mb-2 font-clash">
          Student Application
        </h2>
        <p className="text-gray-600 font-bricolade">
          Step {currentStep} of 4:{" "}
          {currentStep === 1
            ? "Personal Information"
            : currentStep === 2
            ? "Contact Information"
            : currentStep === 3
            ? "Profile Picture"
            : "Security & Review"}
        </p>
      </div>

      {renderStepIndicator()}

      {submitMessage && (
        <div
          className={`p-4 mb-6 rounded-xl text-center font-medium backdrop-blur-sm border transition-all duration-300 ${
            submitMessage.includes("success")
              ? "bg-emerald-50/80 text-emerald-700 border-emerald-200 shadow-emerald-100/50 shadow-lg"
              : "bg-red-50/80 text-red-700 border-red-200 shadow-red-100/50 shadow-lg"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  label="NIN"
                  name="NIN"
                  value={signupForm.NIN}
                  onChange={handleChange}
                  placeholder="Enter your NIN"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    signupErrors.NIN
                      ? "border-red-400 bg-red-50"
                      : "border-gray-100"
                  }`}
                />
                {signupErrors.NIN && (
                  <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {signupErrors.NIN}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  label="Full Name"
                  name="full_name"
                  value={signupForm.full_name}
                  onChange={handleChange}
                  placeholder="e.g., Ustadh Bello"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    signupErrors.full_name
                      ? "border-red-400 bg-red-50"
                      : "border-gray-100"
                  }`}
                />
                {signupErrors.full_name && (
                  <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {signupErrors.full_name}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-textmain font-clash text-sm uppercase tracking-wide">
                Gender
              </label>
              <select
                name="gender"
                value={signupForm.gender}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  signupErrors.gender
                    ? "border-red-400 bg-red-50"
                    : "border-gray-100"
                }`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {signupErrors.gender && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {signupErrors.gender}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  label="Email Address"
                  name="email"
                  value={signupForm.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    signupErrors.email
                      ? "border-red-400 bg-red-50"
                      : "border-gray-100"
                  }`}
                />
                {signupErrors.email && (
                  <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {signupErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  label="Phone Number"
                  name="phone_number"
                  value={signupForm.phone_number}
                  onChange={handleChange}
                  placeholder="08123456789"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                    signupErrors.phone_number
                      ? "border-red-400 bg-red-50"
                      : "border-gray-100"
                  }`}
                />
                {signupErrors.phone_number && (
                  <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {signupErrors.phone_number}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Profile Picture */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div
              className={`border-2 border-dashed rounded-xl p-6 transition-all duration-200 hover:border-primary/50 ${
                signupErrors.file
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-300"
              }`}
            >
              {file ? (
                <div className="flex items-center justify-between bg-white/50 rounded-lg p-4 border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm truncate max-w-[150px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(1)}MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={clearFile}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Upload your profile picture
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    PNG, JPG up to 10MB
                  </p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:transition-colors file:cursor-pointer cursor-pointer"
                    accept="image/*"
                  />
                </div>
              )}
            </div>
            {signupErrors.file && (
              <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {signupErrors.file}
              </p>
            )}
          </div>
        )}

        {/* Step 4: Security Information */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-4">
              {["password", "confirm_password"].map((field) => (
                <div className="space-y-2" key={field}>
                  <label className="block font-semibold text-textmain font-clash text-sm uppercase tracking-wide">
                    {field === "password" ? "Password" : "Confirm Password"}
                  </label>
                  <div className="relative group">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name={field}
                      value={signupForm[field]}
                      onChange={handleChange}
                      placeholder={
                        field === "password"
                          ? "Enter password"
                          : "Confirm password"
                      }
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/20  focus:border-primary ${
                        signupErrors[field]
                          ? "border-red-400 bg-red-50"
                          : "border-gray-100"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-gray-400 hover:text-primary transition-colors duration-200 p-1 rounded-full cursor-pointer hover:bg-primary/10"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {signupErrors[field] && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {signupErrors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={signupForm.agreed}
                    onChange={(e) => setSignupForm("agreed", e.target.checked)}
                    className={`w-4 h-4 text-primary bg-white border-2 rounded focus:ring-primary/20 focus:ring-2 transition-colors ${
                      signupErrors.agreement
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                <label
                  htmlFor="agreement"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  I agree to the{" "}
                  <Link
                    to="/our-terms"
                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/our-policy"
                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {signupErrors.agreement && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {signupErrors.agreement}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={handleBack}
              className="flex-1 py-3 rounded-lg hover:bg-buttonhover"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back
              </span>
            </Button>
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 rounded-lg"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center gap-2">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              className={`flex-1 rounded-lg py-3 font-semibold ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed scale-100"
                  : "hover:bg-buttonhover"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Submit
                  <Check className="w-4 h-4" />
                </span>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepStudentForm;
