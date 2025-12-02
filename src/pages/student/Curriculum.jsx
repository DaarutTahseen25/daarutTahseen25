import React from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

const Curriculum = () => {
  usePageTitle("Curriculum");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Curriculum"
          subtitle="View your enrolled courses, modules, and upcoming lessons"
        />
      </div>
    </section>
  );
};

export default Curriculum;
