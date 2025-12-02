// utils/sidebarConfig.js
import {
  Bell,
  BookOpen,
  CreditCard,
  FileText,
  LayoutDashboard,
  ListTree,
  MessageSquare,
  School,
  Users,
  Home,
  Info,
  GraduationCap,
  Phone,
} from "lucide-react";

/**
 * Public (landing-page) links
 * These do NOT require auth/roles.
 */
export const landingLinks = [
  { key: "home", icon: <Home size={20} />, label: "Home", to: "/" },
  {
    key: "about",
    icon: <Info size={20} />,
    label: "About Us",
    to: "/about-us",
  },
  {
    key: "courses",
    icon: <BookOpen size={20} />,
    label: "Courses",
    to: "/our-courses",
  },
  {
    key: "admission",
    icon: <GraduationCap size={20} />,
    label: "Admission",
    to: "/about-admissions",
  },
  {
    key: "resources",
    icon: <FileText size={20} />,
    label: "Resources",
    to: "/portal-resources",
  },
  {
    key: "contact",
    icon: <Phone size={20} />,
    label: "Contact",
    to: "/contact-us",
  },
];

/**
 * Authenticated dashboard links
 * Role-based access, same as before.
 */
export const dashboardLinks = [
  {
    key: "dashboard",
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
    to: { student: "/student", teacher: "/teacher", admin: "/admin" },
    roles: ["student", "teacher", "admin"],
    requiresLevel: false,
  },
  // --- Student only ---
  {
    key: "mycourses",
    icon: <BookOpen size={20} />,
    label: "My Courses",
    to: { student: "/student/my-courses" },
    roles: ["student"],
    requiresLevel: true,
  },
  {
    key: "level-registration",
    icon: <School size={20} />,
    label: "Level Registration",
    to: { student: "/student/level-registration" },
    roles: ["student"],
    requiresLevel: false,
  },
  {
    key: "curriculum",
    icon: <ListTree size={20} />,
    label: "Curriculum",
    to: { student: "/student/curriculum" },
    roles: ["student"],
    requiresLevel: true,
  },
  {
    key: "notifications",
    icon: <Bell size={20} />,
    label: "Notifications",
    to: { student: "/student/messages" },
    roles: ["student"],
    requiresLevel: true,
  },
  {
    key: "payfees",
    icon: <CreditCard size={20} />,
    label: "Pay Fees",
    to: { student: "/student/my-fees" },
    roles: ["student"],
    requiresLevel: true,
  },
  {
    key: "resources",
    icon: <FileText size={20} />,
    label: "Resources",
    to: { student: "/student/resources" },
    roles: ["student"],
    requiresLevel: true,
  },

  // --- Teacher only ---
  {
    key: "courses",
    icon: <Users size={20} />,
    label: "My Courses",
    to: { teacher: "/teacher/my-courses" },
    roles: ["teacher"],
    requiresLevel: false,
  },
  {
    key: "myclasses",
    icon: <BookOpen size={20} />,
    label: "My Classes",
    to: { teacher: "/teacher/my-classes" },
    roles: ["teacher"],
    requiresLevel: false,
  },
  {
    key: "messages",
    icon: <MessageSquare size={20} />,
    label: "Messages",
    to: { teacher: "/teacher/messages" },
    roles: ["teacher"],
    requiresLevel: false,
  },
  {
    key: "payments",
    icon: <CreditCard size={20} />,
    label: "Payments",
    to: { teacher: "/teacher/payments" },
    roles: ["teacher"],
    requiresLevel: false,
  },
  {
    key: "library",
    icon: <FileText size={20} />,
    label: "Library",
    to: { teacher: "/teacher/library" },
    roles: ["teacher"],
    requiresLevel: false,
  },

  // --- Admin only ---
  {
    key: "students",
    icon: <Users size={20} />,
    label: "Students Management",
    to: { admin: "/admin/students" },
    roles: ["admin"],
    requiresLevel: false,
  },
  {
    key: "teachers",
    icon: <Users size={20} />,
    label: "Teachers Management",
    to: { admin: "/admin/teachers" },
    roles: ["admin"],
    requiresLevel: false,
  },
  {
    key: "courses",
    icon: <BookOpen size={20} />,
    label: "Courses Management",
    to: { admin: "/admin/courses" },
    roles: ["admin"],
    requiresLevel: false,
  },
  {
    key: "aptitude-test",
    icon: <FileText size={20} />,
    label: "Aptitude Test",
    to: { admin: "/admin/aptitude-test" },
    roles: ["admin"],
    requiresLevel: false,
  },
  {
    key: "view-aptitude-test",
    icon: <FileText size={20} />,
    label: "View Aptitude Test",
    to: { admin: "/admin/view-aptitude-test" },
    roles: ["admin"],
    requiresLevel: false,
  },
  {
    key: "payouts",
    icon: <CreditCard size={20} />,
    label: "Payout History",
    to: { admin: "/admin/payouts-history" },
    roles: ["admin"],
    requiresLevel: false,
  },
];
