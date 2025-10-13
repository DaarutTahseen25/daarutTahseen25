import React, { useMemo } from "react";
import { formatDate } from "../../utils/helper";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const profile = user?.user || user;

  const firstName = useMemo(
    () => profile?.full_name?.split(" ")[0] || "",
    [profile?.full_name]
  );
  return (
    <div>
      <h1 className="font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4">
        Dashboard
      </h1>

      {/* Banner */}
      <section className="relative  ">
        {/* Decorative background image on sm+ */}
        <div
          className=" absolute rounded-4xl inset-0 bg-[url('/dashboard-cal.png')] bg-cover bg-right  pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative  px-4 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6">
          {/* Text */}
          <div className="flex-1 text-white text-center md:text-left">
            <div className="text-sm font-semibold tracking-tight">
              {formatDate(new Date())}
            </div>

            <div className="mt-1 font-clash font-semibold text-xl md:text-2xl leading-tight">
              Welcome back, Administrator!
            </div>

            {/* Quote hidden on small screens */}
            <p className="mt-3 text-sm italic text-white/90 hidden md:block">
              “The best among you are those who learn and teach the Qur’an”
            </p>
          </div>

          {/* Illustration hidden on small devices */}
          <div className="flex-shrink-0 self-center md:self-end absolute top-[-10%] right-[-1rem]">
            <img
              src="/admin-dashb-hero.png"
              alt="Teacher illustration"
              className="hidden md:block w-[18rem] h-[12.350625rem] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div>
        <div><span><p>Active Courses</p><h5>89</h5></span>
        <span><img src="" alt="" /></span></div>
      </div>
    </div>
  );
};

export default Dashboard;
