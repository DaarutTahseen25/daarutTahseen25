import React from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

const Resources = () => {
  usePageTitle("My Resources");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Resources"
          subtitle="Access study materials, guides, and additional learning tools"
        />
      </div>
    </section>
  );
};

export default Resources;
