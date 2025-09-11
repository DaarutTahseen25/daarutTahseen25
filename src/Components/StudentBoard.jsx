import React, { useState } from "react";
import {
  ChevronRight,
  Users,
  BookOpen,
  FileText,
  LoaderCircle,
  Check,
} from "lucide-react";
import TotalCourses from "./TotalCourses";
import { courses } from "../constants/data";
import useUIStore from "../store/useUIStore";

const StudentBoard = () => {
  const { expandedCourse, setExpandedCourse } = useUIStore();

  return (
    <div className=''>
      <div className=''>
        {/* Students List */}

        <div className='bg-white w-full p-2 sm:p-4 rounded-lg shadow'>
          <div className='w-full mx-auto space-y-4'>
            {/* Header - Hide on mobile since course cards are self-explanatory */}
            <div className='hidden lg:grid grid-cols-4 gap-4 py-2 px-3 md:py-3 mb-4 bg-light-grey rounded font-semibold text-md xl:text-lg text-gray-700'>
              <div>Course</div>
              <div>Progress</div>
              <div>Score</div>
              <div>Status</div>
            </div>
            {/* Mobile Header - Optional simplified version */}
            <div className='lg:hidden flex justify-between items-center py-2 px-3 mb-4 bg-light-grey rounded text-sm font-semibold'>
              <span>Your Courses</span>
              <span className='text-xs text-gray-600'>
                {courses?.length || 0} total
              </span>
            </div>

            <TotalCourses
              courses={courses}
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
        </div>
        {/* Right Sidebar */}
      </div>
    </div>
  );
};

export default StudentBoard;
