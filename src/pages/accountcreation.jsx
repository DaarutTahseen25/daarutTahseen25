import React, { useState } from "react";
import Button from "../Components/Button";
import StudentRegistrationForm from "../Components/studentregistration";
import TutorRegistration from "../Components/tutorregistration";

const AccountTypePage = () => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div
        className={`bg-secondary w-full h-full text-center ${
          selectedAccountType ? "hidden lg:flex" : "flex"
        } flex-col justify-center items-center gap-4 px-8 py-10 lg:p-12`}
      >
        <img
          src="landingPageLogo.png"
          alt="logo"
          className="w-[8rem] lg:w-[10rem] h-[4rem] lg:h-[6rem] cursor-pointer"
        />
        <p className="text-accent text-xl lg:text-2xl font-medium font-bricolage">
          Join Us now!
        </p>
        <p className="font-clash lg:text-xl">
          Become Part of an online growing community dedicated to preserving and
          spreading Islamic knowledge with excellence.
        </p>
      </div>

      {selectedAccountType === null && (
        <div className="bg-bglight w-full h-full py-6 px-5 flex justify-center items-center">
          <div>
            <h2 className="font-clash text-accent text-2xl lg:text-3xl font-medium text-center">
              Create Account
            </h2>
            <p className="text-center text-sm text-accent text-clash">
              Select your account type to continue
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-15">
              {/* Student */}
              <div className="flex flex-col justify-center items-center mt-5 gap-1 hover:scale-102">
                <div className="flex flex-col items-center gap-3 border border-textmuted rounded-lg p-8 shadow-md hover:shadow-lg">
                  <img src="student.png" alt="student" />
                  <p className="text-textmain text-clash">I'm a student</p>
                </div>
                <Button
                  variant="primary"
                  className="px-8 text-xl hover:bg-primary/90"
                  onClick={() => setSelectedAccountType("student")}
                >
                  Continue
                </Button>
              </div>

              {/* Teacher */}
              <div className="flex flex-col justify-center items-center mt-5 gap-1 hover:scale-102">
                <div className="flex flex-col items-center gap-3 border border-textmuted rounded-lg p-8 shadow-md hover:shadow-lg">
                  <img src="tutor.png" alt="tutor" />
                  <p className="text-textmain text-clash">I'm a teacher</p>
                </div>
                <Button
                  variant="primary"
                  className="px-8 text-xl hover:bg-primary/90"
                  onClick={() => setSelectedAccountType("tutor")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedAccountType === "student" && (
        <div>
          <StudentRegistrationForm />
        </div>
      )}

      {selectedAccountType === "tutor" && (
        <div>
          <TutorRegistration />
        </div>
      )}
    </div>
  );
};

export default AccountTypePage;
