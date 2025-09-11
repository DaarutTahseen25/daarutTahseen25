import React, { useState } from "react";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { usePageTitle } from "../../hooks/usePageTitle";

const Admission = () => {
  usePageTitle("Admission");
  const { user } = useAuth();

  const [test, setTest] = useState("In Progress"); // "Pending" | "In Progress" | "Completed"
  const [isCompleted, setIsCompleted] = useState(false);

  const ActionButton = () => {
    const navigate = useNavigate();

    const handleTakeTest = () => {
      navigate("/assessment/", { replace: true });
    };
    switch (test) {
      case "Pending":
        return (
          <Button
            variant="notActive"
            disabled
            className="w-40 h-12 mt-6 rounded-xl"
          >
            Take Test
          </Button>
        );
      case "In Progress":
        return (
          <Button
            onClick={handleTakeTest}
            className="w-40 h-12 mt-6 rounded-xl transition-colors hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Take Test
          </Button>
        );
      case "Completed":
        return (
          <Button
            className="w-40 h-12 mt-6 rounded-xl transition-colors hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            variant={isCompleted ? "default" : "notActive"}
            disabled={!isCompleted}
          >
            View Result
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <main className="mx-auto w-[95%] max-w-4xl px-4 py-8">
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

      {/* Status Card */}
      <section
        aria-labelledby="registration-status"
        className="mt-8 rounded-xl bg-white px-6 py-6 shadow-lg"
      >
        <h3
          id="registration-status"
          className="font-clash font-medium text-lg md:text-xl text-black uppercase mb-4"
        >
          Registration Status
        </h3>

        <ul className="divide-y divide-dark-grey/30 font-montserrat text-sm md:text-base text-darkest-grey">
          <li className="py-3 text-black">
            <span className="font-semibold text-dark-grey">Status:</span>{" "}
            {test === "Pending"
              ? "Waiting for Test Schedule"
              : test === "In Progress"
              ? "Test Ongoing"
              : "Test Completed"}
          </li>
          <li className="py-3 text-black capitalize">
            <span className="font-semibold text-dark-grey">
              Selected Level:
            </span>{" "}
            {user?.level}
          </li>
          <li className="py-3 text-black">
            <span className="font-semibold text-dark-grey">Test:</span> {test}
          </li>
        </ul>

        {/* Action Button */}
        <div className="flex justify-center lg:justify-start">
          <ActionButton />
        </div>
      </section>
    </main>
  );
};

export default Admission;
