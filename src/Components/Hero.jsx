import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background w */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/herobg.png')",
          }}
        />

        <div className="absolute inset-0 bg-accent/80"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/40"></div>

        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-accent/30"></div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-secondary/30 rounded-full blur-sm animate-float-slow"></div>
      <div className="absolute top-1/3 left-16 w-4 h-4 bg-cream/20 rounded-full blur-sm animate-float-medium"></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-primary/20 rounded-full blur-sm animate-float-fast"></div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/10 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto py-16 sm:py-20 md:py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center md:items-start justify-between gap-10 lg:gap-20">
            <HeroInfo />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.6s both;
        }
        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.8s both;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 4s ease-in-out infinite 2s;
        }
        .animate-float-fast {
          animation: float 3s ease-in-out infinite 1s;
        }
        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
        .animate-orbit-slow {
          animation: orbit 20s linear infinite;
        }
        .animate-orbit-medium {
          animation: orbit 15s linear infinite reverse;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(
            ellipse at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </section>
  );
}
