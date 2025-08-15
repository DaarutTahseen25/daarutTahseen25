import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { usePageTitle } from "../../hooks/usePageTitle";
import { formatDate } from "../../utils/helper";
import Button from "../../Components/Button";
import AssignmentCard from "../../Components/Assignment";
import CalendarComponent from "../../Components/CalendarComponent";
import Quiz from "../../Components/Quiz";
import StudentTable from "../../Components/TotalStudents";

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
    <section className="flex flex-col gap-10">
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        {/* Title */}
        <h1 className="font-clash font-medium text-3xl sm:text-[40px] text-center lg:text-left text-accent">
          Dashboard
        </h1>

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
                Welcome back, Ustadh {firstName}!
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
        <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 text-xs sm:text-sm ml-1 sm:ml-3 items-start sm:items-center">
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
            <AssignmentCard />
          </SectionCard>
          <SectionCard title="Quiz">
            <Quiz />
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
      <li className="w-full rounded-lg border border-gray-100 bg-white p-2 sm:p-4">
        <div
          className="
            flex flex-col gap-2
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          {/* Left: Thumbnail + Title/Tutor */}
          <div className="flex items-center gap-2 min-w-0 sm:min-w-[40%]">
            <img
              src={thumbnail}
              alt={title}
              className="w-14 h-10 sm:w-20 sm:h-14 rounded-md object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="font-montserrat font-semibold text-sm sm:text-base truncate">
                {title}
              </p>
              <p className="font-montserrat text-darkest-grey font-medium text-xs sm:text-sm truncate">
                {tutor}
              </p>
            </div>
          </div>

          {/* Middle: Date & Time */}
          <span
            className="
              inline-flex items-center justify-center
              bg-[#FFF9C480] rounded-[10px]
              px-2 py-0.5 sm:px-4 sm:py-1
              font-montserrat font-bold
              text-[10px] sm:text-xs
              flex-shrink-0
            "
          >
            {date}
            <span className="hidden sm:inline mx-1">•</span>
            <span className="block sm:inline">{time}</span>
          </span>

          {/* Right: Time-left + Start */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <p className="flex items-center gap-1">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full inline-block"
                style={{ backgroundColor: color }}
              />
              <span
                className="font-montserrat font-bold text-[10px] sm:text-xs whitespace-nowrap"
                style={{ color }}
              >
                {timeLeft} left
              </span>
            </p>

            <Button
              aria-label={`Start ${title}`}
              variant={isDanger ? "primary" : "secondary"}
              className="
                rounded-[10px]
                w-[3.5rem] h-[1.8rem]
                sm:w-[5.125rem] sm:h-[2.5rem]
                text-[10px] sm:text-sm
              "
            >
              Start
            </Button>
          </div>
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
