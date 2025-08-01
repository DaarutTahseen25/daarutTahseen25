import { useState } from "react";
import Button from "./Button";

const students = [
  {
    name: "Abdulkabir Aishat",
    avatar: "/avatars/aishat.jpg",
    progress: 70,
    score: 80,
  },
  {
    name: "Adams Ibrahim",
    avatar: "/avatars/adams.jpg",
    progress: 70,
    score: 80,
  },
  {
    name: "Jafar Ibrahim",
    avatar: "/avatars/jafar.jpg",
    progress: 70,
    score: 80,
  },
  {
    name: "Jimoh Jamiu",
    avatar: "/avatars/jimoh.jpg",
    progress: 70,
    score: 80,
  },
  {
    name: "Muhammad Rafiu",
    avatar: "/avatars/rafiu.jpg",
    progress: 100,
    score: 80,
  },
];

const ITEMS_PER_PAGE = 5;

export default function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const paginatedStudents = students.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='w-full rounded  bg-[#fefefc] p-4 shadow overflow-auto text-xs'>
      <div className='overflow-x-auto rounded bg-white p-4  min-w-[700px]'>
        <div className='grid grid-cols-5 gap-4 font-montserrat font-bold text-sm border-b py-3 px-2 bg-[#f8f8f8] rounded-t-xl'>
          <span>S/N</span>
          <span>Student Name</span>
          <span>Progress</span>
          <span>Overall Score</span>
          <span>Status</span>
        </div>

        <ul>
          {paginatedStudents.map((student, i) => (
            <StudentRow
              key={i}
              index={(currentPage - 1) * ITEMS_PER_PAGE + i + 1}
              {...student}
            />
          ))}
        </ul>

        {/* Pagination */}
        <div className='flex justify-center items-center mt-6 gap-2'>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-md text-sm font-semibold ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "text-black bg-white"
              }`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StudentRow({ index, name, avatar, progress, score }) {
  const isCompleted = progress === 100;
  const statusText = isCompleted ? "Completed" : "In progress";
  const statusColor = isCompleted ? "text-[#2e7d32]" : "text-[#d32f2f]";
  const badgeIcon = isCompleted ? "✓" : "⟳";
  const progressColor = isCompleted ? "bg-[#00BFA6]" : "bg-[#5e3c3c]";

  return (
    <li className='grid grid-cols-5 gap-4 items-center text-xs py-4 px-2 font-montserrat border-b border-textmuted '>
      <span>{index}</span>
      <div className='flex items-center gap-2'>
        <img
          src={avatar}
          alt={name}
          className='w-10 h-10 rounded-full object-cover'
        />
        <span className='font-semibold'>{name}</span>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-28 bg-[#f0f0f0] h-2 rounded-full overflow-hidden'>
          <div
            className={`h-2 ${progressColor}`}
            style={{ width: `${progress}%` }}></div>
        </div>
        <span className='text-xs text-gray-600 font-semibold'>{progress}%</span>
      </div>
      <span className='font-semibold text-sm text-gray-700'>{score}%</span>
      <span
        className={`border  rounded-full px-3 py-1 flex items-center gap-1 justify-center text-xs font-semibold ${statusColor} border-current w-fit`}>
        <span>{badgeIcon}</span> {statusText}
      </span>
    </li>
  );
}
