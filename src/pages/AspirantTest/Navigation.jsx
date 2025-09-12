import { memo, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

function Navigation({
  currentIndex,
  setCurrentIndex,
  total,
  onSubmit,
  isSubmitted,
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isFirst, setCurrentIndex]);

  const handleNext = useCallback(() => {
    if (!isLast) setCurrentIndex((prev) => prev + 1);
  }, [isLast, setCurrentIndex]);

  const handleSubmit = useCallback(() => {
    if (onSubmit && !isSubmitted) onSubmit();
  }, [onSubmit, isSubmitted]);

  // Optional: allow keyboard arrow navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight" && !isLast) handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext, isLast]);

  const baseBtn =
    "flex items-center gap-2 px-4 py-2 rounded font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1";

  return (
    <div className="flex items-center justify-center gap-5 my-4">
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={isFirst}
        className={`${baseBtn} ${
          isFirst
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 border border-primary text-primary hover:bg-buttonhover/20"
        }`}
        aria-label="Previous question"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Next or Submit Button */}
      {!isLast ? (
        <button
          type="button"
          onClick={handleNext}
          className={`${baseBtn} bg-primary text-white hover:bg-buttonhover`}
          aria-label="Next question"
        >
          Next
          <ChevronRight size={18} />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitted}
          className={`${baseBtn} ${
            isSubmitted
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
          aria-label="Submit all answers"
        >
          Submit
          <CheckCircle2 size={18} />
        </button>
      )}
    </div>
  );
}

export default memo(Navigation);
