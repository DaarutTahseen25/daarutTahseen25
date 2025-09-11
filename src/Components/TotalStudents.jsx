import { useState } from "react";
import Button from "./Button"; // if unused, you can remove this import
import Pagination from "./Pagination";
import { Check, LoaderCircle } from "lucide-react";
import { students } from "../constants/data";

export default function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(students.length / itemsPerPage);

  const paginatedData = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='w-full rounded bg-[#fefefc] p-4 shadow text-xs overflow-hidden'>
      <div className='bg-white p-4 rounded'>
        {/* Header: only for md+ (desktop/tablet) */}
        <div className='hidden md:grid grid-cols-5 gap-4 text-md xl:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey rounded'>
          <div className='font-semibold'>S/N</div>
          <div className='font-semibold'>Student Name</div>
          <div className='font-semibold'>Progress</div>
          <div className='font-semibold'>Overall Score</div>
          <div className='font-semibold'>Status</div>
        </div>
        {/* <div className='hidden md:grid grid-cols-5 gap-4 font-montserrat font-bold text-sm border-b py-3 px-2 bg-[#f8f8f8] rounded-t-xl'>
          <span>S/N</span>
          <span>Student Name</span>
          <span>Progress</span>
          <span>Overall Score</span>
          <span>Status</span>
        </div> */}

        <ul className='divide-y divide-[#cccccc]'>
          {paginatedData.map((student, i) => (
            <StudentRow
              key={i}
              index={(currentPage - 1) * itemsPerPage + i + 1}
              {...student}
            />
          ))}
        </ul>

        {/* Pagination */}
        <div className='flex justify-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

function StudentRow({ index, name, avatar, progress, score }) {
  const isCompleted = progress === 100;
  const statusText = isCompleted ? "Completed" : "In progress";
  const progressColor = isCompleted ? "bg-[#00BFA6]" : "bg-[#5e3c3c]";

  return (
    <li
      className='
        font-montserrat py-4 px-2
        grid grid-cols-1 gap-3
        md:grid-cols-5 md:items-center
      '>
      {/* S/N (hidden on mobile, shown on md+) */}
      <span className='hidden md:block text-gray-500'>{index}</span>

      {/* Name + avatar (always visible) */}
      <div className='flex items-center gap-3 min-w-0'>
        <img
          src={avatar}
          alt={name}
          className='w-10 h-10 rounded-full object-cover flex-shrink-0'
        />
        <span className='font-semibold truncate'>{name}</span>
        {/* Show S/N subtly on mobile so nothing critical is lost */}
        <span className='md:hidden ml-auto text-[11px] text-gray-500'>
          #{index}
        </span>
      </div>

      {/* Progress (visible on all sizes; becomes full width on mobile) */}
      <div className='flex items-center gap-2 w-full md:w-auto'>
        <span className='md:hidden text-[11px] uppercase tracking-wide text-gray-500'>
          Progress
        </span>
        <div className='flex-1 md:flex-none md:w-28 bg-[#f0f0f0] h-2 rounded-full overflow-hidden'>
          <div
            className={`h-2 ${progressColor}`}
            style={{ width: `${progress}%` }}
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Score (visible on all sizes; labeled on mobile) */}
      <div className='flex items-center gap-2'>
        <span className='md:hidden text-[11px] uppercase tracking-wide text-gray-500'>
          Score
        </span>
        <span className='font-semibold text-sm text-gray-700'>{score}%</span>
      </div>

      {/* Status (visible on all sizes; labeled on mobile) */}
      <div className='flex items-center gap-2'>
        <span className='md:hidden text-[11px] uppercase tracking-wide text-gray-500'>
          Status
        </span>
        <span
          className={`border rounded-full px-3 py-1 flex items-center gap-2 justify-center text-xs font-semibold  border-[#cccccc]`}>
          {statusText === "In progress" && (
            <LoaderCircle className='size-2 text-[#D32F2F]' />
          )}
          {statusText === "Completed" && (
            <Check className='size-2 text-primary' />
          )}
          {statusText}
        </span>
      </div>
    </li>
  );
}
