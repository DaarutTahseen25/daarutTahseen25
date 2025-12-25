import React from "react";

const leaders = [
  {
    name: "Ustadh Muhammad Jum'ah",
    position: "Founder, DaarutTahseen",
    image: "/founder.jpg",
  },
  {
    name: "Ustadh Adedokun AbdulBasit",
    position: "Academci & Curriculum Lead",
    image: "/basit.jpg",
  },
  {
    name: "Ustadh Ja'far Enesi A.",
    position: "Technical and Support Lead",
    image: "/jafar.jpg",
  },
  {
    name: "Ustadh Oni Abdurrazaq",
    position: "Head of Public Relation & Outreach dept.",
    image: "/oni.jpg",
  },
  {
    name: "Ustadh Tijani Ridwanullah",
    position: "Head of Administrative dept.",
    image: "/tijani.jpg",
  },
  {
    name: "Ustadhah Lateefah",
    position: "Media Team Lead",
    image: "/lateefah.jpg",
  },
  {
    name: "Ustadhah Maryam Salahudeen",
    position: "Monitoring & Evaluation dept.",
    image: "/maryam.jpg",
  },
  {
    name: "Ustadhah Aderemi Fathia",
    position: "Financial & Funding dept.",
    image: "/fathia.jpg",
  },
];

export default function Leaders() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#360400] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          Meet Our Leadership Team
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 font-clash text-base sm:text-lg">
          DaarutTahseen is led by a team of passionate individuals dedicated to
          our mission of advancing Quranic and Islamic education. Our leaders
          bring a wealth of experience and expertise, guiding the institution
          with wisdom and commitment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-10">
          {leaders.map(({ name, position, image }) => (
            <div
              key={name}
              className=" rounded-2xl border border-[#e0e0e0] flex flex-col items-center px-5 py-8 text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#009688] bg-gray-100 mb-4 shadow-sm">
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-clash font-semibold text-[#009688] text-lg sm:text-xl mb-1">
                {name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-clash">
                {position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
