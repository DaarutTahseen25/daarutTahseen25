import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../Components/Button";
import { Link } from "react-router";
import { usePageTitle } from "../../hooks/usePageTitle";

const Welcome = () => {
  usePageTitle("Placement Test");
  const { user } = useAuth();

  return (
    <main className="mx-auto w-[95%] max-w-4xl px-4 py-8">
      {/* Page Heading */}
      <header className="text-center lg:text-left">
        <h1 className="font-clash font-semibold text-3xl md:text-4xl text-accent capitalize">
          Welcome to the Placement Test
        </h1>
      </header>

      {/* Intro Section */}
      <section className="mt-6 space-y-4 text-center lg:text-left">
        <h2 className="font-clash font-medium text-xl md:text-2xl text-accent leading-relaxed">
          You have registered for the{" "}
          <span className="text-primary capitalize">{user?.level} level</span>.
          This test will confirm if you're ready for this level based on your
          current knowledge of Arabic and Islamic studies.
        </h2>
      </section>

      {/* Instructions */}
      <section
        aria-labelledby="instructions-title"
        className="mt-8 rounded-xl bg-white px-6 py-6 shadow-lg"
      >
        <h3
          id="instructions-title"
          className="font-clash font-medium text-lg md:text-xl text-black uppercase mb-4"
        >
          Instructions
        </h3>

        <ul className="divide-y divide-dark-grey/30 font-montserrat text-sm md:text-base text-darkest-grey">
          <li className="py-3">
            <span className="font-semibold text-black">Total Questions:</span>{" "}
            33 (answer all)
          </li>
          <li className="py-3">
            <span className="font-semibold text-black">Duration:</span> 20
            minutes
          </li>
          <li className="py-3">
            <span className="font-semibold text-black">Subjects Covered:</span>{" "}
            Tajweed, Fiqh, Nahw, Sarf, and Qur’an Memorization
          </li>
          <li className="py-3">
            <span className="font-semibold text-black">Question Formats:</span>{" "}
            Multiple Choice & Typed Answer
          </li>
        </ul>

        <p className="mt-6 text-center lg:text-left text-accent font-montserrat text-sm md:text-base leading-relaxed">
          Ensure a quiet environment and a stable internet connection. Once you
          click the button below, the timer will start immediately and you must
          complete all questions within the time limit.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center lg:justify-start">
          <Link to="/assessment/test" replace>
            <Button className="w-40 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">
              Start Test
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
