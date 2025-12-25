import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";
import QuranLoader from "../Components/QuranLoader";

const LayoutTeachers = lazy(() => import("../layouts/LayoutTeachers"));
const DashboardTeacher = lazy(() =>
  import("../pages/teacher/DashboardTeacher")
);
const Library = lazy(() => import("../pages/teacher/Library"));
const Messages = lazy(() => import("../pages/teacher/Messages"));
const Payments = lazy(() => import("../pages/teacher/Payments"));
const Classes = lazy(() => import("../pages/teacher/Classes"));
const Profile = lazy(() => import("../pages/student/Profile")); 

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function TeacherRoutes() {
  const { loading } = useAuth();
  if (loading) return <LoaderFallback />;

  return (
    <Routes>
      <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
        <Route path="/" element={<LayoutTeachers />}>
          <Route index element={<DashboardTeacher />} />
          <Route path="library" element={<Library />} />
          <Route path="payments" element={<Payments />} />
          <Route path="messages" element={<Messages />} />
          <Route path="my-classes" element={<Classes />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/teacher" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
