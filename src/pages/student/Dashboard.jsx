import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { formatDate } from "../../utils/helper";
import CalendarComponent from "../../Components/CalendarComponent";
import TotalCourses from "../../Components/TotalCourses";

const classes = [
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
];

const Dashboard = () => {
  const { user } = useAuth();
  const profile = user?.user || user;
  const firstName = profile?.full_name?.split(" ")[0] || "";
  return (
    <section className='flex flex-col gap-10 '>
      <div className=''>
        <h1 className='font-clash font-medium text-3xl sm:text-[40px]  text-center lg:text-left text-accent '>
          Dashboard
        </h1>
        <div className='bg-[url(/dashboard-cal.png)] bg-cover rounded-4xl mt-4 py-10 md:py-8 pr-4 pl-4 sm:pl-10 flex w-full justify-between '>
          <p className='flex flex-col gap-y-2 sm:gap-y-4 font-montserrat place-self-center text-white '>
            <span className='text-sm font-semibold'>
              {formatDate(new Date())}
            </span>
            <span className='font-clash font-medium text-2xl'>
              Welcome back, {firstName}!
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
        <p className='font-montserrat text-sm text-dark-cyan font-semibold sm:mt-2'>
          Level: Beginner (Class 1)
        </p>
      </div>
      <div className=''>
        <h2 className='font-clash font-medium text-center lg:text-left text-2xl'>
          Learning Progress
        </h2>
        <span className='font-montserrat text-center lg:text-left block mt-1 text-sm'>
          An overview of your activities including course progress, live class
          participation and assignments.
        </span>
        <hr className='mt-1.5 border border-dark-grey' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3  w-full mt-4'>
          {/* 1ST CARD */}
          <div className='rounded-[15px] p-2.5 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-[15.625rem] bg-white '>
            <h5 className='font-semibold font-montserrat text-sm'>
              Overall Performance
            </h5>
            <p className='font-semibold font-montserrat text-[10px] text-darkest-grey '>
              Course completion rate
            </p>
            <div className='border-[1.2rem] mt-2 border-dark-cyan border-r-dark-grey rounded-[50%] h-[11.32rem] w-[11.32rem] flex flex-col justify-center justify-self-center items-center gap-1 '>
              <span className='font-clash text-2xl font-medium'>80%</span>
              <span className='text-sm font-semibold text-darkest-grey font-montserrat'>
                PRO LEARNER
              </span>
            </div>
          </div>

          {/* 2ND CARD */}
          <ul className='py-[1.625rem] px-[0.8125rem] rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] bg-white h-[15.625rem] flex flex-col gap-8 justify-center '>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/total-course.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='font-montserrat text-sm font-semibold'>
                  Total enroll courses
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-dark-cyan font-montserrat text-[10px] font-semibold'>
                5
              </span>
            </li>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/course-completed.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='font-montserrat text-sm font-semibold'>
                  Course completed
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-dark-grey border-r-[#360400] font-montserrat text-[10px] font-semibold '>
                5
              </span>
            </li>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/hours-spent.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='flex flex-col text-left font-montserrat font-semibold'>
                  <span className='text-sm'>Hours spent</span>
                  <span className='text-[10px] text-darkest-grey'>
                    Total hours spent in courses
                  </span>
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-[#D32F2F] border-s-dark-grey font-montserrat text-[10px] font-semibold '>
                120h
              </span>
            </li>
          </ul>

          {/* 3RD CARD */}
          <ul className='py-[1.625rem] px-[0.8125rem] rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] bg-white h-[15.625rem] flex flex-col gap-8 justify-center '>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/attendance.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='font-montserrat text-sm font-semibold'>
                  Attendance
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-[#3D149D] border-l-dark-grey font-montserrat text-[10px] font-semibold'>
                70%
              </span>
            </li>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/quiz-completed.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='font-montserrat text-sm font-semibold'>
                  Quiz practiced
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-[#9F5B0C] border-l-dark-grey font-montserrat text-[10px] font-semibold '>
                20/30
              </span>
            </li>
            <li className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img
                  src='/assignments-done.png'
                  alt=''
                  className='h-[2.375rem] w-[2.375rem]'
                />
                <p className='font-montserrat text-sm font-semibold'>
                  Assignment done
                </p>
              </div>
              <span className='h-[2.5rem] w-[2.5rem] border-4 rounded-[50%] flex justify-center items-center border-t-[#B71CB9] border-r-[#B71CB9] border-dark-grey font-montserrat text-[10px] font-semibold '>
                10/20
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3  gap-y-5  gap-x-3 w-full'>
        <div className='xl:col-span-2'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Upcoming Classes
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <div
            className='rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-[17.5rem] bg-white border border-dark-grey mt-4'
            // 13.625rem
          >
            <ul className='flex flex-col px-3 divide-y divide-dark-grey '>
              {classes?.map(
                ({ thumbnail, title, tutor, date, time, timeLeft, color }) => (
                  <Classes
                    key={color}
                    title={title}
                    tutor={tutor}
                    thumbnail={thumbnail}
                    date={date}
                    time={time}
                    timeLeft={timeLeft}
                    color={color}
                  />
                )
              )}
            </ul>
          </div>
        </div>

        {/* CALENDAR */}

        <div className='xl:col-span-1'>
          <h2 className='font-clash font-medium text-2xl text-center lg:text-left'>
            Calendar
          </h2>
          <hr className='mt-1.5 border border-dark-grey' />
          <div className='w-full'>
            <div className='w-full mx-auto lg:mx-0 '>
              <CalendarComponent />
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <TotalCourses />
      </div>
    </section>
  );
};

function Classes({ thumbnail, title, tutor, date, time, timeLeft, color }) {
  return (
    <li className=' flex items-center gap-x-1 sm:gap-x-0 justify-between text-left py-6'>
      <img
        src={thumbnail}
        alt={title}
        className='w-[3.5rem] h-[2.5rem] sm:w-[4.95625rem] sm:h-[3.7225rem]'
      />
      <p className='flex flex-col'>
        <span className='font-montserrat text-[8px] sm:text-[10px] sm:text-sm font-semibold'>
          {title}
        </span>
        <span className='font-montserrat text-[8px] sm:text-[10px] text-darkest-grey font-semibold'>
          {tutor}
        </span>
      </p>
      <span className='bg-[#FFF9C480] py-1 px-2 sm:px-[19px] font-montserrat text-[8px] sm:text-[10px] font-bold rounded-[10px] '>
        {date} <span className='hidden sm:inline'>{time}</span>
      </span>
      <p className='space-x-1 flex items-center'>
        <span
          style={{ backgroundColor: color }}
          className={`h-[6px] w-[6px] py  rounded-[50%] sm:inline-block hidden`}></span>
        <span
          style={{ color: color }}
          className={` font-montserrat text-[8px] sm:text-[10px] font-bold`}>
          {timeLeft} left
        </span>
      </p>
      <Button
        variant={color === "#D32F2F" ? "primary" : "secondary"}
        className='rounded-[10px] w-[3.5rem] h-[2rem] text-[10px] sm:text-sm sm:w-[5.125rem] sm:h-[2.5rem]'>
        Join
      </Button>
    </li>
  );
}

// function CourseSummary() {
//   return (
// <li className="w-full flex items-center justify-between">
//   <div className="flex items-center">
//     <img src="" alt="" className="" />
//     <p className=""></p>
//   </div>
// </li>
//   );
// }
// function CourseActivity() {}
// const Calendar = () => {
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const daysInMonth = 31;
//   const firstDayOfMonth = 2; // July 1st starts on Tuesday (index 2)

//   const specialDays = [7, 16, 19];
//   const highlightedDay = 4;

//   const calendarDays = Array(firstDayOfMonth).fill(null).concat(
//     Array.from({ length: daysInMonth }, (_, i) => i + 1)
//   );

//   return (
//     <div className="max-w-sm mx-auto mt-10 rounded-2xl shadow-lg p-6 bg-white">
//       <h2 className="text-center font-bold text-lg mb-4">July</h2>
//       <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
//         {daysOfWeek.map((day) => (
//           <div key={day}>{day}</div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-2 text-center text-sm">
//         {calendarDays.map((day, index) =>
//           day === null ? (
//             <div key={index}></div>
//           ) : (
//             <div key={index} className="relative">
//               <div
//                 className={`h-10 w-10 mx-auto flex items-center justify-center rounded ${
//                   day === highlightedDay
//                     ? "bg-teal-600 text-white font-semibold"
//                     : "text-gray-800"
//                 }`}
//               >
//                 {day}
//               </div>
//               {specialDays.includes(day) && (
//                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-red-500 mt-1"></span>
//               )}
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

export default Dashboard;
