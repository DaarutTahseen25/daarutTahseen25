import React from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

const Notifications = () => {
  usePageTitle("Notifications");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Notifications"
          subtitle="View announcements, course updates, and important alerts"
        />
      </div>
    </section>
  );
};

export default Notifications;
