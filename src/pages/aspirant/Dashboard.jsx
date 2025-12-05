import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { formatDate } from "../../utils/helper";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";
import { CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

const Dashboard = () => {
  usePageTitle("Dashboard");
  const { user } = useAuth();

  const firstName = useMemo(() => {
    const profile = user?.user || user;
    return profile?.full_name?.split(" ")[0] || "";
  }, [user]);

  // Mock data - replace with actual API data
  const admissionStatus = "pending"; // pending, approved, rejected
  const testStatus = "completed"; // not_started, in_progress, completed
  const testScore = 5; // null if not taken

  return (
    <section className="flex flex-col gap-10">
      {/* Header */}
      <header className="flex flex-col gap-4">
        <div className="max-w-7xl mb-8 md:mb-12">
          <DashTitle
            title="Aspirant Dashboard"
            subtitle="Track your admission status and pre-admission test progress"
          />
        </div>

        {/* Hero banner */}
        <section className="relative rounded-4xl overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right pointer-events-none"
            aria-hidden="true"
          />

          {/* Content container */}
          <div className="relative px-4 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6">
            {/* Text block */}
            <div className="flex-1 text-white text-center md:text-left">
              <div className="text-sm font-semibold tracking-tight">
                {formatDate(new Date())}
              </div>

              <div className="mt-1 font-clash font-semibold text-2xl sm:text-3xl leading-tight">
                Welcome, <span className="capitalize">{firstName}</span>!
              </div>

              <p className="mt-3 text-sm italic text-white/90 hidden md:block">
                "The best among you are those who learn and teach the Qur'an"
              </p>
            </div>

            {/* Illustration */}
            <div className="flex-shrink-0 self-center md:self-end">
              <img
                src="/dashb-student.png"
                alt="Aspirant illustration"
                className="hidden md:block w-[8.895rem] h-[12.350625rem] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </header>

      {/* Status Overview */}
      <div>
        <div className="border-b border-[#cccccc] pb-1.5 mb-4">
          <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
            Application Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Admission Status Card */}
          <div className="rounded shadow bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-clash font-medium text-lg">
                Admission Status
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-sm text-darkest-grey">
                  Current Status
                </span>
                <StatusBadge status={admissionStatus} />
              </div>

              {user?.level && (
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-sm text-darkest-grey">
                    Selected Level
                  </span>
                  <span className="font-montserrat text-sm font-semibold capitalize">
                    {user.level}
                  </span>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-dark-grey/30">
                <p className="font-montserrat text-xs text-darkest-grey">
                  {admissionStatus === "pending" &&
                    "Your application is under review. You will be notified once a decision is made."}
                  {admissionStatus === "approved" &&
                    "Congratulations! Your admission has been approved."}
                  {admissionStatus === "rejected" &&
                    "Unfortunately, your application was not successful this time."}
                </p>
              </div>
            </div>
          </div>

          {/* Test Status Card */}
          <div className="rounded shadow bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-dark-cyan/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-dark-cyan" />
              </div>
              <h3 className="font-clash font-medium text-lg">
                Pre-Admission Test
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-sm text-darkest-grey">
                  Test Status
                </span>
                <TestStatusBadge status={testStatus} />
              </div>

              {testStatus === "completed" && testScore !== null && (
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-sm text-darkest-grey">
                    Score
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-clash text-2xl font-semibold text-dark-cyan">
                      {testScore}%
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-dark-grey/30">
                <p className="font-montserrat text-xs text-darkest-grey">
                  {testStatus === "not_started" &&
                    "Your placement test will be scheduled soon. Check back regularly for updates."}
                  {testStatus === "in_progress" &&
                    "Your test is ready. Complete it to proceed with your application."}
                  {testStatus === "completed" &&
                    `You scored ${testScore}%. Your results have been submitted for review.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Visualization (only if test completed) */}
      {testStatus === "completed" && testScore !== null && (
        <div>
          <div className="border-b border-[#cccccc] pb-1.5 mb-4">
            <h2 className="font-clash font-medium text-2xl text-center lg:text-left">
              Test Performance
            </h2>
          </div>

          <div className="rounded shadow bg-white p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Score Circle */}
              <div className="flex-shrink-0">
                <div
                  className="border-[1.2rem] border-dark-cyan border-r-dark-grey rounded-full h-[11.32rem] w-[11.32rem] flex flex-col justify-center items-center gap-1"
                  style={{
                    borderRightColor: testScore >= 70 ? "#cccccc" : "#D32F2F",
                  }}
                >
                  <span className="font-clash text-3xl font-medium">
                    {testScore}%
                  </span>
                  <span className="text-xs font-semibold text-darkest-grey font-montserrat">
                    {testScore >= 85
                      ? "EXCELLENT"
                      : testScore >= 70
                      ? "GOOD"
                      : "NEEDS IMPROVEMENT"}
                  </span>
                </div>
              </div>

              {/* Performance Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-montserrat text-sm font-semibold">
                      Overall Performance
                    </span>
                    <span className="font-montserrat text-sm font-semibold text-dark-cyan">
                      {testScore}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-grey/30 rounded-full h-2">
                    <div
                      className="bg-dark-cyan h-2 rounded-full transition-all duration-500"
                      style={{ width: `${testScore}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-light-grey rounded">
                    <p className="font-montserrat text-xs text-darkest-grey mb-1">
                      Passing Score
                    </p>
                    <p className="font-clash text-xl font-semibold">70%</p>
                  </div>
                  <div className="text-center p-3 bg-light-grey rounded">
                    <p className="font-montserrat text-xs text-darkest-grey mb-1">
                      Your Score
                    </p>
                    <p className="font-clash text-xl font-semibold text-dark-cyan">
                      {testScore}%
                    </p>
                  </div>
                  <div className="text-center p-3 bg-light-grey rounded">
                    <p className="font-montserrat text-xs text-darkest-grey mb-1">
                      Status
                    </p>
                    <p className="font-clash text-xl font-semibold">
                      {testScore >= 70 ? (
                        <span className="text-success">Passed</span>
                      ) : (
                        <span className="text-error">Failed</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ======================
   Status Badge Components
====================== */
const StatusBadge = ({ status }) => {
  const config = {
    pending: {
      icon: Clock,
      text: "Under Review",
      bgColor: "bg-[#FFF9C480]",
      textColor: "text-[#9F5B0C]",
    },
    approved: {
      icon: CheckCircle2,
      text: "Approved",
      bgColor: "bg-success/10",
      textColor: "text-success",
    },
    rejected: {
      icon: AlertCircle,
      text: "Not Approved",
      bgColor: "bg-error/10",
      textColor: "text-error",
    },
  };

  const {
    icon: Icon,
    text,
    bgColor,
    textColor,
  } = config[status] || config.pending;

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${bgColor}`}
    >
      <Icon className={`h-3.5 w-3.5 ${textColor}`} />
      <span className={`font-montserrat text-xs font-semibold ${textColor}`}>
        {text}
      </span>
    </div>
  );
};

const TestStatusBadge = ({ status }) => {
  const config = {
    not_started: {
      icon: Clock,
      text: "Not Started",
      bgColor: "bg-dark-grey/20",
      textColor: "text-darkest-grey",
    },
    in_progress: {
      icon: AlertCircle,
      text: "Ready to Take",
      bgColor: "bg-[#FFF9C480]",
      textColor: "text-[#9F5B0C]",
    },
    completed: {
      icon: CheckCircle2,
      text: "Completed",
      bgColor: "bg-dark-cyan/10",
      textColor: "text-dark-cyan",
    },
  };

  const {
    icon: Icon,
    text,
    bgColor,
    textColor,
  } = config[status] || config.not_started;

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${bgColor}`}
    >
      <Icon className={`h-3.5 w-3.5 ${textColor}`} />
      <span className={`font-montserrat text-xs font-semibold ${textColor}`}>
        {text}
      </span>
    </div>
  );
};

export default Dashboard;
