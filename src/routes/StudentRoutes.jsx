// import React, { lazy } from "react";
// import { Routes, Route, Navigate } from "react-router";
// import LayoutStudents from "../layouts/LayoutStudents";
// import RequireLevel from "../auth/RequireLevel";

// // Lazy-loaded pages
// const Dashboard = lazy(() => import("../pages/student/Dashboard"));
// const MyCourses = lazy(() => import("../pages/student/MyCourses"));
// const Admission = lazy(() => import("../pages/student/Admission"));
// const Curriculum = lazy(() => import("../pages/student/Curriculum"));
// const Notifications = lazy(() => import("../pages/student/Notifications"));
// const PayFees = lazy(() => import("../pages/student/PayFees"));
// const Resources = lazy(() => import("../pages/student/Resources"));
// const LevelRegistration = lazy(() =>
//   import("../pages/student/LevelRegistration")
// );

// const Profile = lazy(() => import("../pages/student/Profile"));

// const StudentRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LayoutStudents />}>
//         {/* Only students with a level can access these */}
//         <Route element={<RequireLevel />}>
//           <Route index element={<Dashboard />} />
//           <Route path="my-courses" element={<MyCourses />} />
//           <Route path="admission" element={<Admission />} />
//           <Route path="curriculum" element={<Curriculum />} />
//           <Route path="messages" element={<Notifications />} />
//           <Route path="my-fees" element={<PayFees />} />
//           <Route path="resources" element={<Resources />} />
//         </Route>

//         {/* Level registration page (open to those with no level) */}
//         <Route path="profile" element={<Profile />} />
//         <Route path="level-registration" element={<LevelRegistration />} />

//         {/* Catch-all fallback */}
//         <Route path="*" element={<Navigate to="/student" replace />} />
//       </Route>
//     </Routes>
//   );
// };

// export default StudentRoutes;

import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import LayoutStudents from "../layouts/LayoutStudents";
import RequireLevel from "../auth/RequireLevel";
import ProtectedRoute from "../auth/ProtectedRoute";

// Lazy-loaded pages
const Dashboard = lazy(() => import("../pages/student/Dashboard"));
const MyCourses = lazy(() => import("../pages/student/MyCourses"));
const Admission = lazy(() => import("../pages/student/Admission"));
const Curriculum = lazy(() => import("../pages/student/Curriculum"));
const Notifications = lazy(() => import("../pages/student/Notifications"));
const PayFees = lazy(() => import("../pages/student/PayFees"));
const Resources = lazy(() => import("../pages/student/Resources"));
const LevelRegistration = lazy(() =>
  import("../pages/student/LevelRegistration")
);
const Profile = lazy(() => import("../pages/student/Profile"));

const StudentRoutes = () => {
  return (
    <Routes>
      {/* Protect all student routes */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/" element={<LayoutStudents />}>
          {/* Only students with a level can access these */}
          <Route element={<RequireLevel />}>
            <Route index element={<Dashboard />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="admission" element={<Admission />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="messages" element={<Notifications />} />
            <Route path="my-fees" element={<PayFees />} />
            <Route path="resources" element={<Resources />} />
          </Route>

          {/* Always accessible */}
          <Route path="profile" element={<Profile />} />
          <Route path="level-registration" element={<LevelRegistration />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/student" replace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default StudentRoutes;
