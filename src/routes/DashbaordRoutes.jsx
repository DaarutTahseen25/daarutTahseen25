import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";
import QuranLoader from "../Components/QuranLoader";
import RoleRouteWrapper from "./RoleRouteWrapper";

// Layouts
const LayoutStudents = lazy(() => import("../layouts/LayoutStudents"));
const LayoutTeachers = lazy(() => import("../layouts/LayoutTeachers"));

// Student Pages
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

// Teacher Pages
const DashboardTeacher = lazy(() =>
  import("../pages/teacher/DashboardTeacher")
);
const Library = lazy(() => import("../pages/teacher/Library"));
const Messages = lazy(() => import("../pages/teacher/Messages"));
const Payments = lazy(() => import("../pages/teacher/Payments"));
const Classes = lazy(() => import("../pages/teacher/Classes"));
const TeacherCourses = lazy(() => import("../pages/teacher/TeacherCourses"));

// Others
const TestPage = lazy(() => import("../pages/AspirantTest/TestPage"));

const LoaderFallback = () => (
  <div className='w-full h-screen flex justify-center items-center text-lg font-medium'>
    <QuranLoader />
  </div>
);

const DashbaordRoutes = () => {
  const { loading } = useAuth();

  if (loading) return <LoaderFallback />;

  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        {/* Student Routes */}
        <Route
          path='/student/*'
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              {/* <RoleRouteWrapper> */}
              <LayoutStudents />
              {/* </RoleRouteWrapper> */}
            </ProtectedRoute>
          }>
          <Route path='level-registration' element={<LevelRegistration />} />
          <Route path='profile' element={<Profile />} />
          <Route index element={<Dashboard />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='admission' element={<Admission />} />
          <Route path='curriculum' element={<Curriculum />} />
          <Route path='messages' element={<Notifications />} />
          <Route path='my-fees' element={<PayFees />} />
          <Route path='resources' element={<Resources />} />
        </Route>

        {/* Teacher Routes */}
        <Route
          path='/teacher'
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              {/* <RoleRouteWrapper> */}
              <LayoutTeachers />
              {/* </RoleRouteWrapper> */}
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

        {/* Public Assessment Test Route */}
        <Route path='/assessment-test' element={<TestPage />} />
      </Routes>
    </Suspense>
  );
};

export default DashbaordRoutes;
