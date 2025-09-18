import { ShieldCheck } from "lucide-react";
import React from "react";
import Button from "../../Components/Button";
import useUpdatePassword from "../../pages/student/hooks/useUpdatePassword";

const SecuritySettings = () => {
  const {
    passwords,
    errors,
    isLoadingPassword,
    handlePasswordInput,
    handlePasswordChange,
  } = useUpdatePassword();

  function onSubmit(e) {
    e.preventDefault();
    handlePasswordChange();
  }

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-clash text-2xl sm:text-3xl font-semibold">
            Security Settings
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Manage your password and keep your account secure.
          </p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-primary">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </div>

      {/* Password Management */}
      <div className="mb-6">
        <h2 className="font-clash text-xl sm:text-2xl font-medium">
          Password Management
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Change your password below.
        </p>
      </div>

      {/* Password Form */}
      <form onSubmit={onSubmit} className="grid gap-5 sm:gap-6">
        {/* Current Password */}
        <div className="grid gap-2">
          <label
            htmlFor="current_password"
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            id="current_password"
            type="password"
            value={passwords.current_password}
            onChange={(e) =>
              handlePasswordInput("current_password", e.target.value)
            }
            placeholder="Enter current password"
            className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 transition
              ${
                errors.current_password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
          />
          {errors.current_password && (
            <p className="text-red-500 text-sm">{errors.current_password}</p>
          )}
        </div>

        {/* New Password */}
        <div className="grid gap-2">
          <label
            htmlFor="new_password"
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            id="new_password"
            type="password"
            value={passwords.new_password}
            onChange={(e) =>
              handlePasswordInput("new_password", e.target.value)
            }
            placeholder="Enter new password"
            className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 transition
              ${
                errors.new_password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
          />
          {errors.new_password && (
            <p className="text-red-500 text-sm">{errors.new_password}</p>
          )}
        </div>

        {/* Confirm New Password */}
        <div className="grid gap-2">
          <label
            htmlFor="confirm_password"
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <input
            id="confirm_password"
            type="password"
            value={passwords.confirm_password}
            onChange={(e) =>
              handlePasswordInput("confirm_password", e.target.value)
            }
            placeholder="Re-enter new password"
            className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 transition
              ${
                errors.confirm_password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-sm">{errors.confirm_password}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoadingPassword}
            className={`w-full sm:w-auto px-6 py-3 font-clash font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition
              ${isLoadingPassword ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoadingPassword ? "Updating..." : "Update Password"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SecuritySettings;
