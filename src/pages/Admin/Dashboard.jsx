import React, { useMemo } from "react";
import { formatDate } from "../../utils/helper";
import { useAuth } from "../../contexts/AuthContext";
import { GraduationCap, Users, BookOpen, DollarSign } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const profile = user?.user || user;

  const stats = [
    {
      title: "Total Students",
      value: "2,365",
      icon: GraduationCap,
      bgColor: "bg-blue-500",
    },
    {
      title: "Total Teachers",
      value: "126",
      icon: Users,
      bgColor: "bg-teal-500",
    },
    {
      title: "Active Courses",
      value: "89",
      icon: BookOpen,
      bgColor: "bg-purple-600",
    },
    {
      title: "Total Revenue",
      value: "$45,680",
      icon: DollarSign,
      bgColor: "bg-orange-600",
    },
  ];

  const students = [
    {
      name: "Aishat Abiodun",
      email: "ibrahimabiodun@gmail.com",
      level: "Beginner",
      levelColor: "bg-teal-100 text-teal-700",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Ibrahim Adams",
      email: "ibrahimabiodun@gmail.com",
      level: "Intermediate",
      levelColor: "bg-purple-100 text-purple-700",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Jimoh Abiodun",
      email: "ibrahimabiodun@gmail.com",
      level: "Advance",
      levelColor: "bg-red-100 text-red-700",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Muhammad Rafiu",
      email: "ibrahimabiodun@gmail.com",
      level: "Beginner",
      levelColor: "bg-teal-100 text-teal-700",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
  ];

  const teachers = [
    {
      name: "Dr. Mohammed Al-Rashid",
      subject: "Quranic Studies",
      experience: "10 years",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    {
      name: "Ustadha Zaynab Ahmed",
      subject: "Arabic Language",
      experience: "5 years",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Sheikh Abdullah Omar",
      subject: "Islamic History",
      experience: "2 years",
      date: "01/03/2024",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
  ];

  const firstName = useMemo(
    () => profile?.full_name?.split(" ")[0] || "",
    [profile?.full_name]
  );
  return (
    <div className="font-clash">
      <h1 className="font-clash font-medium text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4">
        Dashboard
      </h1>

      {/* Banner */}
      <section className="relative  ">
        {/* Decorative background image on sm+ */}
        <div
          className=" absolute rounded-4xl inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right  pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative  px-4 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6">
          {/* Text */}
          <div className="flex-1 text-white text-center md:text-left">
            <div className="text-sm font-semibold tracking-tight">
              {formatDate(new Date())}
            </div>

            <div className="mt-1 font-clash font-medium text-xl md:text-2xl leading-tight">
              Welcome back, Administrator!
            </div>

            {/* Quote hidden on small screens */}
            <p className="mt-3 text-sm italic text-white/90 hidden md:block">
              “The best among you are those who learn and teach the Qur’an”
            </p>
          </div>

          {/* Illustration hidden on small devices */}
          <div className="flex-shrink-0 self-center md:self-end absolute top-[-10%] right-[-1rem]">
            <img
              src="/admin-dashb-hero.png"
              alt="Teacher illustration"
              className="hidden md:block w-[18rem] h-[12.350625rem] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div>
        <div className="w-full flex flex-wrap gap-6 justify-center pt-[50px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow duration-300 flex-1 min-w-[280px]"
            >
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">
                  {stat.title}
                </p>
                <p className="text-3xl font-medium text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`${stat.bgColor} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration list */}
      <div className="py-8">
        <div className="w-full flex flex-wrap gap-6">

          {/* Recent Student Registration */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex-1 min-w-[320px]">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              Recent Student Registration
            </h2>
            <div className="space-y-4">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {student.name}
                      </p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${student.levelColor}`}
                    >
                      {student.level}
                    </span>
                    <span className="text-sm text-gray-600 text-center min-w-[90px]">
                      {student.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Teacher Registration */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex-1 min-w-[320px]">
            <h2 className="text-2xl font-medium font-clash text-gray-900 mb-6">
              Recent Teacher Registration
            </h2>
            <div className="space-y-4">
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold font-clash text-gray-900">
                        {teacher.name}
                      </p>
                      <p className="text-sm text-gray-500">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm text-gray-600 min-w-[70px] text-center font-medium">
                      {teacher.experience}
                    </span>
                    <span className="text-sm text-gray-600 min-w-[90px] text-center">
                      {teacher.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
