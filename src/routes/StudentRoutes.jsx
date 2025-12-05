import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import LayoutStudents from "../layouts/LayoutStudents";
import RequireLevel from "../auth/RequireLevel";
import ProtectedRoute from "../auth/ProtectedRoute";

// Lazy-loaded pages
const Dashboard = lazy(() => import("../pages/student/Dashboard"));
const MyCourses = lazy(() => import("../pages/student/MyCourses"));
const ExamPage = lazy(() => import("../pages/student/ExamPage"));
const Admission = lazy(() => import("../pages/aspirant/Admission"));
const Notifications = lazy(() => import("../pages/student/Notifications"));
const Results = lazy(() => import("../pages/student/Results"));
const Profile = lazy(() => import("../pages/student/Profile"));

const StudentRoutes = () => {
  return (
    <Routes>
      {/* Protect all student routes */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/" element={<LayoutStudents />}>
          <Route index element={<Dashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="exam/:id" element={<ExamPage />} />
          <Route path="admission" element={<Admission />} />
          <Route path="messages" element={<Notifications />} />
          <Route path="results" element={<Results />} />

          {/* Always accessible */}
          <Route path="profile" element={<Profile />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/student" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default StudentRoutes;
