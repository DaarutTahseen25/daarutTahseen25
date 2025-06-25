import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const SelectAccount = () => {
  return (
    <div className="">
      <h2 className="font-clash text-accent text-2xl lg:text-3xl font-medium text-center">
        Create Account
      </h2>
      <p className="text-center text-sm text-accent text-clash">
        Select your account type to continue
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-15">
        <div className="flex flex-col justify-center items-center mt-5 gap-1 hover:scale-102">
          <div className="flex flex-col items-center gap-3 border border-textmuted rounded-lg p-8 shadow-md hover:shadow-lg">
            <img src="/student.png" alt="student" />
            <p className="text-textmain text-clash">I'm a student</p>
          </div>
          <Link to="/create/student-account">
            <Button
              variant="primary"
              className="px-8 text-xl hover:bg-primary/90"
            >
              Continue
            </Button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 gap-1 hover:scale-102">
          <div className="flex flex-col items-center gap-3 border border-textmuted rounded-lg p-8 shadow-md hover:shadow-lg">
            <img src="/tutor.png" alt="tutor" />
            <p className="text-textmain text-clash">I'm a teacher</p>
          </div>
          <Link to="/create/tutor-account">
            <Button
              variant="primary"
              className="px-8 text-xl hover:bg-primary/90"
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectAccount;
