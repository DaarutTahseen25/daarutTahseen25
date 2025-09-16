import React from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";
const Classes = () => {
  usePageTitle("My Classess");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="My Classes"
          subtitle="View schedules, manage students, and monitor class activities"
        />
      </div>
    </section>
  );
};

export default Classes;
