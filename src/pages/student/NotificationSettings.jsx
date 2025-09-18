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
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
      </div>
    </div>
  );
};

export default NotificationSettings;
