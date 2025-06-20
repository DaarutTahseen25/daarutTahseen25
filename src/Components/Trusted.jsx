const trustedItems = [
  {
    image: "/Verified courses.png",
    name: "verified courses",
    figure: "50+",
  },
  {
    image: "/tutor.png",
    name: "qualified tutors",
    figure: "80+",
  },
  {
    image: "/student.png",
    name: "active students",
    figure: "1200+",
  },
  {
    image: "/authentic.png",
    name: "Based on Authentic Qur’an & Sunnah",
  },
];
export default function Trusted() {
  return (
    <section className="bg-white">
      <div className="flex justify-center items-center py-12">
        <div className="w-[90%] md:w-[85%] flex flex-col items-center gap-10 mx-auto">
            <p className="font-medium text-3xl text-accent font-clash">Trusted by Thousands of Learners</p>
            <ul className="flex gap-14">
                {
                trustedItems.map((item, index) => (
                   <li key={index} className="shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] flex flex-col gap-2 p-4 rounded-md items-center w-[10rem]">
                    <div className="h-[2.5rem] w-[2.5rem]">
                      <img src={item.image} alt={item.name} className="w-full object-cover" />
                    </div>
                    <p className="font-medium text-2xl font-clash">{item.figure}</p>
                    <p className=" capitalize text-center leading-4 font-bricolage">{item.name}</p>
                   </li> 
                ))
            }
            </ul>
        </div>
      </div>
    </section>
  );
}
