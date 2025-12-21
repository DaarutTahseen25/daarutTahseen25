import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import LayoutAspirant from "../layouts/LayoutAspirant";
import ProtectedRoute from "../auth/ProtectedRoute";

const Dashboard = lazy(() => import("../pages/aspirant/Dashboard"));
const LevelRegistration = lazy(() =>
  import("../pages/aspirant/LevelRegistration")
);
const Profile = lazy(() => import("../pages/student/Profile"));

const AspirantRoutes = () => {
  return (
    <Routes element={<ProtectedRoute allowedRoles={["aspirant"]} />}>
      <Route path="/" element={<LayoutAspirant />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="level-registration" element={<LevelRegistration />} />

        <Route path="*" element={<Navigate to="/aspirant" replace />} />
      </Route>
    </Routes>
  );
};

export default AspirantRoutes;
