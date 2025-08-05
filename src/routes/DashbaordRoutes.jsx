import { Routes, Route } from "react-router";

import DashboardTeacher from "../pages/teacher/DashboardTeacher";
import Library from "../pages/teacher/Library";
import Messages from "../pages/teacher/Messages";
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

import ProtectedRoute from "../auth/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";

import QuranLoader from "../Components/QuranLoader";
import LayoutStudents from "../layouts/LayoutStudents";
import LayoutTeachers from "../layouts/LayoutTeachers";
import RequireLevel from "../auth/RequireLevel";
import TestPage from "../pages/AspirantTest/TestPage";

const DashboardRoutes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-lg font-medium'>
        <QuranLoader />
      </div>
    );
  }

  return (
    <Routes>
      {/* Student Routes */}
      <Route
        path='/student/*'
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <LayoutStudents />
          </ProtectedRoute>
        }>
        <Route path='level-registration' element={<LevelRegistration />} />
        <Route path='profile' element={<Profile />} />
        <Route element={<RequireLevel />}>
          <Route index element={<Dashboard />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='admission' element={<Admission />} />
          <Route path='curriculum' element={<Curriculum />} />
          <Route path='messages' element={<Notifications />} />
          <Route path='my-fees' element={<PayFees />} />
          <Route path='resources' element={<Resources />} />
        </Route>
      </Route>

      {/* Teacher Routes */}
      <Route
        path='/teacher'
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <LayoutTeachers />
          </ProtectedRoute>
        }>
        <Route index element={<DashboardTeacher />} />
        <Route path='library' element={<Library />} />
        <Route path='payments' element={<Payments />} />
        <Route path='messages' element={<Messages />} />
        <Route path='my-courses' element={<TeacherCourses />} />
        <Route path='my-classes' element={<Classes />} />
        <Route path='profile' element={<Profile />} />
      </Route>

      <Route
        path='/assessment-test'
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <RequireLevel />
          </ProtectedRoute>
        }>
        <Route index element={<TestPage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
