import React, { useMemo, memo } from "react";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { formatDate } from "../../utils/helper";
import CalendarComponent from "../../Components/CalendarComponent";
import TotalCourses from "../../Components/TotalCourses";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Static classes data
const classesData = Object.freeze([
  {
    id: 1,
    thumbnail: "/quran-recitation.png",
    title: "Qur’an Recitation & Tajwid",
    tutor: "By Abdulmalik Ahmad",
    date: "15th July, 2025",
    time: "2:00PM",
    timeLeft: "2 min",
    color: "#D32F2F",
  },
  {
    id: 2,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics ",
    tutor: "By Ibrahim Lawal",
    date: "15th July, 2025",
    time: "4:00PM",
    timeLeft: "2 hrs",
    color: "#009688",
  },
]);

const Dashboard = () => {
  const { user } = useAuth();

  const firstName = useMemo(() => {
    const profile = user?.user || user;
    return profile?.full_name?.split(" ")[0] || "";
  }, [user]);

  return (
    <section className='flex flex-col gap-10'>
      <Header firstName={firstName} />

      <LearningProgress />

      {/* Upcoming Classes + Calendar */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-3 w-full'>
        <div className='xl:col-span-2'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Upcoming Classes
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <div className='rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-[17.5rem] bg-white border border-dark-grey mt-4'>
            <ul className='flex flex-col px-3 divide-y divide-dark-grey'>
              {classesData.map((item) => (
                <Classes key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>

        <div className='xl:col-span-1'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Calendar
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <div className='w-full mx-auto lg:mx-0'>
            <CalendarComponent />
          </div>
        </div>
      </div>

      <TotalCourses />
    </section>
  );
};

/* ======================
   Header Section
====================== */
const Header = memo(({ firstName }) => (
  <div>
    <h1 className='font-clash font-medium text-3xl sm:text-[40px] text-center lg:text-left text-accent'>
      Dashboard
    </h1>
    <div className='bg-[url(/dashboard-cal.png)] bg-cover rounded-4xl mt-4 py-10 md:py-8 pr-4 pl-4 sm:pl-10 flex w-full justify-between'>
      <p className='flex flex-col gap-y-2 sm:gap-y-4 font-montserrat place-self-center text-white'>
        <span className='text-sm font-semibold'>{formatDate(new Date())}</span>
        <span className='font-clash font-medium text-2xl'>
          Welcome back, {firstName}!
        </span>
        <span className='text-sm italic'>
          “The best among you are those who learn and teach the Qur’an”
        </span>
      </p>
      <LazyLoadImage
        src='/dashb-student.png'
        alt='Student'
        height='auto'
        effect='blur'
        className='w-[6rem] h-[10rem] sm:w-[8.895rem] sm:h-[12.350625rem]'
        decoding='async'
      />
    </div>
    <p className='font-montserrat text-sm text-dark-cyan font-semibold sm:mt-2'>
      Level: Beginner (Class 1)
    </p>
  </div>
));

/* ======================
   Learning Progress Section
====================== */
const LearningProgress = memo(() => (
  <div>
    <h2 className='font-clash font-medium text-center lg:text-left text-2xl'>
      Learning Progress
    </h2>
    <span className='font-montserrat text-center lg:text-left block mt-1 text-sm'>
      An overview of your activities including course progress, live class
      participation and assignments.
    </span>
    <hr className='mt-1.5 border border-dark-grey' />

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3 w-full mt-4'>
      {/* 1st Card */}
      <Card>
        <h5 className='font-semibold font-montserrat text-sm'>
          Overall Performance
        </h5>
        <p className='font-semibold font-montserrat text-[10px] text-darkest-grey'>
          Course completion rate
        </p>
        <div className='border-[1.2rem] mt-2 border-dark-cyan border-r-dark-grey rounded-[50%] h-[11.32rem] w-[11.32rem] flex flex-col justify-center justify-self-center items-center gap-1'>
          <span className='font-clash text-2xl font-medium'>80%</span>
          <span className='text-sm font-semibold text-darkest-grey font-montserrat'>
            PRO LEARNER
          </span>
        </div>
      </Card>

      {/* 2nd Card */}
      <ListCard
        items={[
          {
            img: "/total-course.png",
            label: "Total enroll courses",
            value: "5",
            border: "border-dark-cyan",
          },
          {
            img: "/course-completed.png",
            label: "Course completed",
            value: "5",
            border: "border-dark-grey border-r-[#360400]",
          },
          {
            img: "/hours-spent.png",
            label: (
              <>
                <span className='text-sm'>Hours spent</span>
                <span className='text-[10px] text-darkest-grey'>
                  Total hours spent in courses
                </span>
              </>
            ),
            value: "120h",
            border: "border-[#D32F2F] border-s-dark-grey",
          },
        ]}
      />

      {/* 3rd Card */}
      <ListCard
        items={[
          {
            img: "/attendance.png",
            label: "Attendance",
            value: "70%",
            border: "border-[#3D149D] border-l-dark-grey",
          },
          {
            img: "/quiz-completed.png",
            label: "Quiz practiced",
            value: "20/30",
            border: "border-[#9F5B0C] border-l-dark-grey",
          },
          {
            img: "/assignments-done.png",
            label: "Assignment done",
            value: "10/20",
            border: "border-t-[#B71CB9] border-r-[#B71CB9] border-dark-grey",
          },
        ]}
      />
    </div>
  </div>
));

/* ======================
   Reusable Components
====================== */
const Card = memo(({ children }) => (
  <div className='rounded-[15px] p-2.5 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-[15.625rem] bg-white'>
    {children}
  </div>
));

const ListCard = memo(({ items }) => (
  <ul className='py-[1.625rem] px-[0.8125rem] rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] bg-white h-[15.625rem] flex flex-col gap-8 justify-center'>
    {items.map(({ img, label, value, border }, idx) => (
      <li key={idx} className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src={img}
            alt=''
            className='h-[2.375rem] w-[2.375rem]'
            loading='lazy'
          />
          <p className='font-montserrat text-sm font-semibold'>{label}</p>
        </div>
        <span
          className={`h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center ${border} font-montserrat text-[10px] font-semibold`}>
          {value}
        </span>
      </li>
    ))}
  </ul>
));

const Classes = memo(
  ({ thumbnail, title, tutor, date, time, timeLeft, color }) => (
    <li className='flex items-center gap-x-1 sm:gap-x-0 justify-between text-left py-6'>
      <img
        src={thumbnail}
        alt={title}
        className='w-[3.5rem] h-[2.5rem] sm:w-[4.95625rem] sm:h-[3.7225rem]'
        loading='lazy'
      />
      <p className='flex flex-col'>
        <span className='font-montserrat text-[8px] sm:text-[10px] sm:text-sm font-semibold'>
          {title}
        </span>
        <span className='font-montserrat text-[8px] sm:text-[10px] text-darkest-grey font-semibold'>
          {tutor}
        </span>
      </p>
      <span className='bg-[#FFF9C480] py-1 px-2 sm:px-[19px] font-montserrat text-[8px] sm:text-[10px] font-bold rounded-[10px]'>
        {date} <span className='hidden sm:inline'>{time}</span>
      </span>
      <p className='space-x-1 flex items-center'>
        <span
          style={{ backgroundColor: color }}
          className='h-[6px] w-[6px] rounded-[50%] sm:inline-block hidden'></span>
        <span
          style={{ color }}
          className='font-montserrat text-[8px] sm:text-[10px] font-bold'>
          {timeLeft} left
        </span>
      </p>
      <Button
        variant={color === "#D32F2F" ? "primary" : "secondary"}
        className='rounded-[10px] w-[3.5rem] h-[2rem] text-[10px] sm:text-sm sm:w-[5.125rem] sm:h-[2.5rem]'>
        Join
      </Button>
    </li>
  )
);

export default Dashboard;
