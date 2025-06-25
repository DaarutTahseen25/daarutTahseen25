import React from "react";
import Button from "../Button";

const Success = ({ onCloseModal, title }) => {
  return (
    <div className=" mx-auto flex flex-col items-center justify-center gap-2 ">
      <img src="/success.png" alt="" />
      <div className="flex  flex-col items-center justify-center gap-2 text-center">
        <h1 className="font-[500] text-[25px] font-clash ">
          Registration Successful
        </h1>
        <p className="font-montserrat font-[700] text-[14px] text-darkest-grey">
          You have successfully registered for the{" "}
          <span className="text-primary">{title}</span>. Your placement test
          will be scheduled soon. Please check your dashboard regularly to see
          when it becomes available.
        </p>
      </div>
      <div className="flex items-center justify-center mt-2">
        <Button onClick={onCloseModal}>Close</Button>
      </div>
    </div>
  );
};

export default Success;
