import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="relative bg-[url('/herobg.png')] bg-cover bg-center py-16 sm:py-20 md:py-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-accent/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] md:w-[85%] mx-auto flex flex-col-reverse lg:flex-row items-center md:items-start justify-between gap-10">
        <HeroInfo />
      </div>
    </section>
  );
}
