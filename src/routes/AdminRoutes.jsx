import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";
import QuranLoader from "../Components/QuranLoader";
import AdminLayout from "../layouts/AdminLayout";
import Profile from "../pages/student/Profile";

const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
const Students = lazy(() => import("../pages/Admin/Students"));
const Tutors = lazy(() => import("../pages/admin/Tutors"));
const PayoutHistory = lazy(() => import("../pages/Admin/PayoutHistory"));
const Tests = lazy(() => import("../pages/Admin/Tests"));
const ViewTests = lazy(() => import("../pages/Admin/ViewTests"));

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function AdminRoutes() {
  const { loading } = useAuth();
  if (loading) return <LoaderFallback />;

  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Tutors />} />
          <Route path="payout-history" element={<PayoutHistory />} />
          <Route path="aptitude-test" element={<Tests />} />
          <Route path="view-aptitude-test" element={<ViewTests />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
