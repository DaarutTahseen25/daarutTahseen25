import React from "react";
import { FaPen } from "react-icons/fa";

const TutorProfile = () => {
  return (
    <div className="min-h-screen max-w-[1000px] mx-auto p-6 flex flex-col md:flex-row items-start gap-6">
      <div className="w-full md:w-1/3 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 rounded-full border-2 border-white shadow overflow-hidden mb-5">
          <img
            src="/test3.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />

          <label className="absolute bottom-1 right-1 bg-secondary p-3 rounded-full shadow cursor-pointer">
            <FaPen className="text-primary" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  // this is where you will add the function to upload the file
                  console.log(file);
                }
              }}
            />
          </label>
        </div>

        {/* Change Password */}
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-semibold font-clash text-xl mb-3">
            Change Password
          </h2>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
            />
          </div>
          <button className="w-full bg-primary text-white py-2 rounded hover:bg-teal-600 transition">
            Change Password
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3">
        <h2 className="font-semibold font-clash text-xl mb-4">
          Personal Information
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              value="Abdulrazaq Isiaq"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Teacher ID</label>
            <input
              type="text"
              value="DTT/25/001"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value="razaq@gmail.com"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              value="08123456789"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Gender</label>
            <input
              type="text"
              value="Male"
              className="w-full border border-textmuted px-3 py-3 rounded focus:outline-none"
              readOnly
            />
          </div>

          <button
            type="button"
            className="w-full bg-primary text-white py-2 text-semibold rounded hover:bg-teal-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorProfile;
