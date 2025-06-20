import Button from "./Button";

export default function Hero() {
  return (
    <section className="h-screen bg-secondary flex justify-center items-center py-12">
      <div className="w-[90%] md:w-[85%] flex justify-between  mx-auto">
        <div className="grid grid-cols-1 items-start gap-6 ">
          <p className="text-4xl w-[80%] space-x-2 text-primary font-medium leading-12 ">DaarutTahseen Institution <span className="text-accent"> brings Authentic</span>
            Islamic Education
            <span className="text-accent"> to Every Home, Digitally</span>
          </p>
          <p className="w-[68%] leading-5 font-bricolage">DaarutTahseen Institution is a trusted online madrassah where students across Nigeria and beyond receive structured Islamic education, anywhere, anytime</p>
          <button className="bg-[#009485cc] mt-3 cursor-pointer w-[9.5rem] py-[0.8rem] px-[1.75rem] rounded-lg border border-[#FFF9C4] text-white shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#009485b2] font-clash ">Get Started</button>
        </div>
        <div className="flex gap-2">
            <div className="grid grid-cols-1 gap-y-7 h-[86%] ">
                <img src="/her1.png" alt="" className="w-[90%] ml-6 object-cover " />
                <p className="calli1 border-[0.81px] border-white bg-accent rounded-sm rounded-bl-[1.5rem] h-[3.2rem]">
                    {/* <img src="/" alt="" /> */}
                </p>
            </div>
            <div className="flex flex-col gap-y-7 pt-14 ">
                <p className="calli2 border-[0.81px] border-white rounded-sm rounded-tr-[1.5rem] h-[3.2rem]"></p>
                <img src="/her2.png" alt="" className="object-cover w-[90%]" />
            </div>
        </div>
      </div>
    </section>
  );
}
