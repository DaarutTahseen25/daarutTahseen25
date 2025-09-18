import React from "react";

const NotificationDiv = ({ title, subtitle }) => {
  return (
    <div className="border p-3 rounded-[10px] border-gray-300 ">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div></div>
    </div>
  );
};

export default NotificationDiv;
