import React from "react";
import LevelCard from "./LevelCard";

const levels = [
  {
    id: 1,
    title: "Beginner level",
    description:
      "Start your Qur’anic journey from the Basics: Perfect for those new to Arabic and Islamic studies, the Beginner Course builds a strong foundation in Qur’an recitation, Arabic letters and grammar, Islamic manners, short surah memorization, and essential beliefs. You'll also explore the life of the Prophet ﷺ, basic hadith, and daily Islamic practices, all at a gentle pace to prepare you for higher levels.",
    color: "cream",
  },
  {
    id: 2,
    title: "Intermediate level",
    description:
      "Strengthen Your Knowledge & Language Skills: Ideal for students with a basic foundation. The Intermediate Course dives deeper into Qur’anic tafsīr, Arabic grammar and morphology, hadith sciences, and Islamic jurisprudence. You'll refine your Tajwīd, study Aqeedah in depth, practice Arabic conversation, and build confidence for advanced Islamic studies.",
    color: "primary",
  },
  {
    id: 3,
    title: "Advanced level",
    description:
      "Master the Qur’an and Deepen Your Islamic Knowledge:- Designed for dedicated learners, the Advanced Course focuses on high-level Qur’an memorization and Tajwīd, deep Tafsīr and Hadith analysis, advanced Arabic grammar and writing, as well as Aqeedah refutation and public speaking. It equips students for leadership, da'wah, and advanced Islamic engagement.",
    color: "accent",
  },
];

const Admission = () => {
  return (
    <section>
      <h1 className="font-clash font-[500] text-[40px]  text-center lg:text-left text-accent ">
        Admission
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="font-clash font-[500] text-[25px] text-center lg:text-left  text-accent">
          Register for your class level to begin admission process
        </h2>
        <p className="font-montserrat font-[400] text-[14px] text-center lg:text-left  text-accent">
          Find the class that matches your current knowledge and skills. Each
          level includes a placement test that will be scheduled later. After
          registration, check back on your dashboard to see if your test has
          been scheduled. Your selected level helps us to prepare the right test
          for you
        </p>
      </div>
      <div>
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            title={level.title}
            description={level.description}
            color={level.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Admission;
