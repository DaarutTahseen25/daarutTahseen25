import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";

const TeacherCourses = () => {
  usePageTitle("My Courses");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="My Courses"
          subtitle="Manage, update, and track the performance of all your courses"
        />
      </div>
    </section>
  );
};

export default TeacherCourses;
