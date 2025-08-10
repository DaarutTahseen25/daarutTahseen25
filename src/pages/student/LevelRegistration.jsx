import React, { memo, useMemo } from "react";
import LevelCard from "../../Components/LevelCard";
import { levels } from "../../constants/data";

const LevelRegistration = () => {
  const levelCards = useMemo(
    () => levels.map((level) => <LevelCard key={level.id} {...level} />),
    []
  );

  return (
    <section>
      <h1 className='font-clash font-medium text-[40px] text-center lg:text-left text-accent'>
        Level Registration
      </h1>

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
