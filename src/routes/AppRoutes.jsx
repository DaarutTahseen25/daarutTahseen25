import { Routes, Route, Navigate } from "react-router";
import { Suspense, lazy } from "react";
import QuranLoader from "../Components/QuranLoader";

const LandingRoutes = lazy(() => import("./LandingRoutes"));
const StudentRoutes = lazy(() => import("./StudentRoutes"));
const TeacherRoutes = lazy(() => import("./TeacherRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));
const LogIn = lazy(() => import("../pages/Login"));
const UnAuthorized = lazy(() => import("../pages/UnAuthorized"));

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        {/* Public routes */}
        <Route path="/*" element={<LandingRoutes />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />

        {/* Dashboards */}
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
