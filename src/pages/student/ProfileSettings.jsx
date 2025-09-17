import { Camera } from "lucide-react";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";
import useProfileUpdate from "./hooks/useProfileUpdate";

const ProfileSettings = () => {
  const { user } = useAuth();
  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "N/A";

  // ✅ useProfileManager replaces useProfileSettings
  const {
    preview,
    fileInputRef,
    formData,
    errors,
    isUpdating,
    handleFileChange,
    triggerFileSelect,
    handleChange,
    handleSubmit,
  } = useProfileUpdate();

  return (
    <div className="bg-white rounded-[10px] shadow-[0_0_5px_0.2px_#00000040] p-4 sm:p-6">
      <h1 className="font-medium text-xl sm:text-2xl font-clash">
        Profile Information
      </h1>

      {/* Avatar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-4 relative">
        <div className="relative group">
          <img
            src={preview}
            alt={user?.full_name || "User avatar"}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
          />
          <button
            type="button"
            onClick={triggerFileSelect}
            className="absolute bottom-0 right-0 bg-black/60 text-white p-1 rounded-full
                       opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Camera size={18} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="text-center sm:text-left">
          <h1 className="font-medium text-lg sm:text-xl font-clash">
            {user?.full_name || "Anonymous User"}
          </h1>
          <p className="capitalize font-normal text-base sm:text-lg font-clash">
            {user?.role || "No role"}
          </p>
          <small className="text-[#000000B2] font-normal text-sm sm:text-base font-clash">
            Member since {joinDate}
          </small>
        </div>
      </div>

      {/* Form */}
      <form className="w-full mt-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-sm sm:text-base">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={`border p-3 w-full rounded-lg focus:border-primary ${
                errors.fullname ? "border-red-500" : "border-[#A9A9A9]"
              }`}
              type="text"
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">{errors.fullname}</span>
            )}
          </div>

          {/* Email (read-only) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-base">
              Email
            </label>
            <input
              id="email"
              name="email"
              defaultValue={user?.email || ""}
              disabled
              className="border border-[#A9A9A9] p-3 w-full rounded-lg bg-gray-100"
              type="email"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phonenumber" className="text-sm sm:text-base">
              Phone Number
            </label>
            <input
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className={`border p-3 w-full rounded-lg focus:border-primary ${
                errors.phonenumber ? "border-red-500" : "border-[#A9A9A9]"
              }`}
              type="text"
            />
            {errors.phonenumber && (
              <span className="text-red-500 text-sm">{errors.phonenumber}</span>
            )}
          </div>

          {/* Role (read-only) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm sm:text-base">
              Role
            </label>
            <input
              id="role"
              name="role"
              disabled
              defaultValue={user?.role || ""}
              className="border capitalize border-[#A9A9A9] p-3 w-full rounded-lg bg-gray-100"
              type="text"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-sm sm:text-base">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`border p-3 w-full rounded-lg focus:border-primary ${
                errors.gender ? "border-red-500" : "border-[#A9A9A9]"
              }`}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">{errors.gender}</span>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:justify-end">
          <Button
            type="submit"
            disabled={isUpdating}
            className="w-full sm:w-auto font-clash"
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
