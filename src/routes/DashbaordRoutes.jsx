import { Routes, Route } from "react-router";

import DashboardTeacher from "../pages/teacher/DashboardTeacher";
import Library from "../pages/teacher/Library";
import Messages from "../pages/teacher/Messages";
import TutorProfile from "../pages/teacher/TutorProfile";
import Payments from "../pages/teacher/Payments";
import Classes from "../pages/teacher/Classes";
import TeacherCourses from "../pages/teacher/TeacherCourses";

import LevelRegistration from "../pages/student/LevelRegistration";
import PayFees from "../pages/student/PayFees";
import Curriculum from "../pages/student/Curriculum";
import Notifications from "../pages/student/Notifications";
import Resources from "../pages/student/Resources";
import Admission from "../pages/student/Admission";
import Profile from "../pages/student/Profile";
import Dashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../auth/ProtectedRoute";
import DefaultDashboardRedirect from "../Components/DefaultDashboardRedirect";
import { useAuth } from "../contexts/AuthContext";

import QuranLoader from "./../Components/QuranLoader";

const DashboardRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-lg font-medium'>
        <QuranLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<DefaultDashboardRedirect />} />

        {/* Student Routes */}
        <Route
          path='student'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/my-courses'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <MyCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/admission'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Admission />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/level-registration'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <LevelRegistration />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/curriculum'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Curriculum />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/messages'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/my-fees'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <PayFees />
            </ProtectedRoute>
          }
        />
        <Route
          path='student/resources'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path='profile'
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path='teacher'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <DashboardTeacher />
            </ProtectedRoute>
          }
        />
        <Route
          path='teacher/library'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <Library />
            </ProtectedRoute>
          }
        />
        <Route
          path='teacher/payments'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path='teacher/messages'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path='teacher/my-courses'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path='teacher/my-classes'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <Classes />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
