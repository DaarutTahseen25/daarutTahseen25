import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { usePageTitle } from "../../hooks/usePageTitle";
import { formatDate } from "../../utils/helper";
import Button from "../../Components/Button";
import AssignmentCard from "../../Components/Assignment";
import CalendarComponent from "../../Components/CalendarComponent";
import Quiz from "../../Components/Quiz";
import StudentTable from "../../Components/TotalStudents";
import QuizCard from "./QuizCard";

const classesData = Object.freeze([
  {
    thumbnail: "/quran-recitation.png",
    title: "Qur’an Recitation & Tajwid",
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

  return (
    <section className="flex flex-col gap-10 ">
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        {/* Title */}
        <div className="max-w-7xl  mb-8 md:mb-12">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4">
              Overview
            </div>
            <h1 className="font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4">
              Dashboard
              <span className="block text-[#009688] text-2xl md:text-3xl lg:text-4xl mt-2">
                Monitor Your Impact
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto md:mx-0 rounded-full"></div>
          </div>
        </div>

        {/* Banner */}
        <section className="relative rounded-4xl overflow-hidden ">
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
                Welcome back,{" "}
                {profile?.gender === "male" ? "Ustadh" : "Ustadha"} {firstName}!
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

        {/* Secondary info */}
        <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 text-xs sm:text-sm ml-1 sm:ml-3 items-center sm:items-start">
          <p className="font-montserrat text-dark-cyan font-semibold">
            Course: Qur'an Recitation & Tajwid
          </p>
          <p className="font-montserrat text-dark-cyan font-semibold hidden sm:inline">
            ID: {profile?.teacher_id}
          </p>
        </div>
      </header>

      {/* PROGRESS */}
      <TeachingProgress />

      {/* UPCOMING CLASSES & CALENDAR */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-3 w-full">
        <div className="xl:col-span-2">
          <div className="border-b border-[#cccccc] pb-1.5 mb-4">
            <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
              Upcoming Classes
            </h2>
          </div>

          <div className="rounded shadow bg-[#fefefc] mt-4 p-3 sm:p-4 w-full">
            <ul className="flex flex-col gap-3 sm:gap-4 divide-y divide-dark-grey">
              {classesData.map((item) => (
                <Classes key={item.title} {...item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="border-b border-[#cccccc] pb-1.5 mb-4">
            <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
              Calendar
            </h2>
          </div>

          <CalendarComponent />
        </div>
      </div>

      {/* STUDENT TABLE, ASSIGNMENT & QUIZ */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-5 w-full">
        <div className="xl:col-span-2">
          <StudentTable />
        </div>
        <div className="xl:col-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
          <SectionCard title="Assignment">
            <AssignmentCard
              title="Qur’an Recitation & Tajwid"
              subtitle="Submit before: 20th June 2025; 12:00PM"
              deadline="2025-10-10T11:00:00"
              image="/quran-recitation.png"
              students={["/test1.png", "/test2.png", "/test3.png"]}
              totalSubmitted={7}
              onView={() => console.log("View clicked")}
              onCreate={() => console.log("Create clicked")}
            />
          </SectionCard>
          <SectionCard title="Quiz">
            <QuizCard
              title="Mathematics Quiz"
              date="30th October, 2025"
              time="2:00PM"
              questions={25}
              duration="40 mins"
              deadline="2025-10-10T11:00:00"
              image="/arabic.png"
              disableSeeAll:false
            />
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

/* --- REUSABLE COMPONENTS --- */
const Classes = React.memo(
  ({ thumbnail, title, tutor, date, time, timeLeft, color }) => {
    const isDanger = color?.toLowerCase?.() === "#d32f2f";

    return (
      <li
        className="
          w-full rounded-xl bg-white border border-gray-100 
          p-4 shadow-sm hover:shadow-md transition-all duration-200
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
            aria-label={`Start ${title}`}
            variant={isDanger ? "primary" : "secondary"}
            className="
              rounded-lg px-3 py-1 sm:px-4 sm:py-2 
              text-xs sm:text-sm font-semibold
              transition-colors duration-200
            "
          >
            Start
          </Button>
        </div>
      </li>
    );
  }
);

const SectionCard = ({ title, children }) => (
  <div>
    <div className="border-b border-dark-grey pb-1.5 mb-3">
      <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
        {title}
      </h2>
    </div>
    {children}
  </div>
);

const TeachingProgress = React.memo(() => {
  return (
    <div className="pb-1.5 mb-3 border-b border-dark-grey">
      <h2 className="font-clash font-medium text-center lg:text-left text-2xl">
        Teaching Progress
      </h2>
      <span className="font-montserrat text-center lg:text-left block mt-1 text-sm">
        An overview of your Teaching activities including course delivery,
        Student performance and engagement.
      </span>
    </div>
  );
});

export default DashboardTeacher;
