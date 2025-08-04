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

export const getDashboardSidebarLinks = (role) => {
  if (role === "student") {
    return [
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/student",
        requiresLevel: true,
      },
      {
        key: "mycourses",
        icon: <BookOpen />,
        label: "My Courses",
        to: "/student/my-courses",
        requiresLevel: true,
      },
      {
        key: "level-registration",
        icon: <School />,
        label: "Level Registration",
        to: "/student/level-registration",
        requiresLevel: false,
      },
      {
        key: "admission",
        icon: <School />,
        label: "Admission",
        to: "/student/admission",
        requiresLevel: true,
      },
      {
        key: "curriculum",
        icon: <ListTree />,
        label: "Curriculum",
        to: "/student/curriculum",
        requiresLevel: true,
      },
      {
        key: "notifications",
        icon: <Bell />,
        label: "Notifications",
        to: "/student/messages",
        requiresLevel: true,
      },
      {
        key: "payfees",
        icon: <CreditCard />,
        label: "Pay Fees",
        to: "/student/my-fees",
        requiresLevel: true,
      },
      {
        key: "resources",
        icon: <FileText />,
        label: "Resources",
        to: "/student/resources",
        requiresLevel: true,
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

  return [];
};
