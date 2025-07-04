import React, { useState } from "react";
import Button from "../Button";
import useUIStore from "../../store/useUIStore";
const Admission = () => {
  const [test, setTest] = useState("Pending");
  const isCompleted = false;

  const { level } = useUIStore();
  return (
    <section>
      {" "}
      <h1 className="font-clash font-[500] text-[40px]  text-center lg:text-left text-accent ">
        Admission
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-clash font-[500] text-[25px] text-center lg:text-left  text-accent">
          You have Registered for the{" "}
          <span className="text-primary capitalize">{level}</span>
        </h2>
        <p className="font-montserrat font-[400] text-[14px] text-center lg:text-left  text-accent">
          You have completed your level registration. A placement test will be
          assign to you shortly based on your selected level
        </p>
      </div>
      <div className="bg-white mt-4 px-6 py-3 rounded-lg shadow-md">
        <div className="flex items-center gap-[10px] mb-4">
          <h3 className="font-clash font-[500] text-[20px] text-black uppercase">
            REGISTRATION STATUS
          </h3>
        </div>
        <div className="w-full">
          <div className="font-montserrat font-[400] text-[14px] text-darkest-grey mb-4 py-4 border-y-2 border-dark-grey flex flex-col gap-2">
            <small className="font-montserrat font-[400] text-[14px] text-black ">
              <span className="text-dark-grey">Status:</span>
              {""} Waiting for Test Schedule
            </small>
            <small className="font-montserrat font-[400] text-[14px] text-black ">
              <span className="text-dark-grey">Selected Level:</span>
              {""} {level}
            </small>
            <small className="font-montserrat font-[400] text-[14px] text-black ">
              <span className="text-dark-grey">Test:</span>
              {""} {test}
            </small>
          </div>
          {test === "Pending" && (
            <Button
              variant="notActive"
              className="w-[120px] mt-4 h-[40px] rounded-[10px]"
            >
              Take Test
            </Button>
          )}
          {test === "In Progress" && (
            <Button className="w-[120px] hover:bg-buttonhover mt-4 h-[40px] rounded-[10px]">
              Take Test
            </Button>
          )}
          {!isCompleted && !test === "Completed" && (
            <Button
              className="w-[120px]  mt-4 h-[40px] rounded-[10px]"
              variant="notActive"
            >
              View Result
            </Button>
          )}

          {isCompleted && test === "Completed" && (
            <Button className="w-[120px] hover:bg-buttonhover mt-4 h-[40px] rounded-[10px]">
              View Result
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admission;
