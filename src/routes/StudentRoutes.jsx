import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";
import QuranLoader from "../Components/QuranLoader";

const LayoutStudents = lazy(() => import("../layouts/LayoutStudents"));
const LevelRegistration = lazy(() =>
  import("../pages/student/LevelRegistration")
);
const PayFees = lazy(() => import("../pages/student/PayFees"));
const Curriculum = lazy(() => import("../pages/student/Curriculum"));
const Notifications = lazy(() => import("../pages/student/Notifications"));
const Resources = lazy(() => import("../pages/student/Resources"));
const Admission = lazy(() => import("../pages/student/Admission"));
const Profile = lazy(() => import("../pages/student/Profile"));
const Dashboard = lazy(() => import("../pages/student/Dashboard"));
const MyCourses = lazy(() => import("../pages/student/MyCourses"));

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function StudentRoutes() {
  const { loading } = useAuth();
  if (loading) return <LoaderFallback />;

  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <LayoutStudents />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="level-registration" element={<LevelRegistration />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="admission" element={<Admission />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="messages" element={<Notifications />} />
          <Route path="my-fees" element={<PayFees />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
