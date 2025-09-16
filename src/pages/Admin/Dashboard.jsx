import React from "react";
import { formatDate } from "../../utils/helper";
import { useAuth } from "../../contexts/AuthContext";
import StatsCard from "./StatsCard";
import {
  BookOpen,
  DollarSign,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";
import { useGetUsers } from "./useGetUsers";
import DashTitle from "../../Components/DashTitle";

const Dashboard = () => {
  const { user } = useAuth();
  const { users: teachers } = useGetUsers({ role: "teacher" });
  const { users: students } = useGetUsers({ role: "student" });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Dashboard"
          subtitle="Overview of key metrics and recent activity"
        />
      </div>

      {/* Banner */}
      <section className="relative rounded-4xl overflow-hidden mb-5 ">
        {/* Decorative background image on sm+ */}
        <div
          className=" absolute inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right  pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative  px-4 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6">
          {/* Text */}
          <div className="flex-1 text-white text-center md:text-left">
            <div className="text-sm font-semibold tracking-tight">
              {formatDate(new Date())}
            </div>

            <div className="mt-1 font-clash font-semibold text-xl md:text-2xl leading-tight">
              Welcome back, Admin {user?.full_name.split(" ")[0]}!
            </div>

            {/* Quote hidden on small screens */}
            <p className="mt-3 text-sm italic text-white/90 hidden md:block">
              “The best among you are those who learn and teach the Qur’an”
            </p>
          </div>

          {/* Illustration hidden on small devices */}
          <div className="flex-shrink-0 self-center md:self-end">
            <img
              src="/dashb-student.png"
              alt="Teacher illustration"
              className="hidden md:block w-[8.895rem] h-[12.350625rem] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/*  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          label="Total Students"
          value={students.length}
          icon={Users}
          color="#3b82f6"
        />
        <StatsCard
          label="Total Teachers"
          value={teachers.length}
          icon={UserRound}
          color="#10b981"
        />
        <StatsCard
          label="Active Courses"
          value={89}
          icon={BookOpen}
          color="#8b5cf6"
        />
        <StatsCard
          label="Total Revenue"
          value={45680}
          icon={DollarSign}
          color="#f59e0b"
        />
      </div>
    </div>
  );
};

export default Dashboard;
