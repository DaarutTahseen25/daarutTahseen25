import React from "react";
import { Navigate, useLocation } from "react-router";
import useUIStore from "../../store/useUIStore";
import { user } from "../../App"; // eventually migrate to Zustand

const DashboardLayoutGuard = ({ children }) => {
  const { isAdmissionProcess } = useUIStore(); // Zustand state
  const { isAuthenticated, isAdmitted, role } = user;
  const { pathname } = useLocation();

  // 🔒 Block access if not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 👩‍🎓 Student-specific route control
  if (role === "student") {
    // 🧩 Step 1: Must complete level registration first
    if (!isAdmissionProcess) {
      const allowed = [
        "/dashboard",
        "/dashboard/level-registration",
        // "/dashboard/student", // optional: if /dashboard redirects here
      ];
      return allowed.includes(pathname) ? (
        children
      ) : (
        <Navigate to="/dashboard/level-registration" replace />
      );
    }

    // 🧩 Step 2: Level done, but not yet admitted — go to admission only
    if (isAdmissionProcess && !isAdmitted) {
      return pathname === "/dashboard/admission" ? (
        children
      ) : (
        <Navigate to="/dashboard/admission" replace />
      );
    }

    // ✅ Full access after admission
    return children;
  }

  // 👨‍🏫 Teacher-specific check: Must be approved
  if (role === "teacher" && !user.isApproved) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        Your account is awaiting admin approval.
      </div>
    );
  }

  // ✅ Default: allow access
  return children;
};

export default DashboardLayoutGuard;
