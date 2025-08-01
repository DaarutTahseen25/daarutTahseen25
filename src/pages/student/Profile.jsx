import { useRef, useState } from "react";
import Button from "../../Components/Button";

import { Loader } from "../../Components/Loader";
import { useAuth } from "../../contexts/AuthContext";
// import Modal from "../Modal";

const Profile = () => {
  const { user } = useAuth();

  const profile = user?.user || user;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name);
  const [email, setEmail] = useState(profile?.email);
  const [matricNumber, setMatricNumber] = useState(
    profile?.matric_number || profile?.teacher_id
  );
  const [phoneNumber, setPhoneNumber] = useState(profile?.phone_number);
  const [gender, setGender] = useState(profile?.gender);
  const [profilePic, setProfilePic] = useState(profile?.image);
  const fileInputRef = useRef(null);

  // Handle file input change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfilePic(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handlePasswordChange() {
    // Logic to handle password change
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        // Simulate a password change
        setIsLoading(true);
        setTimeout(() => {
          setPassword("");
          setConfirmPassword("");
          setIsLoading(false);
          alert("Password changed successfully!");
        }, 2000);
      }
    } else {
      alert("Please fill in both fields.");
    }
  }

  function handleResetFields() {
    setFullName("");
    setEmail("");
    setMatricNumber("");
    setPhoneNumber("");
    setGender("Male");
  }

  function handleProfileUpdate(e) {
    e.preventDefault();
    if (!fullName || !email || !matricNumber || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }
    // Logic to handle profile update
    setIsLoading(true);
    setTimeout(() => {
      // Reset form or perform other actions as needed
      handleResetFields();
      setIsLoading(false);
      alert("Profile updated successfully!");
    }, 5000);
  }

  return (
    <section>
      <h1 className='font-clash font-medium text-3xl sm:text-[40px] text-center sm:text-left text-accent '>
        Profile
      </h1>
      <div className='mt-5 grid sm:grid-cols-[1fr_2fr] gap-5 '>
        <div className='flex flex-col gap-y-6 '>
          <div className='flex rounded-full mx-auto sm:mx-0 w-[14.25rem] h-[14.25rem] relative'>
            <img
              src={profilePic}
              alt='Profile'
              className='w-full h-full rounded-full object-cover'
            />
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              className='hidden'
              onChange={handleProfilePicChange}
            />
            <img
              src='/edit-profile.png'
              alt=''
              className='w-11 h-11 absolute bottom-3 right-5.5 cursor-pointer'
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
            />
          </div>
          <div className=''>
            <p className='text-xl sm:text-2xl font-medium font-clash'>
              Change Password
            </p>
            <hr className='my-2 border-t border-t-[#CCCCCC]' />
            <div className='bg-white mt-3 flex flex-col justify-between rounded-sm gap-y-5 py-5 px-4 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)]'>
              <div className='font-bricolage'>
                <label htmlFor='nPass' className='lg:text-xl block'>
                  New Password
                </label>
                <div
                  className={`flex items-center justify-between border py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg ${
                    passwordError ? "border-red-500" : "border-[#CCCCCC]"
                  }`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id='nPass'
                    value={password}
                    placeholder='Enter new password'
                    className='h-full focus:outline-0 text-sm lg:text-base w-full'
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value.length < 8) {
                        setPasswordError(
                          "Password must be at least 8 characters"
                        );
                      } else {
                        setPasswordError("");
                      }
                    }}
                    required
                  />
                  <img
                    src='/eye-icon.png'
                    alt=''
                    className='w-5.5 h-3 lg:w-[1.80875rem] lg:h-[0.84125rem] cursor-pointer '
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                {passwordError && (
                  <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
                )}
              </div>
              <div className='font-bricolage'>
                <label htmlFor='cPass' className='lg:text-xl block'>
                  Confirm Password
                </label>
                <div
                  className={`flex items-center justify-between border py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg ${
                    confirmPasswordError ? "border-red-500" : "border-[#CCCCCC]"
                  }`}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id='cPass'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    className={`h-full focus:outline-0 text-sm lg:text-base w-full `}
                    onChange={(e) => {
                      const value = e.target.value;
                      setConfirmPassword(value);
                      if (value.length < 8) {
                        setConfirmPasswordError(
                          "Password must be at least 8 characters"
                        );
                      } else if (value !== password) {
                        setConfirmPasswordError("Passwords do not match");
                      } else {
                        setConfirmPasswordError("");
                      }
                    }}
                    required
                  />
                  <img
                    src='/eye-icon.png'
                    alt=''
                    className='w-5.5 h-3 lg:w-[1.80875rem] lg:h-[0.84125rem] cursor-pointer '
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
                {confirmPasswordError && (
                  <p className='text-red-500 text-sm mt-1'>
                    {confirmPasswordError}
                  </p>
                )}
              </div>

              <Button
                variant='primary'
                size='lg'
                className=' rounded-[10px] mt-2 lg:mt-4 text-sm lg:text-base font-clash'
                onClick={handlePasswordChange}
                isDisabled={
                  !password ||
                  !confirmPassword ||
                  passwordError ||
                  confirmPasswordError
                }
                type='button'>
                Change Password
              </Button>
            </div>
          </div>
        </div>
        <div className=''>
          <p className='text-xl sm:text-2xl font-medium font-clash'>
            Personal Information
          </p>
          <hr className='my-2 border-t border-t-[#CCCCCC]' />
          <form
            onSubmit={handleProfileUpdate}
            className='bg-white font-bricolage mt-3 flex flex-col rounded-sm justify-between gap-y-5 lg:gap-y-7 p-5 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)]'>
            <div className=''>
              <label htmlFor='fullName' className='lg:text-xl block'>
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className=' transition-transform duration-500 focus:border-none focus:outline-2 focus:outline-primary focus:-translate-y-1 focus:mt-2 focus:shadow-lg text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg '
                placeholder='Abdulazeez Mukadeem'
              />
            </div>
            <div className=''>
              <label htmlFor='matric-number' className='lg:text-xl block'>
                Matric Number
              </label>
              <input
                type='text'
                id='matric-number'
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
                className='transition-transform duration-500 focus:border-none focus:outline-2 focus:outline-primary focus:-translate-y-1 focus:mt-2 focus:shadow-lg text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg '
                placeholder='DT/2025/0001'
              />
            </div>
            <div className=''>
              <label htmlFor='email' className='lg:text-xl block'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='transition-transform duration-500 focus:border-none focus:outline-2 focus:outline-primary focus:-translate-y-1 focus:mt-2 focus:shadow-lg text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg '
                placeholder='abdulazeezmukadeem1@gmail.com'
              />
            </div>
            <div className=''>
              <label htmlFor='phone-no' className='lg:text-xl block'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phone-no'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='transition-transform duration-500 focus:border-none focus:outline-2 focus:outline-primary focus:-translate-y-1 focus:mt-2 focus:shadow-lg text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg '
                placeholder='Abdulazeez Mukadeem'
              />
            </div>
            <div className=''>
              <label htmlFor='gender' className='lg:text-xl block'>
                Gender
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className='transition-transform duration-500 focus:border-none focus:outline-2 focus:outline-primary focus:-translate-y-1 focus:mt-2 focus:shadow-lg text-sm lg:text-base border border-[#CCCCCC] w-full py-3 px-2 lg:pl-3 lg:pr-1.5 rounded-lg '>
                {["Male", "Female", "Other"].map((gen, index) => (
                  <option key={index} value={gen}>
                    {gen}
                  </option>
                ))}
              </select>
            </div>
            <Button
              variant='primary'
              size='lg'
              className=' rounded-[10px] mt-4 font-clash'
              onClick={handleProfileUpdate}
              isDisabled={!fullName || !email || !matricNumber || !phoneNumber}
              type='submit'>
              Save
            </Button>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
          <Loader />
        </div>
      )}
    </section>
  );
};

export default Profile;
