import React, { memo, useMemo } from "react";
import LevelCard from "../../Components/LevelCard";
import { levels } from "../../constants/data";
import { usePageTitle } from "../../hooks/usePageTitle";

const LevelRegistration = () => {
  usePageTitle("Level Registration");
  const levelCards = useMemo(
    () => levels.map((level) => <LevelCard key={level.id} {...level} />),
    []
  );

  return (
    <section className=''>
      <div className='max-w-7xl  mb-8 md:mb-12'>
        <div className='text-center md:text-left'>
          <div className='inline-block px-4 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4'>
            Registration
          </div>
          <h1 className='font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-[#360400] mb-4'>
            Level Registration
            <span className='block text-[#009688] text-2xl md:text-3xl lg:text-4xl mt-2 capitalize'>
              Register for your academic level
            </span>
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto md:mx-0 rounded-full'></div>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-4'>
        <h2 className='font-clash font-medium text-[25px] text-center lg:text-left text-accent'>
          Register for your class level to begin admission process
        </h2>
        <p className='font-montserrat font-normal text-[14px] text-center lg:text-left text-accent'>
          Find the class that matches your current knowledge and skills. Each
          level includes a placement test that will be scheduled later. After
          registration, check back on your dashboard to see if your test has
          been scheduled. Your selected level helps us to prepare the right test
          for you.
        </p>
      </div>

      <div>{levelCards}</div>
    </section>
  );
};

export default memo(LevelRegistration);
