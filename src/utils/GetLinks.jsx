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
} from "lucide-react";

// helper for student access
const requiresActive = (user) => user?.is_active ?? false;

export const getDashboardSidebarLinks = (role, user) => {
  if (role === "student") {
    return [
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/student",
        requiresLevel: requiresActive(user),
      },
      {
        key: "mycourses",
        icon: <BookOpen />,
        label: "My Courses",
        to: "/student/my-courses",
        requiresLevel: requiresActive(user),
      },
      {
        key: "level-registration",
        icon: <School />,
        label: "Level Registration",
        to: "/student/level-registration",
        requiresLevel: false, // always accessible
      },
      {
        key: "curriculum",
        icon: <ListTree />,
        label: "Curriculum",
        to: "/student/curriculum",
        requiresLevel: requiresActive(user),
      },
      {
        key: "notifications",
        icon: <Bell />,
        label: "Notifications",
        to: "/student/messages",
        requiresLevel: requiresActive(user),
      },
      {
        key: "payfees",
        icon: <CreditCard />,
        label: "Pay Fees",
        to: "/student/my-fees",
        requiresLevel: requiresActive(user),
      },
      {
        key: "resources",
        icon: <FileText />,
        label: "Resources",
        to: "/student/resources",
        requiresLevel: requiresActive(user),
      },
    ];
  }

  if (role === "teacher") {
    return [
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/teacher",
        requiresLevel: false,
      },
      {
        key: "courses",
        icon: <Users />,
        label: "My Courses",
        to: "/teacher/my-courses",
        requiresLevel: false,
      },
      {
        key: "myclasses",
        icon: <BookOpen />,
        label: "My Classes",
        to: "/teacher/my-classes",
        requiresLevel: false,
      },
      {
        key: "messages",
        icon: <MessageSquare />,
        label: "Messages",
        to: "/teacher/messages",
        requiresLevel: false,
      },
      {
        key: "payments",
        icon: <CreditCard />,
        label: "Payments",
        to: "/teacher/payments",
        requiresLevel: false,
      },
      {
        key: "library",
        icon: <FileText />,
        label: "Library",
        to: "/teacher/library",
        requiresLevel: false,
      },
    ];
  }

  if (role === "admin") {
    return [
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/admin",
        requiresLevel: false,
      },
      {
        key: "students",
        icon: <Users />,
        label: "Students Management",
        to: "/admin/students",
        requiresLevel: false,
      },
      {
        key: "teachers",
        icon: <Users />,
        label: "Teachers Management",
        to: "/admin/teachers",
        requiresLevel: false,
      },
      {
        key: "payouts",
        icon: <CreditCard />,
        label: "Payout History",
        to: "/admin/payouts",
        requiresLevel: false,
      },
      {
        key: "aptitude-test",
        icon: <FileText />,
        label: "Aptitude Test",
        to: "/admin/aptitude-test",
        requiresLevel: false,
      },
      {
        key: "view-aptitude-test",
        icon: <FileText />,
        label: "View Aptitude Test",
        to: "/admin/view-aptitude-test",
        requiresLevel: false,
      },
    ];
  }

  return [];
};
