const Quiz = () => {
  return (
    <>
      <div className="rounded-2xl p-4 bg-white shadow-md border border-neutral-200  relative">
        {/* See all button */}
        <button className="absolute top-4 right-4 text-sm text-gray-400 font-semibold border border-gray-300 bg-gray-100 px-3 py-1.5 rounded-full cursor-not-allowed">
          See all
        </button>

        {/* Title and meta */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src="/quran-recitation.png"
            alt="Course"
            className="w-10 h-10 rounded-md object-cover"
          />
          <div>
            <h3 className="font-bold text-lg text-black">
              Qur’an Recitation & Tajwid
            </h3>
            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm font-medium">
              <span>• 10 Questions</span>
              <span>• 15 mins</span>
            </div>
          </div>
        </div>

        {/* Students */}
        <div className="flex items-center mt-4 gap-2">
          <div className="flex -space-x-2">
            <img
              src="/avatars/1.png"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
            <img
              src="/avatars/2.png"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
            <img
              src="/avatars/3.png"
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
            <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white text-xs flex items-center justify-center text-black font-semibold">
              +4
            </div>
          </div>
          <span className="text-sm text-gray-800">7 Students submitted</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button className="flex-1 border border-teal-500 text-teal-600 py-2 rounded-xl font-semibold">
            View
          </button>
          <button className="flex-1 bg-teal-600 text-white py-2 rounded-xl font-semibold">
            Create New
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
