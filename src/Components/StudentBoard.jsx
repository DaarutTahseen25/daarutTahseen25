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

        <div className='bg-white w-full p-4 rounded-lg shadow overflow-auto'>
          <div className='p-2 min-w-3xl mx-auto space-y-4'>
            <div className='grid grid-cols-4 gap-4 text-md md:text-xl py-2 px-3 md:py-3 mb-4 bg-light-grey'>
              <div className='font-semibold'>Course Name</div>
              <div className='font-semibold'>Progress</div>
              <div className='font-semibold'>Overall Score</div>
              <div className='font-semibold'>Status</div>
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
