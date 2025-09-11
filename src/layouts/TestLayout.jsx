import React from "react";
import { Outlet } from "react-router";

const TestLayout = () => {
  return (
    <main className="grid grid-rows-[auto_1fr] gap-10 min-h-screen bg-secondary relative">
      <header className="bg-white border-b border-[#CCCCCC] h-[80px] p-6 flex items-center justify-center">
        <h1 className="font-clash text-center font-[500] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
          DaarutTahseen Placement Test
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </main>
  );
};

export default TestLayout;
