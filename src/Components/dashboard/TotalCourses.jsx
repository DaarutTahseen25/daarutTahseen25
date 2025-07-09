import { useEffect, useState } from "react";
import Button from "../Button";

const courses = [
  {
    thumbnail: "/quran-recitation.png",
    title: "Qur’an Recitation & Tajwid",
    chapters: 5,
    lectures: 30,
    progress: 70,
    score: 80,
  },
  {
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics ",
    chapters: 5,
    lectures: 30,
    progress: 70,
    score: 80,
  },
  {
    thumbnail: "/basic-islamic.png",
    title: "Basic Islamic Manners",
    chapters: 5,
    lectures: 30,
    progress: 70,
    score: 80,
  },
  {
    thumbnail: "/short-surah.png",
    title: "Short Surah Memorisation",
    chapters: 5,
    lectures: 30,
    progress: 70,
    score: 80,
  },
  {
    thumbnail: "/prophets-stories.png",
    title: "Stories of the Prophets",
    chapters: 5,
    lectures: 30,
    progress: 100,
    score: 90,
  },
];

export default function TotalCourses() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-5 gap-x-5 w-full">
      {/* TOTAL COURSES */}
      <div className="xl:col-span-2">
        <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
          Total Courses ({courses?.length})
        </h2>
        <hr className="mt-1.5 border border-dark-grey" />
        <div
          className="rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] py-6 px-3 bg-white border border-dark-grey mt-4"
          // h-[24.375rem]
        >
          <div
            className="flex items-center justify-between lg:space-x-5 text-left font-montserrat font-bold text-sm bg-light-grey py-3 px-2.5"
            // space-x-[5.5rem] basis-[6.0625rem]
          >
            <p className="sm:basis-[15.625rem] ">Course Name</p>
            <p className="sm:basis-[8.4375rem] ">Progress</p>
            <p className="sm:basis-[6.2rem]  ">Overall Score</p>
            <p className="sm:basis-[6.5rem] ">Status</p>
          </div>

          <ul className="flex flex-col pl-1.5 sm:px-2.5 divide-y divide-dark-grey gap-y-1">
            {courses.map(
              (
                { thumbnail, title, chapters, lectures, progress, score },
                index
              ) => (
                <Course
                  key={index}
                  thumbnail={thumbnail}
                  title={title}
                  chapters={chapters}
                  lectures={lectures}
                  progress={progress}
                  score={score}
                />
              )
            )}
          </ul>
        </div>
      </div>

      {/* ASSINGMENT AND QUIZ */}
      <div className="flex flex-col gap-5 lg:gap-0 justify-between">
        <div className="">
          <h2 className="font-clash font-medium text-2xl">Assignment</h2>
          <hr className="mt-1.5 border border-dark-grey" />
          <div className="rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] py-3 px-4 bg-white border border-dark-grey mt-4">
            <button className="flex w-full justify-end cursor-pointer ">
              <span className=" h-full border border-darkest-grey text-darkest-grey font-montserrat rounded-[12px] font-bold py-2 text-sm px-5">
                See all
              </span>
            </button>

            <div className="flex space-x-3">
              <img
                src="/basic-islamic.png"
                alt="Basic Islamic Manners Image"
                className="w-[2.5rem] rounded-[5px] h-[1.8775rem]"
              />
              <p className="flex flex-col gap-y-1 pt-1">
                <span className="font-montserrat text-sm  font-bold">
                  Basic Islamic Manners
                </span>
                <span className="font-montserrat text-[10px] text-[#D32F2F] ">
                  Submit before: 20th June 2025; 12:00PM
                </span>
              </p>
            </div>

            <div className="flex gap-x-14 lg:gap-0 lg:justify-between mt-4">
              <Button
                variant="cancel"
                size="lg"
                className="border-[1px] rounded-[10px] font-montserrat font-bold text-sm w-[5.5rem] h-[2.5rem]  "
              >
                View
              </Button>
              <Button
                variant="primary"
                size="lg"
                className=" rounded-[10px] font-montserrat font-bold text-sm w-[6.5rem] h-[2.5rem]  "
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="font-clash font-medium text-2xl">Quiz</h2>
          <hr className="mt-1.5 border border-dark-grey" />
          <div className="rounded-[15px] shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] py-3 px-4 bg-white border border-dark-grey mt-4">
            <button className="flex w-full justify-end cursor-pointer ">
              <span className=" h-full border border-darkest-grey text-darkest-grey font-montserrat rounded-[12px] font-bold py-2 text-sm px-5">
                See all
              </span>
            </button>

            <div className="flex items-center space-x-3 pt-1.5">
              <img
                src="/basic-islamic.png"
                alt="Basic Islamic Manners Image"
                className="w-[2.5rem] rounded-[5px] h-[1.8775rem]"
              />
              <p className="flex flex-col">
                <span className="font-montserrat text-sm  font-bold">
                  Basic Islamic Manners
                </span>
                <span className="flex items-center space-x-4 font-montserrat text-[10px] text-darkest-grey font-semibold">
                  <span className="space-x-1">
                    <span className="h-[6px] w-[6px] bg-darkest-grey rounded-[50%] inline-block"></span>{" "}
                    10 Questions
                  </span>
                  <span className="space-x-1">
                    <span className="h-[6px] w-[6px] bg-darkest-grey rounded-[50%] inline-block"></span>{" "}
                    15 mins
                  </span>
                </span>
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="rounded-[10px] font-montserrat font-bold text-sm w-[5.5rem] h-[2.5rem] mt-4 "
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Course({ thumbnail, title, chapters, lectures, progress, score }) {
  const [progressWidth, setProgressWidth] = useState(6.625); // default to large

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setProgressWidth(screenWidth < 640 ? 2 : 6.625); // sm: <640px
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li className="flex items-center text-left justify-between space-x- lg:space-x-4 pt-4 pb-2 ">
      <div className="flex sm:items-center basis-[6.3rem] sm:basis-[15.625rem] space-x-1 sm:space-x-3">
        <img
          src={thumbnail}
          alt={title}
          className="sm:w-[2.5rem] w-[2rem] h-[2rem] rounded-[5px] sm:h-[1.8775rem]"
        />
        <p className="flex flex-col">
          <span className="font-montserrat text-[7px] sm:text-[13px] font-medium sm:font-semibold">
            {title}
          </span>
          <span className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 font-montserrat text-[8px] sm:text-[10px] text-darkest-grey font-semibold sm:font-semibold">
            <span className="space-x-1">
              <span className="h-1 w-1 sm:h-[6px] sm:w-[6px] bg-darkest-grey rounded-[50%] inline-block"></span>{" "}
              {chapters} chapters
            </span>
            <span className="space-x-1">
              <span className="h-1 w-1 sm:h-[6px] sm:w-[6px] bg-darkest-grey rounded-[50%] inline-block"></span>{" "}
              {lectures} lectures
            </span>
          </span>
        </p>
      </div>

      {/* PROGRESS */}
      <div className="basis-[4rem] sm:basis-[8.4375rem] flex items-center gap-1.5">
        <div
          className=" bg-light-grey h-[5px] rounded overflow-hidden"
          // w-[3.5rem] sm:w-[6.625rem]
          style={{ width: `${progressWidth}rem` }}
        >
          <div
            className={`h-full rounded ${
              progress < 100 ? "bg-[#360400B2]" : "bg-dark-cyan"
            }`}
            style={{ width: `${(progress / 100) * progressWidth}rem` }}
          />
        </div>

        <span className="font-montserrat text-[10px] text-darkest-grey font-semibold">
          {progress}%
        </span>
      </div>
      <p className="font-montserrat basis-[5.2rem] sm:basis-[6.2rem] text-center text-[10px] text-darkest-grey font-semibold">
        {score}%{" "}
      </p>

      {/* STATUS */}
      <div className="flex sm:space-x-3.5 basis-[3rem] sm:basis-[6.5rem] items-center">
        {progress < 100 ? (
          <p className="sm:w-[6rem] sm:h-5.5 w-[4rem] sm:pl-0 rounded-[10px] border border-darkest-grey flex justify-center space-x-1 items-center ">
            <img
              src="/progress.png"
              alt="progress icon"
              className="h-2 w-2 sm:h-2.5 sm:w-2.5 hidden sm:block"
            />
            <span className="font-montserrat text-[10px]">In progress</span>
          </p>
        ) : (
          <p className="sm:w-[6rem] sm:h-5.5 w-[4rem]  sm:pl-0 rounded-[10px] border border-darkest-grey flex justify-center space-x-1 items-center ">
            <img
              src="/checkmark.png"
              alt="checkmark"
              className="h-1.5 w-2 sm:h-[7px] sm:w-2.5 hidden sm:block"
            />
            <span className="font-montserrat text-[9px]">Completed</span>
          </p>
        )}
        <img
          src="/right-arr.png"
          alt="right arrow"
          className="sm:h-3 sm:w-2 h-2 w-1.5 hidden sm:block"
        />
      </div>
    </li>
  );
}
