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
const Header = memo(({ firstName }) => (
  <div className='flex flex-col gap-4'>
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
    <div className='flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 text-xs sm:text-sm ml-1 sm:ml-3'>
      <p className='font-montserrat text-dark-cyan font-semibold'>
        Level: Beginner (Class 1)
      </p>
      {/* <p className='font-montserrat text-dark-cyan font-semibold'>
        ID: {profile?.matric_number}
      </p> */}
    </div>
  </div>
));

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
      <li className='w-full rounded-lg border border-gray-100 bg-white p-2 sm:p-4'>
        <div
          className='
            flex flex-col gap-2
            sm:flex-row sm:items-center sm:justify-between
          '>
          {/* Left: Thumbnail + Title/Tutor */}
          <div className='flex items-center gap-2 min-w-0 sm:min-w-[40%]'>
            <img
              src={thumbnail}
              alt={title}
              className='w-14 h-10 sm:w-20 sm:h-14 rounded-md object-cover flex-shrink-0'
            />
            <div className='min-w-0'>
              <p className='font-montserrat font-semibold text-sm sm:text-base truncate'>
                {title}
              </p>
              <p className='font-montserrat text-darkest-grey font-medium text-xs sm:text-sm truncate'>
                {tutor}
              </p>
            </div>
          </div>

          {/* Middle: Date & Time */}
          <span
            className='
              inline-flex items-center justify-center
              bg-[#FFF9C480] rounded-[10px]
              px-2 py-0.5 sm:px-4 sm:py-1
              font-montserrat font-bold
              text-[10px] sm:text-xs
              flex-shrink-0
            '>
            {date}
            <span className='hidden sm:inline mx-1'>•</span>
            <span className='block sm:inline'>{time}</span>
          </span>

          {/* Right: Time-left + Start */}
          <div className='flex items-center gap-2 sm:gap-4 flex-shrink-0'>
            <p className='flex items-center gap-1'>
              <span
                aria-hidden='true'
                className='h-1.5 w-1.5 rounded-full inline-block'
                style={{ backgroundColor: color }}
              />
              <span
                className='font-montserrat font-bold text-[10px] sm:text-xs whitespace-nowrap'
                style={{ color }}>
                {timeLeft} left
              </span>
            </p>

            <Button
              aria-label={`Start ${title}`}
              variant={isDanger ? "primary" : "secondary"}
              className='
                rounded-[10px]
                w-[3.5rem] h-[1.8rem]
                sm:w-[5.125rem] sm:h-[2.5rem]
                text-[10px] sm:text-sm
              '>
              Start
            </Button>
          </div>
        </div>
      </li>
    );
  }
);

export default Dashboard;
