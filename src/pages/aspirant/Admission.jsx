/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ExamTaking from "../../Components/ExamTaking";
import { useAuth } from "../../contexts/AuthContext";
import { usePageTitle } from "../../hooks/usePageTitle";

const Admission = () => {
  usePageTitle("Admission");
  const { user } = useAuth();

  // Mock data - change these values to test different states
  const [test, setTest] = useState("In Progress"); // Options: "Pending", "In Progress", "Completed"

  // Mock test data
  const mockTestData = {
    title: "Placement Test",
    scheduleDate: "July 12, 2025 at 10:00 AM",
    score: 80,
    status: test,
    questions: 50,
    duration: "60 mins",
    instructions: [
      "Ensure your environment is quiet and your microphone works properly",
      "You must not leave the test page once started. Doing so may auto-submit your answers",
      "Before starting, ensure your internet connection is stable",
      'By clicking Start Test, you agree to the DaarutTahseen test honor code "I will complete this test truthfully and without assistance."',
    ],
    image: "/quran-recitation.png",
  };

  const handleTestComplete = () => {
    setTest("Completed");
    console.log("Placement test completed");
  };

  return (
    <main className="">
      {/* Page Header */}
      <header className="text-center lg:text-left mb-6">
        <h1 className="font-clash font-semibold text-3xl md:text-4xl text-accent">
          Admission
        </h1>
      </header>

      {/* Intro Section */}
      <section className="space-y-4 text-center lg:text-left">
        <h2 className="font-clash font-medium text-xl md:text-2xl text-accent leading-relaxed">
          You have registered for the{" "}
          <span className="text-primary capitalize">{user?.level} level</span>.
        </h2>
        <p className="font-montserrat text-base md:text-lg text-accent max-w-2xl mx-auto lg:mx-0">
          You have completed your level registration. A placement test will be
          assigned to you shortly based on your selected level.
        </p>
      </section>

      {/* Exam Taking Component */}
      <ExamTaking
        examData={mockTestData}
        examType="placement"
        onComplete={handleTestComplete}
        returnPath="/aspirant/admission"
        userLevel={user?.level}
      />
    </main>
  );
};

export default Admission;
