import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

const HeroInfo = () => {
  const { user } = useAuth();
  const role = user?.role;
  const isLoggedIn = !!user;

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto items-center text-center animate-fade-in">
      <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-cream/30 text-secondary font-medium text-sm mb-2 animate-slide-down">
        <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse-slow"></div>
        Authentic Islamic Education Online
      </div>

      <h1 className="text-white font-clash text-[28px] sm:text-[36px] md:text-[41px] font-normal w-full animate-slide-up-delay-1 leading-tight">
        DaarutTahseen Institution{" "}
        <span className="text-secondary relative">
          brings Authentic
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"></div>
        </span>
        <br />
        Islamic Education
        <span className="text-secondary relative">
          {" "}
          to Every Home, Digitally
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"></div>
        </span>
      </h1>

      <p className="text-secondary font-bricolage text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl w-full animate-slide-up-delay-2 leading-relaxed">
        DaarutTahseen Institution is a trusted online madrassah where students
        across Nigeria and beyond receive structured Islamic education,
        anywhere, anytime.
      </p>

      <div className="animate-slide-up-delay-3 relative group">
        {isLoggedIn ? (
          <Link to={`/${role}`}>
            <Button className="bg-primary hover:bg-buttonhover transition-all duration-500 py-4 px-6 w-[200px] md:w-[219px] h-[60px] md:h-[71px] text-white text-[18px] font-medium rounded-[10px] border-2 border-cream shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] font-clash relative overflow-hidden group-hover:scale-105 group-hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] transform transition-transform">
              <span className="relative z-10">Go to Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Link>
        ) : (
          <Link to="/apply">
            <Button className="bg-primary hover:bg-buttonhover transition-all duration-500 py-4 px-6 w-[169px] h-[71px] text-white text-[18px] font-medium rounded-[10px] border-2 border-cream shadow-[0_0_10px_5px_rgba(0,0,0,0.25)] font-clash relative overflow-hidden group-hover:scale-105 group-hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] transform transition-transform">
              <span className="relative z-10">Apply</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroInfo;
