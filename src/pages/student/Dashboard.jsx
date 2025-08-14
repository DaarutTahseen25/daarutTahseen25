import React, { useMemo, memo } from "react";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { formatDate } from "../../utils/helper";
import CalendarComponent from "../../Components/CalendarComponent";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import StudentBoard from "../../Components/StudentBoard";

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
          <div className='border-b border-[#cccccc] pb-1.5 mb-4'>
            <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
              Upcoming Classes
            </h2>
          </div>

          <div className='rounded shadow bg-[#fefefc] mt-4 p-3 sm:p-4 w-full'>
            <ul className='flex flex-col gap-3 sm:gap-4 divide-y divide-dark-grey'>
              {classesData.map((item) => (
                <Classes key={item.title} {...item} />
              ))}
            </ul>
          </div>
        </div>

        <div className='xl:col-span-1'>
          <div className='border-b border-[#cccccc] pb-1.5 mb-4'>
            <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
              Calendar
            </h2>
          </div>

          <CalendarComponent />
        </div>
      </div>

      <StudentBoard />
    </section>
  );
};

/* ======================
   Header Section
====================== */
const Header = memo(({ firstName = "Student" }) => {
  return (
    <header className='flex flex-col gap-4'>
      {/* Title */}
      <h1 className='font-clash font-medium text-3xl sm:text-[40px] text-center lg:text-left text-accent'>
        Dashboard
      </h1>

      {/* Hero banner - uses a subtle gradient as the base and the decorative image as a low-opacity overlay on larger screens */}
      <section className='relative rounded-4xl overflow-hidden '>
        {/* Decorative background image (only visible on sm+ as an overlay) */}
        <div
          className="absolute inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right pointer-events-none"
          aria-hidden='true'
        />

        {/* Content container */}
        <div className='relative  px-4 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6'>
          {/* Text block */}
          <div className='flex-1 text-white text-center md:text-left'>
            <div className='text-sm font-semibold tracking-tight'>
              {formatDate(new Date())}
            </div>

            <div className='mt-1 font-clash font-semibold text-2xl sm:text-3xl leading-tight'>
              Welcome back, <span className='capitalize'>{firstName}</span>!
            </div>

            {/* Quote - hide on small screens for cleaner mobile layout */}
            <p className='mt-3 text-sm italic text-white/90 hidden md:block'>
              “The best among you are those who learn and teach the Qur’an”
            </p>

            {/* Small actions / quick stats - show on md+ only, hidden on small devices */}
            <div className='mt-4 hidden md:flex items-center gap-4 text-xs sm:text-sm'>
              <div className='bg-white/10 px-3 py-1 rounded-full'>
                Recent: 2 new lessons
              </div>
              <div className='bg-white/10 px-3 py-1 rounded-full'>
                Streak: 3 days
              </div>
            </div>
          </div>

          {/* Illustration - hidden on small screens to reduce visual noise and save bandwidth */}
          <div className='flex-shrink-0 self-center md:self-end'>
            <LazyLoadImage
              src='/dashb-student.png'
              alt='Student illustration'
              height='auto'
              effect='blur'
              className='hidden md:block w-[8.5rem] h-[12rem] sm:w-[8.895rem] sm:h-[12.350625rem] object-contain'
              decoding='async'
            />
          </div>
        </div>
      </section>

      {/* Secondary info row - keep compact on mobile, reveal more on sm+ */}
      <div className='flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 text-xs sm:text-sm ml-1 sm:ml-3 items-start sm:items-center'>
        <p className='font-montserrat text-dark-cyan font-semibold'>
          Level: Beginner (Class 1)
        </p>

        {/* Optional ID or extra meta - hidden on very small screens to avoid wrapping */}
        <p className='font-montserrat text-dark-cyan font-semibold hidden sm:inline'>
          ID: 123456
        </p>
      </div>
    </header>
  );
});

/* ======================
   Learning Progress Section
====================== */
const LearningProgress = memo(() => (
  <div>
    <div className='pb-1.5 mb-3 border-b border-dark-grey'>
      <h2 className='font-clash font-medium text-center lg:text-left text-2xl'>
        Learning Progress
      </h2>
      <span className='font-montserrat text-center lg:text-left block mt-1 text-sm'>
        An overview of your activities including course progress, live class
        participation and assignments.
      </span>
    </div>

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
  <div className='rounded p-2.5 shadow h-[15.625rem] bg-white'>{children}</div>
));

const ListCard = memo(({ items }) => (
  <ul className='py-[1.625rem] px-[0.8125rem] rounded shadow bg-white h-[15.625rem] flex flex-col gap-8 justify-center'>
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

const Classes = React.memo(
  ({ thumbnail, title, tutor, date, time, timeLeft, color }) => {
    const isDanger = color?.toLowerCase?.() === "#d32f2f";

    return (
      <li
        className='
          w-full rounded-xl bg-white border border-gray-100 
          p-4 shadow-sm hover:shadow-md transition-all duration-200
          flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
        '>
        {/* Left: Thumbnail + Info */}
        <div className='flex items-start sm:items-center gap-3 min-w-0'>
          <img
            src={thumbnail}
            alt={title}
            className='
              w-16 h-12 sm:w-20 sm:h-14 
              rounded-lg object-cover flex-shrink-0
            '
          />
          <div className='min-w-0'>
            <h3 className='font-montserrat font-semibold text-sm sm:text-base truncate'>
              {title}
            </h3>
            <p className='font-montserrat text-gray-500 text-xs sm:text-sm truncate'>
              {tutor}
            </p>
          </div>
        </div>

        {/* Middle: Date & Time */}
        <div
          className='
            flex items-center gap-1 sm:gap-2 bg-[#FFF9C480] 
            rounded-full px-3 py-1 text-xs sm:text-sm font-bold
            w-fit sm:w-auto
          '>
          <span>{date}</span>
          <span className='hidden sm:inline'>•</span>
          <span>{time}</span>
        </div>

        {/* Right: Status + Button */}
        <div className='flex items-center gap-3 flex-shrink-0'>
          <div className='flex items-center gap-2'>
            <span
              className='h-2 w-2 rounded-full'
              style={{ backgroundColor: color }}
            />
            <span
              className='font-montserrat font-bold text-xs sm:text-sm whitespace-nowrap'
              style={{ color }}>
              {timeLeft} left
            </span>
          </div>

          <Button
            aria-label={`Start ${title}`}
            variant={isDanger ? "primary" : "secondary"}
            className='
              rounded-lg px-3 py-1 sm:px-4 sm:py-2 
              text-xs sm:text-sm font-semibold
              transition-colors duration-200
            '>
            Start
          </Button>
        </div>
      </li>
    );
  }
);

export default Dashboard;
