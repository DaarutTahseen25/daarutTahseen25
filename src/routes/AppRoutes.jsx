import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import QuranLoader from "../Components/QuranLoader";

// Lazy load route groups
const LandingRoutes = lazy(() => import("./LandingRoutes"));

// Dashboard Routes
const StudentRoutes = lazy(() => import("./StudentRoutes"));
const TeacherRoutes = lazy(() => import("./TeacherRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));

// Auth-related pages
const OtpRegPage = lazy(() => import("../Components/OtpRegPage"));
const LogIn = lazy(() => import("../pages/Login"));
const UnAuthorized = lazy(() => import("../pages/UnAuthorized"));

// Create Account Flow pages
const CreateAccount = lazy(() => import("../pages/CreateAccount"));
const SelectAccount = lazy(() => import("../Components/SelectAccount"));
const StudentRegistrationForm = lazy(() =>
  import("../Components/StudentRegistrationForm")
);
const TutorRegistrationForm = lazy(() =>
  import("../Components/TutorRegistrationForm")
);

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        {/* Public landing pages */}
        <Route path="/*" element={<LandingRoutes />} />

        {/* Student dashboard */}
        <Route path="/student/*" element={<StudentRoutes />} />

        {/* Teacher dashboard */}
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Auth & Misc */}
        <Route path="/otp-page" element={<OtpRegPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />

        {/* Create Account Flow */}
        <Route path="/create" element={<CreateAccount />}>
          <Route index element={<Navigate to="select" replace />} />
          <Route path="select" element={<SelectAccount />} />
          <Route path="student-account" element={<StudentRegistrationForm />} />
          <Route path="tutor-account" element={<TutorRegistrationForm />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
