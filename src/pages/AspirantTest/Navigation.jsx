import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({ currentIndex, setCurrentIndex, total }) {
  return (
    <div className='flex items-center justify-center gap-5 my-4'>
      {/* Previous Button */}
      <button
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex((prev) => prev - 1)}
        className={`flex items-center gap-2 px-4 py-2 rounded font-medium transition-all
          ${
            currentIndex === 0
              ? "bg-[#F6F6F6] text-[#CCCCCC] cursor-not-allowed"
              : "bg-[#F6F6F6] border border-primary text-primary hover:bg-buttonhover/20 cursor-pointer"
          }
        `}>
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Next Button */}
      {currentIndex < total - 1 ? (
        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded font-medium hover:bg-buttonhover cursor-pointer transition-all'>
          Next
          <ChevronRight size={18} />
        </button>
      ) : (
        <button
          onClick={() => alert("Submit functionality to be implemented")}
          className='flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] text-[#CCCCCC] rounded font-medium cursor-not-allowed transition-all'
          disabled>
          Next
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
