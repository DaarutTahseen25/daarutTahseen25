// Duplicate export removed. Only the latest OurFounder export remains.

import { Quote } from "lucide-react";

export default function OurFounder() {
  return (
    <section className="w-full bg-[#FFFCE1] py-16">
      <div className="w-[95%] max-w-5xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#009688] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-14">
          Meet Our Founder
        </h2>
        <div className="bg-white rounded-3xl  border border-[#e0e0e0] p-6 sm:p-10 flex flex-col md:flex-row gap-10 md:gap-8 items-center md:items-stretch">
          {/* Left: Image, Name, Title */}
          <div className="flex flex-col items-center md:items-center justify-center w-full md:w-1/3">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#009688] bg-gray-100 shadow-lg mb-4">
              <img
                src="/founder.jpg"
                alt="Founder Muhammad Jumah"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-clash font-bold text-[#009688] text-xl sm:text-2xl tracking-wide text-center">
              Muhammad Jum'ah
            </span>
            <span className="text-gray-500 text-sm italic mt-1 border-t border-dashed border-[#009688] pt-1 text-center">
              Founder, DaarutTahseen
            </span>
          </div>
          {/* Right: Message */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-gray-700 font-clash text-base sm:text-lg leading-relaxed space-y-6 text-center md:text-left">
              <p>
                DaarutTahseen was established to address the gap in accessible,
                structured Islamic education for Muslims across diverse ages and
                backgrounds, particularly those constrained by limited resources
                or rigid learning systems. More than an online Islamic school,
                DaarutTahseen is a purpose-driven educational platform focused
                on developing confident, well-grounded Muslims through
                knowledge, discipline, and ethical growth.
              </p>
              <p>
                The initiative delivers flexible, gender-sensitive online
                learning led by qualified tutors, with a long-term vision of
                creating sustainable models where students are
                empowered—academically and economically—through education. At
                its core, DaarutTahseen is committed to building a dignified and
                inclusive learning community founded on sincerity, structure,
                and continuous development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
