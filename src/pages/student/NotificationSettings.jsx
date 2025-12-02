import React from "react";
import NotificationDiv from "./NotificationDiv";

const NotificationSettings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
      <h1 className="font-clash text-2xl sm:text-3xl font-semibold mb-6">
        Notification Preferences
      </h1>
      <div className="flex flex-col gap-5">
        <NotificationDiv
          title={"Email Notifications"}
          subtitle={"Receive notifications via email"}
        />
        <NotificationDiv
          title={"SMS Notifications"}
          subtitle={"Receive notifications via email"}
        />
        <NotificationDiv
          title={"Push Notifications"}
          subtitle={"Receive push notifications"}
        />
        <NotificationDiv
          title={"Weekly Reports"}
          subtitle={"Get weekly summary reports"}
        />
        <NotificationDiv
          title={"System Alerts"}
          subtitle={"Receive system maintenance alerts"}
        />
      </div>
    </div>
  );
};

export default NotificationSettings;
