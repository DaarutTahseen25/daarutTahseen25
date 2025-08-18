// import React, { useState } from "react";
// import Button from "./Button";
// import { Link } from "react-router";
// import Input from "./input";
// import { Eye as FiEye, EyeOff as FiEyeOff, X as FiX } from "lucide-react";
// import useStudentSignUp from "../hooks/useRegister";
// import useRegister from "../hooks/useRegister";
// import { validate } from "../utils/helper";
// import { uploadToCloudinary } from "../utils/uploadToCloudinary";

// const TutorRegistrationForm = ({ role }) => {
//   const { register, isSubmitting, submitMessage } = useRegister();
//   const [signupForm, setSignupFormState] = useState({
//     NIN: "",
//     full_name: "",
//     email: "",
//     gender: "",
//     phone_number: "",
//     password: "",
//     confirm_password: "",
//     agreed: false,
//   });

//   const [signupErrors, setSignupErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [file, setFile] = useState(null);

//   const setSignupForm = (name, value) => {
//     setSignupFormState((prev) => ({ ...prev, [name]: value }));
//     if (signupErrors[name]) {
//       setSignupErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const clearFile = () => setFile(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     if (signupErrors.file) {
//       setSignupErrors((prev) => ({ ...prev, file: "" }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignupForm(name, value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate(signupForm, file, setSignupErrors)) return;

//     try {
//       let imageUrl = null;
//       if (file) {
//         imageUrl = await uploadToCloudinary(file, `${role}s`);
//       }

//       const payload = {
//         ...signupForm,
//         image: imageUrl,
//       };

//       await register(payload, role);
//     } catch (error) {
//       throw new Error(error?.message);
//     }
//   };

//   return (
//     <div className='w-full max-w-2xl p-6 mx-auto'>
//       <form onSubmit={handleSubmit}>
//         <h2 className='text-2xl font-medium md:text-3xl text-center text-accent mb-4 font-clash'>
//           Create {role} Account
//         </h2>

//         {submitMessage && (
//           <div
//             className={`p-3 mb-4 rounded-lg text-center font-medium ${
//               submitMessage.includes("success")
//                 ? "bg-green-100 text-green-700 border border-green-300"
//                 : "bg-red-100 text-red-700 border border-red-300"
//             }`}>
//             {submitMessage}
//           </div>
//         )}

//         {/* NIN */}

//         <Input
//           label='NIN'
//           name='NIN'
//           value={signupForm.NIN}
//           onChange={handleChange}
//           placeholder='Enter your NIN'
//           disabled={isSubmitting}
//         />
//         {signupErrors.NIN && (
//           <p className='text-red-500 text-sm'>{signupErrors.NIN}</p>
//         )}

//         {/* Full Name */}
//         <Input
//           label='Full Name'
//           name='full_name'
//           value={signupForm.full_name}
//           onChange={handleChange}
//           placeholder='e.g., Ustadh Bello'
//           disabled={isSubmitting}
//         />
//         {signupErrors.full_name && (
//           <p className='text-red-500 text-sm'>{signupErrors.full_name}</p>
//         )}

//         {/* Gender */}
//         <div className='mb-4 mt-4'>
//           <label className='block mb-1 font-medium text-textmain'>Gender</label>
//           <select
//             name='gender'
//             value={signupForm.gender}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className='w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-accent'>
//             <option value=''>Select gender</option>
//             <option value='male'>Male</option>
//             <option value='female'>Female</option>
//           </select>
//           {signupErrors.gender && (
//             <p className='text-red-500 text-sm mt-1'>{signupErrors.gender}</p>
//           )}
//         </div>

//         {/* Email */}
//         <Input
//           label='Email'
//           name='email'
//           value={signupForm.email}
//           onChange={handleChange}
//           placeholder='example@gmail.com'
//           disabled={isSubmitting}
//         />
//         {signupErrors.email && (
//           <p className='text-red-500 text-sm'>{signupErrors.email}</p>
//         )}

//         {/* Phone Number */}
//         <Input
//           label='Phone Number'
//           name='phone_number'
//           value={signupForm.phone_number}
//           onChange={handleChange}
//           placeholder='08123456789'
//           disabled={isSubmitting}
//         />
//         {signupErrors.phone_number && (
//           <p className='text-red-500 text-sm'>{signupErrors.phone_number}</p>
//         )}

//         {/* Passport */}
//         <div className='mb-4'>
//           <label className='block mb-1 font-medium text-textmain mt-4'>
//             Passport <span className='text-xs text-gray-500'>(Optional)</span>
//           </label>
//           <div
//             className={`border rounded p-3 ${
//               signupErrors.file ? "border-red-500" : "border-gray-300"
//             }`}>
//             {file ? (
//               <div className='flex items-center gap-2'>
//                 <span className='truncate max-w-[150px]'>{file.name}</span>
//                 <span className='text-xs text-gray-400'>
//                   {(file.size / (1024 * 1024)).toFixed(1)}MB
//                 </span>
//                 <button
//                   type='button'
//                   onClick={clearFile}
//                   className='text-gray-500 hover:text-red-600'>
//                   <FiX className='w-4 h-4' />
//                 </button>
//               </div>
//             ) : (
//               <input
//                 type='file'
//                 onChange={handleFileChange}
//                 disabled={isSubmitting}
//                 className='block w-full text-sm text-gray-500 file:py-1 file:px-3 file:rounded-md file:bg-accent/10 hover:file:bg-accent/20'
//               />
//             )}
//           </div>
//           {signupErrors.file && (
//             <p className='text-red-500 text-sm mt-1'>{signupErrors.file}</p>
//           )}
//         </div>

//         {/* Password & Confirm Password */}
//         {["password", "confirm_password"].map((field) => (
//           <div className='mb-4' key={field}>
//             <label className='block mb-1 font-medium text-textmain mt-4'>
//               {field === "password" ? "Password" : "Confirm Password"}
//             </label>
//             <div className='relative'>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 name={field}
//                 value={signupForm[field]}
//                 onChange={handleChange}
//                 placeholder={
//                   field === "password" ? "Enter password" : "Confirm password"
//                 }
//                 disabled={isSubmitting}
//                 className={`w-full border rounded px-4 py-2 pr-14 focus:ring-2 focus:ring-accent ${
//                   signupErrors[field] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <button
//                 type='button'
//                 onClick={setShowPassword}
//                 className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl'>
//                 {showPassword ? <FiEyeOff /> : <FiEye />}
//               </button>
//             </div>
//             {signupErrors[field] && (
//               <p className='text-red-500 text-sm mt-1'>{signupErrors[field]}</p>
//             )}
//           </div>
//         ))}

//         {/* Agreement */}
//         <div className='mb-4 mt-5'>
//           <div className='flex items-center text-sm'>
//             <input
//               type='checkbox'
//               id='agreement'
//               checked={signupForm.agreed}
//               onChange={(e) => setSignupForm("agreed", e.target.checked)}
//               className={`w-4 h-4 accent-primary ${
//                 signupErrors.agreement ? "border-red-500" : "border-primary"
//               }`}
//               disabled={isSubmitting}
//             />
//             <label htmlFor='agreement' className='ml-2 cursor-pointer'>
//               I agree to the{" "}
//               <span className='text-primary underline'>Terms of Service</span>{" "}
//               and <span className='text-primary underline'>Privacy Policy</span>
//             </label>
//           </div>
//           {signupErrors.agreement && (
//             <p className='text-red-500 text-sm mt-1'>
//               {signupErrors.agreement}
//             </p>
//           )}
//         </div>

//         {/* Submit */}
//         <Button
//           type='submit'
//           className={`w-full mt-3 ${
//             isSubmitting
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-buttonhover"
//           }`}
//           disabled={isSubmitting}>
//           {isSubmitting ? (
//             <span className='flex items-center justify-center gap-2'>
//               <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
//                 <circle
//                   className='opacity-25'
//                   cx='12'
//                   cy='12'
//                   r='10'
//                   stroke='currentColor'
//                   strokeWidth='4'
//                   fill='none'
//                 />
//                 <path
//                   className='opacity-75'
//                   fill='currentColor'
//                   d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//                 />
//               </svg>
//               Creating...
//             </span>
//           ) : (
//             "Create Account"
//           )}
//         </Button>

//         <p className='text-center text-sm text-textmain/80 mt-2'>
//           Already have an account?{" "}
//           <Link className='text-primary font-medium underline' to='/login'>
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default TutorRegistrationForm;

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
} from "lucide-react";
import useStudentSignUp from "../hooks/useRegister";
import useRegister from "../hooks/useRegister";
import { validate } from "../utils/helper";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const TutorRegistrationForm = ({ role }) => {
  const { register, isSubmitting, submitMessage } = useRegister();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      throw new Error(error?.message);
    }
  };

  return (
    <div className='w-full max-w-3xl p-6 mx-auto bg-white/80 backdrop-blur-sm rounded-2xl'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold capitalize text-accent mb-2 font-clash'>
            Create {role} Account
          </h2>
          <p className='text-gray-600 font-bricolade'>
            Join our community of dedicated{" "}
            {role === "teacher" ? "educators" : "learners"}
          </p>
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-xl text-center font-medium backdrop-blur-sm border transition-all duration-300 ${
              submitMessage.includes("success")
                ? "bg-emerald-50/80 text-emerald-700 border-emerald-200 shadow-emerald-100/50 shadow-lg"
                : "bg-red-50/80 text-red-700 border-red-200 shadow-red-100/50 shadow-lg"
            }`}>
            {submitMessage}
          </div>
        )}

        {/* Personal Information Section */}
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-accent font-clash flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            Personal Information
          </h3>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* NIN */}
            <div className='space-y-2'>
              <Input
                label='NIN'
                name='NIN'
                value={signupForm.NIN}
                onChange={handleChange}
                placeholder='Enter your NIN'
                disabled={isSubmitting}
                className={`transition-all duration-200 bg-white/70 backdrop-blur-sm border-2 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                  signupErrors.NIN
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200"
                }`}
              />
              {signupErrors.NIN && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {signupErrors.NIN}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div className='space-y-2'>
              <Input
                label='Full Name'
                name='full_name'
                value={signupForm.full_name}
                onChange={handleChange}
                placeholder='e.g., Ustadh Bello'
                disabled={isSubmitting}
                className={`transition-all duration-200 bg-white/70 backdrop-blur-sm border-2 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                  signupErrors.full_name
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200"
                }`}
              />
              {signupErrors.full_name && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {signupErrors.full_name}
                </p>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className='space-y-2'>
            <label className='block font-semibold text-textmain font-clash text-sm uppercase tracking-wide'>
              Gender
            </label>
            <select
              name='gender'
              value={signupForm.gender}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border-2  px-4 py-3 bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary ${
                signupErrors.gender
                  ? "border-red-400 bg-red-50/50"
                  : "border-gray-200"
              }`}>
              <option value=''>Select gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            {signupErrors.gender && (
              <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                {signupErrors.gender}
              </p>
            )}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-accent font-clash flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            Contact Information
          </h3>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Email */}
            <div className='space-y-2'>
              <Input
                label='Email Address'
                name='email'
                value={signupForm.email}
                onChange={handleChange}
                placeholder='example@gmail.com'
                disabled={isSubmitting}
                className={`transition-all duration-200 bg-white/70 backdrop-blur-sm border-2 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                  signupErrors.email
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200"
                }`}
              />
              {signupErrors.email && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {signupErrors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className='space-y-2'>
              <Input
                label='Phone Number'
                name='phone_number'
                value={signupForm.phone_number}
                onChange={handleChange}
                placeholder='08123456789'
                disabled={isSubmitting}
                className={`transition-all duration-200 bg-white/70 backdrop-blur-sm border-2 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                  signupErrors.phone_number
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200"
                }`}
              />
              {signupErrors.phone_number && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                  {signupErrors.phone_number}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-accent font-clash flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            Profile Picture
            <span className='text-xs text-gray-500 font-normal ml-2'>
              (Optional)
            </span>
          </h3>

          <div
            className={`border-2 border-dashed rounded-xl p-6 transition-all duration-200 hover:border-primary/50 ${
              signupErrors.file
                ? "border-red-400 bg-red-50/50"
                : "border-gray-300"
            }`}>
            {file ? (
              <div className='flex items-center justify-between bg-white/50 rounded-lg p-4 border'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <Check className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <p className='font-medium text-sm truncate max-w-[150px]'>
                      {file.name}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {(file.size / (1024 * 1024)).toFixed(1)}MB
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={clearFile}
                  className='text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg'>
                  <FiX className='w-4 h-4' />
                </button>
              </div>
            ) : (
              <div className='text-center'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <Upload className='w-6 h-6 text-primary' />
                </div>
                <p className='text-sm font-medium text-gray-700 mb-2'>
                  Upload your profile picture
                </p>
                <p className='text-xs text-gray-500 mb-4'>
                  PNG, JPG up to 10MB
                </p>
                <input
                  type='file'
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:transition-colors file:cursor-pointer cursor-pointer'
                  accept='image/*'
                />
              </div>
            )}
          </div>
          {signupErrors.file && (
            <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
              <span className='w-1 h-1 bg-red-500 rounded-full'></span>
              {signupErrors.file}
            </p>
          )}
        </div>

        {/* Security Section */}
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-accent font-clash flex items-center gap-2'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            Security Information
          </h3>

          <div className='grid md:grid-cols-2 gap-4'>
            {["password", "confirm_password"].map((field) => (
              <div className='space-y-2' key={field}>
                <label className='block font-semibold text-textmain font-clash text-sm uppercase tracking-wide'>
                  {field === "password" ? "Password" : "Confirm Password"}
                </label>
                <div className='relative group'>
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
                    className={`w-full border-2  px-4 py-3 pr-14 bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary ${
                      signupErrors[field]
                        ? "border-red-400 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-gray-400 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-primary/10'>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {signupErrors[field] && (
                  <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                    <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                    {signupErrors[field]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agreement Section */}
        <div className='bg-gray-50/50 rounded-xl p-6 border border-gray-100'>
          <div className='flex items-start gap-3'>
            <div className='flex items-center h-6'>
              <input
                type='checkbox'
                id='agreement'
                checked={signupForm.agreed}
                onChange={(e) => setSignupForm("agreed", e.target.checked)}
                className={`w-4 h-4 text-primary bg-white border-2 rounded focus:ring-primary/20 focus:ring-2 transition-colors ${
                  signupErrors.agreement ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
            </div>
            <label
              htmlFor='agreement'
              className='text-sm leading-relaxed cursor-pointer'>
              I agree to the{" "}
              <Link
                to='/our-terms'
                className='text-primary hover:text-primary/80 font-medium hover:underline'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to='/our-policy'
                className='text-primary hover:text-primary/80 font-medium hover:underline'>
                Privacy Policy
              </Link>
            </label>
          </div>
          {signupErrors.agreement && (
            <p className='text-red-500 text-sm font-medium flex items-center gap-1 mt-2'>
              <span className='w-1 h-1 bg-red-500 rounded-full'></span>
              {signupErrors.agreement}
            </p>
          )}
        </div>

        {/* Submit Button */}
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
              Creating Account...
            </span>
          ) : (
            <span className='flex items-center justify-center gap-2'>
              Create Account
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
            </span>
          )}
        </Button>

        {/* Login Link */}
        <div className='text-center'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-4 bg-white text-gray-500 font-medium'>
                Already have an account?
              </span>
            </div>
          </div>
          <Link
            to='/login'
            className='mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-200 hover:gap-3 group'>
            Sign In Instead
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
      </form>
    </div>
  );
};

export default TutorRegistrationForm;
