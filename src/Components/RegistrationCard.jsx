import Button from "./Button";
import { Link } from "react-router";

const RegistrationCard = ({ title, points, children, directory }) => {
  return (
    <div className='group relative bg-white p-8 border border-gray-200 rounded-3xl  transition-all duration-500 overflow-hidden'>
      {/* Subtle gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#FFFCE1]/20 to-transparent opacity-0  transition-opacity duration-300'></div>

      {/* Decorative element */}
      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#009688]/10 to-transparent rounded-bl-3xl'></div>

      <div className='relative z-10'>
        {/* Title with modern styling */}
        <div className='text-center mb-8'>
          <h2 className='font-clash text-2xl font-bold text-[#360400] mb-2 group-hover:text-[#009688] transition-colors duration-300'>
            {title}
          </h2>
          <div className='w-16 h-1 bg-gradient-to-r from-[#009688] to-[#009688]/60 mx-auto rounded-full'></div>
        </div>

        {/* Enhanced bullet points */}
        <ul className='space-y-4 mb-8'>
          {points.map((point, index) => (
            <li
              key={index}
              className='flex items-start gap-3 text-gray-700 hover:text-[#360400] transition-colors duration-200'>
              <div className='flex-shrink-0 w-2 h-2 rounded-full bg-[#009688] mt-2.5  transition-transform duration-200'></div>
              <span className='text-base leading-relaxed font-medium'>
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Enhanced button area */}
        <div className='text-center'>
          <Link to={directory} className='block'>
            <Button className='w-full bg-[#360400] hover:bg-[#009688] text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
              {children}
            </Button>
          </Link>
        </div>
      </div>

      {/* Animated background accent */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#360400] via-[#009688] to-[#360400] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
    </div>
  );
};

export default RegistrationCard;
