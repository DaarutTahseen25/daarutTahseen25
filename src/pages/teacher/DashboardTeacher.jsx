import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
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
  const { user } = useAuth();
  const profile = user?.user || user;

  const firstName = useMemo(
    () => profile?.full_name?.split(" ")[0] || "",
    [profile?.full_name]
  );

  return (
    <section className='flex flex-col gap-10'>
      {/* HEADER */}
      <div>
        <h1 className='font-clash font-medium text-3xl sm:text-[40px] text-center lg:text-left text-accent'>
          Dashboard
        </h1>

        <div className='bg-[url(/dashboard-cal.png)] bg-cover rounded-4xl mt-4 py-10 md:py-8 pr-4 pl-4 sm:pl-10 flex w-full justify-between'>
          <p className='flex flex-col gap-y-2 sm:gap-y-4 font-montserrat place-self-center text-white'>
            <span className='text-sm font-semibold'>
              {formatDate(new Date())}
            </span>
            <span className='font-clash font-medium text-xl md:text-2xl'>
              Welcome back, Ustadh {firstName}!
            </span>
            <span className='text-sm italic'>
              “The best among you are those who learn and teach the Qur’an”
            </span>
          </p>
          <img
            src='/dashb-student.png'
            alt=''
            className='w-[6rem] h-[10rem] sm:w-[8.895rem] sm:h-[12.350625rem]'
          />
        </div>

        <div className='flex flex-row gap-x-4 text-xs ml-3'>
          <p className='font-montserrat text-dark-cyan font-semibold sm:mt-2'>
            Course: Qur'an Recitation & Tajwid
          </p>
          <p className='font-montserrat text-dark-cyan font-semibold sm:mt-2'>
            ID: {profile?.teacher_id}
          </p>
        </div>
      </div>

      {/* PROGRESS */}
      <TeachingProgress />

      {/* UPCOMING CLASSES & CALENDAR */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-3 w-full'>
        <div className='xl:col-span-2'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Upcoming Classes
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <div className='rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-[17.5rem] bg-white border border-dark-grey mt-4'>
            <ul className='flex flex-col px-3 divide-y divide-dark-grey'>
              {classesData.map((item) => (
                <Classes key={item.title} {...item} />
              ))}
            </ul>
          </div>
        </div>

        <div className='xl:col-span-1'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Calendar
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <CalendarComponent />
        </div>
      </div>

      {/* STUDENT TABLE, ASSIGNMENT & QUIZ */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-5 w-full'>
        <div className='xl:col-span-2'>
          <StudentTable />
        </div>
        <div className='xl:col-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4'>
          <SectionCard title='Assignment'>
            <AssignmentCard />
          </SectionCard>
          <SectionCard title='Quiz'>
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
    return (
      <li className='flex items-center gap-x-1 sm:gap-x-0 justify-between text-left py-8'>
        <img
          src={thumbnail}
          alt={title}
          className='w-[3.5rem] h-[2.5rem] sm:w-[4.95625rem] sm:h-[3.7225rem]'
        />
        <p className='flex flex-col'>
          <span className='font-montserrat font-semibold text-xs sm:text-sm'>
            {title}
          </span>
          <span className='font-montserrat text-darkest-grey font-semibold text-[10px]'>
            {tutor}
          </span>
        </p>
        <span className='bg-[#FFF9C480] py-1 px-2 sm:px-[19px] font-montserrat font-bold text-[10px] rounded-[10px]'>
          {date} <span className='hidden sm:inline'>{time}</span>
        </span>
        <p className='space-x-1 flex items-center'>
          <span
            style={{ backgroundColor: color }}
            className='h-[6px] w-[6px] rounded-[50%] sm:inline-block hidden'></span>
          <span
            style={{ color }}
            className='font-montserrat font-bold text-[10px]'>
            {timeLeft} left
          </span>
        </p>
        <Button
          variant={color === "#D32F2F" ? "primary" : "secondary"}
          className='rounded-[10px] w-[3.5rem] h-[2rem] text-xs sm:text-sm sm:w-[5.125rem] sm:h-[2.5rem]'>
          Start
        </Button>
      </li>
    );
  }
);

const SectionCard = ({ title, children }) => (
  <div>
    <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
      {title}
    </h2>
    <hr className='mt-1.5 border border-dark-grey mb-3' />
    {children}
  </div>
);

const TeachingProgress = React.memo(() => {
  return (
    <div>
      <h2 className='font-clash font-medium text-center lg:text-left text-2xl'>
        Teaching Progress
      </h2>
      <span className='font-montserrat text-center lg:text-left block mt-1 text-sm'>
        An overview of your Teaching activities including course delivery,
        Student perfomance and engagement.
      </span>
      <hr className='mt-1.5 border border-dark-grey' />
      {/* Cards go here (same as your original, extracted if needed) */}
    </div>
  );
});

export default DashboardTeacher;
