import React, { useState, useMemo, useCallback, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

const TutorProfile = () => {
  const { user } = useAuth();
  const profile = useMemo(() => user?.user || user, [user]);

  const [profileImage, setProfileImage] = useState(profile?.image);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    fullName: profile?.full_name || "",
    teacherId: profile?.teacher_id || "",
    email: profile?.email || "",
    phone: profile?.phone_number || "",
    gender: profile?.gender || "",
  });

  // Handle profile image upload
  const handleProfileImageChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // TODO: Upload logic here
      console.log("File selected:", file);

      // Cleanup old object URL when a new one is created
      return () => URL.revokeObjectURL(imageUrl);
    }
  }, []);

  // Password change handler
  const handleChangePassword = useCallback(() => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill out both fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // TODO: API call for password change
    alert("Password changed successfully!");
    setNewPassword("");
    setConfirmPassword("");
  }, [newPassword, confirmPassword]);

  // Label formatter
  const formatLabel = (key) => {
    switch (key) {
      case "fullName":
        return "Full Name";
      case "teacherId":
        return "Teacher ID";
      default:
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };

  return (
    <div className='min-h-screen max-w-[1000px] mx-auto p-6 flex flex-col md:flex-row items-start gap-6'>
      {/* LEFT SIDE */}
      <div className='w-full md:w-1/3 flex flex-col items-center'>
        {/* Profile Picture */}
        <div className='relative w-32 h-32 rounded-full border-2 border-white shadow overflow-hidden mb-5'>
          <img
            src={profileImage}
            alt='Profile'
            className='w-full h-full object-cover rounded-full'
          />
          <label className='absolute bottom-1 right-1 bg-secondary p-3 rounded-full shadow cursor-pointer'>
            <FaPen className='text-primary' />
            <input
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleProfileImageChange}
            />
          </label>
        </div>

        {/* Change Password */}
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-semibold font-clash text-xl mb-3'>
            Change Password
          </h2>
          {[
            {
              value: newPassword,
              set: setNewPassword,
              placeholder: "Enter new password",
            },
            {
              value: confirmPassword,
              set: setConfirmPassword,
              placeholder: "Confirm password",
            },
          ].map((field, i) => (
            <div key={i} className='mb-3'>
              <input
                type='password'
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                placeholder={field.placeholder}
                className='w-full border border-textmuted px-3 py-3 rounded focus:outline-none'
              />
            </div>
          ))}
          <button
            onClick={handleChangePassword}
            className='w-full bg-primary text-white py-2 rounded hover:bg-teal-600 transition'>
            Change Password
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='bg-white p-6 rounded shadow w-full md:w-2/3'>
        <h2 className='font-semibold font-clash text-xl mb-4'>
          Personal Information
        </h2>
        <form className='space-y-4'>
          {Object.entries(userInfo).map(([key, value]) => (
            <div key={key}>
              <label className='block text-sm mb-1'>{formatLabel(key)}</label>
              <input
                type='text'
                value={value}
                className='w-full border border-textmuted px-3 py-3 rounded focus:outline-none'
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </div>
          ))}
          <button
            type='button'
            className='w-full bg-primary text-white py-2 text-semibold rounded hover:bg-teal-600 transition'
            onClick={() => alert("Saved!")}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorProfile;
