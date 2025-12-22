import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { usePageTitle } from "../../hooks/usePageTitle";
import { formatDate } from "../../utils/helper";
import {
  Users,
  BookOpen,
  FileText,
  CheckCircle2,
  Upload,
  UserPlus,
  ClipboardList,
  Calendar,
  Video,
  AlertCircle,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Button from "../../Components/Button";
import AssignmentCard from "../../Components/Assignment";
import CalendarComponent from "../../Components/CalendarComponent";
import Quiz from "../../Components/Quiz";
import TotalStudents from "./TotalStudents";
import DashTitle from "../../Components/DashTitle";
import { students } from "../../constants/data";

const classesData = Object.freeze([
  {
    thumbnail: "/quran-recitation.png",
    title: "Qur'an Recitation & Tajwid",
    tutor: "By Abdulmalik Ahmad",
    date: "15th July, 2025 ;",
    time: "2:00PM",
    timeLeft: "2 min",
    color: "#D32F2F",
  },
  {
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics ",
    tutor: "By Ibrahim Lawal",
    date: "15th July, 2025 ;",
    time: "4:00PM",
    timeLeft: "2 hrs",
    color: "#009688",
  },
]);

const DashboardTeacher = () => {
  usePageTitle("Dashboard");
  const { user } = useAuth();
  const profile = user?.user || user;

  const firstName = useMemo(
    () => profile?.full_name?.split(" ")[0] || "",
    [profile?.full_name]
  );

  // Calculate stats
  const stats = useMemo(() => {
    const totalStudents = students.length;
    const activeClasses = classesData.length;
    const totalAssignments = students.reduce(
      (acc, student) => acc + (student.assignments?.length || 0),
      0
    );
    const averageCompletion =
      students.reduce((acc, student) => {
        const completed =
          student.assignments?.filter((a) => a.status === "completed").length ||
          0;
        const total = student.assignments?.length || 1;
        return acc + (completed / total) * 100;
      }, 0) / (students.length || 1);

    return {
      totalStudents,
      activeClasses,
      totalAssignments,
      averageCompletion: Math.round(averageCompletion),
    };
  }, []);

  return (
    <section className="flex flex-col gap-8 max-w-[1400px] mx-auto w-ful">
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        <div className="mb-2">
          <DashTitle
            title="Dashboard"
            subtitle="Monitor your classes, track student progress, and manage course content"
          />
        </div>

        {/* Banner */}
        <section className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative px-6 sm:px-8 py-6 sm:py-8 flex flex-col md:flex-row items-center md:items-stretch gap-6">
            <div className="flex-1 text-white text-center md:text-left">
              <div className="text-sm font-semibold tracking-tight">
                {formatDate(new Date())}
              </div>

              <div className="mt-1 font-clash font-semibold text-2xl md:text-3xl leading-tight">
                Welcome back, Ustadh {firstName}!
              </div>

              <div className="mt-3 flex flex-col sm:flex-row gap-2 text-sm items-start sm:items-center">
                <p className="font-montserrat text-white font-semibold">
                  Course: Qur'an Recitation & Tajwid
                </p>
                <span className="hidden sm:inline text-white">•</span>
                <p className="font-montserrat text-white font-semibold">
                  ID: {profile?.teacher_id}
                </p>
              </div>

              <p className="mt-3 text-sm italic text-white/90 hidden md:block">
                "The best among you are those who learn and teach the Qur'an"
              </p>
            </div>

            <div className="flex-shrink-0 self-center md:self-end">
              <img
                src="/dashb-student.png"
                alt="Teacher illustration"
                className="hidden md:block w-36 h-48 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </header>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Students"
          value={stats.totalStudents}
          icon={Users}
          iconColor="text-dark-cyan"
        />
        <MetricCard
          title="Active Classes"
          value={stats.activeClasses}
          icon={BookOpen}
          iconColor="text-dark-cyan"
        />
        <MetricCard
          title="Total Assignments"
          value={stats.totalAssignments}
          icon={FileText}
          iconColor="text-dark-cyan"
        />
        <MetricCard
          title="Avg. Completion"
          value={`${stats.averageCompletion}%`}
          icon={CheckCircle2}
          iconColor="text-success"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="flex flex-col h-full">
          <div className="border-b border-gray-200 pb-3 mb-5">
            <h2 className="font-clash font-semibold text-2xl">
              Weekly Performance
            </h2>
            <p className="font-montserrat text-sm text-gray-600 mt-1">
              Daily completion rates
            </p>
          </div>
          <div className="rounded-lg shadow-sm bg-white p-6 border border-gray-100 flex-1">
            <SimpleBarChart />
          </div>
        </div>

        {/* Circle Chart */}
        <div className="flex flex-col h-full">
          <div className="border-b border-gray-200 pb-3 mb-5">
            <h2 className="font-clash font-semibold text-2xl">
              Course Distribution
            </h2>
            <p className="font-montserrat text-sm text-gray-600 mt-1">
              Student enrollment by subject
            </p>
          </div>
          <div className="rounded-lg shadow-sm bg-white border border-gray-100 overflow-hidden flex-1">
            <div
              style={{
                maxHeight: "100%",
                overflow: "auto",
                paddingBottom: "12px",
              }}
            >
              <CircleChart />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Classes & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[400px]">
        {/* Upcoming Classes - 2 columns */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="border-b border-gray-200 pb-3 mb-5">
            <h2 className="font-clash font-semibold text-2xl">
              Upcoming Classes
            </h2>
            <p className="font-montserrat text-sm text-gray-600 mt-1">
              Your scheduled classes for today
            </p>
          </div>

          <div className="rounded-lg shadow-sm bg-white p-4 border border-gray-100 flex-1 overflow-y-auto">
            <div className="space-y-4">
              {classesData.map((item) => (
                <ClassCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Announcements - 1 column */}
        <div className="flex flex-col">
          <div className="border-b border-gray-200 pb-3 mb-5">
            <h2 className="font-clash font-semibold text-2xl">Announcements</h2>
            <p className="font-montserrat text-sm text-gray-600 mt-1">
              Important updates
            </p>
          </div>

          <div className="rounded-lg shadow-sm bg-white p-6 border border-gray-100 flex-1 overflow-y-auto">
            <AnnouncementsPanel />
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div>
        <div className="border-b border-gray-200 pb-3 mb-5">
          <h2 className="font-clash font-semibold text-2xl">Calendar</h2>
        </div>
        <CalendarComponent />
      </div>
    </section>
  );
};

/* --- REUSABLE COMPONENTS --- */
const ClassCard = ({
  thumbnail,
  title,
  tutor,
  date,
  time,
  timeLeft,
  color,
}) => {
  const isDanger = color?.toLowerCase?.() === "#d32f2f";

  return (
    <div className="rounded-lg bg-white p-3 sm:p-5 border border-gray-200 ">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full sm:w-20 h-40 sm:h-20 rounded-lg object-cover flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
            <div className="min-w-0">
              <h3 className="font-montserrat font-semibold text-sm sm:text-base text-gray-800 truncate">
                {title}
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-gray-600 truncate">
                {tutor}
              </p>
            </div>
            <span
              className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0"
              style={{
                backgroundColor: isDanger ? "#FFE5E5" : "#E8F5E9",
                color: color,
              }}
            >
              {timeLeft} left
            </span>
          </div>

          {/* Date & Time & Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm font-montserrat">
            <div className="flex items-center gap-1">
              <Calendar size={14} className="text-gray-500 flex-shrink-0" />
              <span className="text-gray-700 truncate">{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Video size={14} className="text-gray-500 flex-shrink-0" />
              <span className="text-gray-700">{time}</span>
            </div>
            <button
              className={`w-full sm:w-auto sm:ml-auto px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm text-white transition-colors cursor-pointer ${
                isDanger
                  ? "bg-[#D32F2F] hover:bg-[#B71C1C]"
                  : "bg-dark-cyan hover:bg-[#00796B]"
              }`}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnnouncementsPanel = () => {
  const announcements = [
    {
      icon: AlertCircle,
      title: "System Maintenance",
      message: "Platform maintenance on Dec 10",
      type: "warning",
    },
    {
      icon: CheckCircle2,
      title: "New Feature",
      message: "Live quiz feature now available",
      type: "success",
    },
    {
      icon: Clock,
      title: "Deadline Reminder",
      message: "Assignment due tomorrow",
      type: "info",
    },
  ];

  return (
    <div className="space-y-3">
      {announcements.map((announcement, index) => {
        const Icon = announcement.icon;
        const bgClass =
          announcement.type === "warning"
            ? "bg-[#FFF3E0]"
            : announcement.type === "success"
            ? "bg-[#E8F5E9]"
            : "bg-[#E3F2FD]";
        const iconColor =
          announcement.type === "warning"
            ? "text-[#FF9800]"
            : announcement.type === "success"
            ? "text-[#4CAF50]"
            : "text-[#2196F3]";

        return (
          <div
            key={index}
            className={`${bgClass} rounded-lg p-4 border border-gray-200`}
          >
            <div className="flex gap-3">
              <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <h4 className="font-montserrat font-semibold text-sm text-gray-800">
                  {announcement.title}
                </h4>
                <p className="font-montserrat text-xs text-gray-600 mt-1">
                  {announcement.message}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SimpleBarChart = () => {
  const data = [
    { day: "Mon", completion: 85 },
    { day: "Tue", completion: 72 },
    { day: "Wed", completion: 90 },
    { day: "Thu", completion: 78 },
    { day: "Fri", completion: 88 },
    { day: "Sat", completion: 95 },
    { day: "Sun", completion: 82 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="day"
          tick={{ fill: "#666", fontSize: 12 }}
          axisLine={{ stroke: "#e0e0e0" }}
        />
        <YAxis
          tick={{ fill: "#666", fontSize: 12 }}
          axisLine={{ stroke: "#e0e0e0" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          formatter={(value) => [`${value}%`, "Completion"]}
        />
        <Bar
          dataKey="completion"
          fill="#009688"
          radius={[8, 8, 0, 0]}
          maxBarSize={60}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CircleChart = () => {
  const data = [
    { name: "Qur'an Recitation", value: 45 },
    { name: "Arabic Language", value: 30 },
    { name: "Islamic Studies", value: 15 },
    { name: "Tajwid", value: 10 },
  ];

  const COLORS = ["#009688", "#00796B", "#FFA726", "#FFD54F"];

  const renderLabel = (entry) => {
    return `${entry.name}: ${entry.value}`;
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          labelLine={false}
          label={renderLabel}
          outerRadius={80}
          innerRadius={50}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={50}
          wrapperStyle={{ paddingTop: "10px" }}
          iconType="circle"
          formatter={(value, entry) => `${value} (${entry.payload.value})`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
const MetricCard = ({ title, value, icon: Icon, iconColor }) => (
  <div className={`bg-white rounded-lg p-6 border border-gray-200`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-textmuted mb-1">{title}</p>
        <p className="text-3xl font-bold text-textmain">{value}</p>
      </div>
      <div className={`${iconColor} opacity-80`}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
    </div>
  </div>
);

const Classes = React.memo(
  ({ thumbnail, title, tutor, date, time, timeLeft, color }) => {
    const isDanger = color?.toLowerCase?.() === "#d32f2f";

    return (
      <li
        className="
          w-full rounded-lg bg-white border border-gray-100 
          p-4 transition-all duration-200
          flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
        "
      >
        {/* Left: Thumbnail + Info */}
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <img
            src={thumbnail}
            alt={title}
            className="
              w-16 h-12 sm:w-20 sm:h-14 
              rounded-lg object-cover flex-shrink-0
            "
          />
          <div className="min-w-0">
            <h3 className="font-montserrat font-semibold text-sm sm:text-base truncate">
              {title}
            </h3>
            <p className="font-montserrat text-gray-500 text-xs sm:text-sm truncate">
              {tutor}
            </p>
          </div>
        </div>

        {/* Middle: Date & Time */}
        <div
          className="
            flex items-center gap-1 sm:gap-2 bg-[#FFF9C480] 
            rounded-full px-3 py-1 text-xs sm:text-sm font-bold
            w-fit sm:w-auto
          "
        >
          <span>{date}</span>
          <span className="hidden sm:inline">•</span>
          <span>{time}</span>
        </div>

        {/* Right: Status + Button */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span
              className="font-montserrat font-bold text-xs sm:text-sm whitespace-nowrap"
              style={{ color }}
            >
              {timeLeft} left
            </span>
          </div>

          <Button
            text="Join Now"
            className={`
              font-montserrat text-xs font-semibold px-4 py-2 rounded-lg
              ${
                isDanger
                  ? "bg-[#D32F2F] text-white hover:bg-[#B71C1C]"
                  : "bg-dark-cyan text-white hover:bg-[#00796B]"
              }
              transition-colors duration-200 whitespace-nowrap
            `}
          />
        </div>
      </li>
    );
  }
);

const SectionCard = ({ title, children }) => (
  <div>
    <div className="border-b border-gray-200 pb-3 mb-4">
      <h2 className="font-clash font-medium text-xl">{title}</h2>
    </div>
    <div className="rounded-lg shadow-sm bg-white border border-gray-100">
      {children}
    </div>
  </div>
);

export default DashboardTeacher;
