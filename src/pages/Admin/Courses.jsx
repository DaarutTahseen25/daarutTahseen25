import React, { useState } from "react";
import DashTitle from "../../Components/DashTitle";
import Button from "../../Components/Button";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import AddCourse from "../../Components/AddCourse";

const AdminCourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-[10px] border border-[#CCCCCC] py-[20px] px-[12px] flex flex-col h-full">
      <h3 className="text-[16px] font-medium text-black mb-6 font-clash">
        {course.title}
      </h3>

      <div className="space-y-3 mb-8 flex-grow">
        <div className="flex justify-between items-center text-sm">
          <span className="text-[15px] font-clash font-normal">Chapters:</span>
          <span className="text-[15px] font-clash font-medium">
            {course.chapters}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[15px] font-clash font-normal">Lectures:</span>
          <span className="text-[15px] font-clash font-medium">
            {course.lectures}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[15px] font-clash font-normal">Students:</span>
          <span className="text-[15px] font-clash font-medium">
            {course.students}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        <Link
          to={`/admin/courses/${course.id}`}
          className="text-[14px] font-clash font-medium text-[#0C4CEE] hover:underline"
        >
          View details
        </Link>
        <div className="flex items-center gap-3">
          <button className="text-primary cursor-pointer">
            <Pencil size={16} />
          </button>
          <button className="text-red-500 hover:text-red-600 transition-colors cursor-pointer">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseSection = ({ title, courses, count }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-medium font-clash">{title}</h2>
        <span className="text-[15px] font-clash font-normal">
          {count} Courses
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <AdminCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const Courses = () => {
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [mockCourses, setMockCourses] = useState({
    beginner: [
      {
        id: 1,
        title: "Introduction to Islam",
        chapters: 8,
        lectures: 8,
        students: 8,
      },
      {
        id: 2,
        title: "Basic Arabic Reading",
        chapters: 8,
        lectures: 8,
        students: 8,
      },
      {
        id: 3,
        title: "Five Pillars of Islam",
        chapters: 8,
        lectures: 8,
        students: 8,
      },
      {
        id: 4,
        title: "Prophet Muhammad (PBUH) Stories",
        chapters: 8,
        lectures: 8,
        students: 8,
      },
    ],
    intermediate: [
      {
        id: 5,
        title: "Intermediate Arabic Grammar",
        chapters: 10,
        lectures: 12,
        students: 15,
      },
      {
        id: 6,
        title: "Fiqh of Worship",
        chapters: 12,
        lectures: 15,
        students: 20,
      },
      {
        id: 7,
        title: "Seerah of the Prophet (PBUH)",
        chapters: 15,
        lectures: 18,
        students: 25,
      },
    ],
    advanced: [
      {
        id: 8,
        title: "Advanced Quranic Exegesis",
        chapters: 20,
        lectures: 25,
        students: 10,
      },
      {
        id: 9,
        title: "Islamic Jurisprudence (Usul al-Fiqh)",
        chapters: 25,
        lectures: 30,
        students: 12,
      },
    ],
  });

  const handleAddCourse = (newCourse) => {
    // Determine the category based on the level
    const category = newCourse.level.toLowerCase();

    // Create a deep copy of the mockCourses to avoid mutation
    const updatedCourses = { ...mockCourses };

    // Check if the category exists, if not, create it or default to beginner
    if (updatedCourses[category]) {
      updatedCourses[category] = [...updatedCourses[category], newCourse];
    } else {
      // Fallback if level doesn't match keys exactly
      updatedCourses.beginner = [...updatedCourses.beginner, newCourse];
    }

    setMockCourses(updatedCourses);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <DashTitle
          title="Course Management"
          subtitle="Create and manage courses by level"
        />
        <Button
          onClick={() => setIsAddCourseOpen(true)}
          className="bg-primary hover:bg-buttonhover text-[14px] font-montserrat font-bold text-white flex items-center gap-2 px-6 py-3 rounded-[10px] transition-all"
        >
          <Plus size={20} />
          Create New Course
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white shadow-[0_0_5px_0.2px_#009688] rounded-[10px] p-6">
          <CourseSection
            title="Beginner Courses"
            courses={mockCourses.beginner}
            count={mockCourses.beginner.length}
          />
        </div>
        <div className="bg-white shadow-[0_0_5px_0.2px_#009688] rounded-[10px] p-6">
          <CourseSection
            title="Intermediate Courses"
            courses={mockCourses.intermediate}
            count={mockCourses.intermediate.length}
          />
        </div>
        <div className="bg-white shadow-[0_0_5px_0.2px_#009688] rounded-[10px] p-6">
          <CourseSection
            title="Advanced Courses"
            courses={mockCourses.advanced}
            count={mockCourses.advanced.length}
          />
        </div>
      </div>

      <AddCourse
        open={isAddCourseOpen}
        onOpenChange={setIsAddCourseOpen}
        onAdd={handleAddCourse}
      />
    </div>
  );
};

export default Courses;
