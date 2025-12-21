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
    <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8 ">
      {/* Header */}
      <h1 className="font-clash text-2xl sm:text-3xl font-semibold mb-6">
        Profile Information
      </h1>

      {/* Avatar + Basic Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <div className="relative group">
          <img
            src={preview}
            alt={user?.full_name || "User avatar"}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-gray-200"
          />
          <button
            type="button"
            onClick={triggerFileSelect}
            className="absolute bottom-0 right-0 flex items-center justify-center bg-black/60 text-white rounded-full p-2
                       opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
            aria-label="Change profile picture"
          >
            <Camera size={20} />
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
          <h2 className="font-clash text-xl sm:text-2xl font-medium">
            {user?.full_name || "Anonymous User"}
          </h2>
          <p className="capitalize text-gray-600 text-sm sm:text-base">
            {user?.role || "No role"}
          </p>
          <p className="text-gray-500 text-sm mt-1">Member since {joinDate}</p>
        </div>
      </div>

      {/* Profile Form */}
      <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              type="text"
              className={`border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">{errors.fullname}</span>
            )}
          </div>

          {/* Email (read-only) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              defaultValue={user?.email || ""}
              disabled
              type="email"
              className="border border-gray-300 bg-gray-100 p-3 rounded-lg w-full text-gray-600"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phonenumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              type="text"
              className={`border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.phonenumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phonenumber && (
              <span className="text-red-500 text-sm">{errors.phonenumber}</span>
            )}
          </div>

          {/* Role (read-only) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              id="role"
              name="role"
              defaultValue={user?.role || ""}
              disabled
              type="text"
              className="border border-gray-300 bg-gray-100 p-3 rounded-lg w-full capitalize text-gray-600"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="gender"
              className="text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.gender ? "border-red-500" : "border-gray-300"
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

        <div className="flex justify-center sm:justify-end">
          <Button
            type="submit"
            disabled={isUpdating}
            className="w-full sm:w-auto px-6 py-3 font-clash rounded-lg bg-primary text-white hover:bg-primary/90 transition"
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProfileSettings;
