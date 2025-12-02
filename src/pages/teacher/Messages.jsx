import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";

const Messages = () => {
  usePageTitle("Notifications");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Messages"
          subtitle="View, manage, and respond to user inquiries and notifications"
        />
      </div>
    </section>
  );
};

export default Messages;
