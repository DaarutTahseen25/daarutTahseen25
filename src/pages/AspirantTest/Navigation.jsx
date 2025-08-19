import { memo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "react-toastify";

function Navigation({ currentIndex, setCurrentIndex, total }) {
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, [setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, [setCurrentIndex]);

  const handleSubmit = useCallback(() => {
    toast.success("Submit functionality to be implemented");
  }, []);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= total - 1;

  return (
    <div className='flex items-center justify-center gap-5 my-4'>
      {/* Previous Button */}
      <button
        disabled={isFirst}
        onClick={handlePrev}
        className={`flex items-center gap-2 px-4 py-2 rounded font-medium transition-all
          ${
            isFirst
              ? "bg-[#F6F6F6] text-[#CCCCCC] cursor-not-allowed"
              : "bg-[#F6F6F6] border border-primary text-primary hover:bg-buttonhover/20 cursor-pointer"
          }
        `}>
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Next / Submit Button */}
      {!isLast ? (
        <button
          onClick={handleNext}
          className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded font-medium hover:bg-buttonhover cursor-pointer transition-all'>
          Next
          <ChevronRight size={18} />
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          disabled
          className='flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] text-[#CCCCCC] rounded font-medium cursor-not-allowed transition-all'>
          Next
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}

export default memo(Navigation);
