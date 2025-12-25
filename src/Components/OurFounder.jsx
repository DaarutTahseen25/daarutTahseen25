// Duplicate export removed. Only the latest OurFounder export remains.

import { Quote } from "lucide-react";

export default function OurFounder() {
  return (
    <section className="w-full bg-[#FFFCE1] py-16">
      <div className="w-[95%] max-w-2xl mx-auto">
        <h2 className="text-center font-clash font-bold text-[#009688] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-20">
          Meet Our Founder
        </h2>
        <div className="relative bg-white rounded-3xl shadow-xl border border-[#e0e0e0] px-6 sm:px-12 pt-20 pb-10 flex flex-col items-center">
          <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#009688] bg-gray-100 shadow-lg">
            <img
              src="/founder.jpg"
              alt="Founder Muhammad Jumah"
              className="object-cover w-full h-full"
            />
          </div>
          <blockquote className="relative bg-[#f3f4f6] border-l-4 border-[#009688] px-6 py-6 rounded-xl text-gray-700 font-clash text-base sm:text-lg leading-relaxed text-center mt-2 mb-8">
            <Quote className="absolute -left-6 -top-6 w-8 h-8 text-[#009688]/30" />
            My name is Muhammad Jumah, a 300-level Linguistics student at the
            University of Ilorin. I founded DaarutTahseen to bridge the gap in
            accessible Islamic education for Muslims of all ages and
            backgrounds, especially those limited by resources or structure.
            DaarutTahseen isn’t just an online Islamic school. It’s a mission to
            raise a confident, knowledgeable generation of Muslims. We offer
            flexible, gender-sensitive online classes led by qualified tutors,
            and we’re working toward a system where students are even paid to
            learn. Our goal is to build a dignified, inclusive community rooted
            in sincerity, structure, and growth.
          </blockquote>
          <div className="flex flex-col items-center mt-2">
            <span className="font-clash font-bold text-[#009688] text-xl tracking-wide">
              Muhammad Jum'ah
            </span>
            <span className="text-gray-500 text-sm italic mt-1 border-t border-dashed border-[#009688] pt-1">
              Founder, DaarutTahseen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
