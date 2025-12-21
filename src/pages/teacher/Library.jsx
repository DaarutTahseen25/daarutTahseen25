import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";

const Library = () => {
  usePageTitle("Library");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Library"
          subtitle="Upload, organize, and share teaching materials and resources"
        />
      </div>
    </section>
  );
};

export default Library;
