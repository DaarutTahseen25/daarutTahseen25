const AssignmentCard = () => {
  return (
    <div className='rounded bg-white shadow border border-neutral-200 relative p-3 sm:p-4 w-full max-w-full'>
      {/* See all button */}
      <button className='absolute top-3 right-3 text-xs sm:text-sm text-gray-400 font-semibold border border-gray-300 bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full cursor-not-allowed'>
        See all
      </button>

      {/* Title and subtitle */}
      <div className='flex flex-col sm:flex-row sm:items-center gap-3 mt-6 sm:mt-2'>
        <img
          src='/quran-recitation.png'
          alt='Course'
          className='w-10 h-10 rounded-md object-cover'
        />
        <div>
          <h3 className='font-bold text-base sm:text-lg text-black'>
            Qur’an Recitation & Tajwid
          </h3>
          <p className='text-xs sm:text-sm text-red-500 mt-1'>
            Submit before: 20th June 2025; 12:00PM
          </p>
        </div>
      </div>

      {/* Students */}
      <div className='flex flex-wrap items-center mt-4 gap-2'>
        <div className='flex -space-x-2'>
          <img
            src='/test1.png'
            className='w-6 h-6 rounded-full border-2 border-white'
            alt='avatar'
          />
          <img
            src='/test2.png'
            className='w-6 h-6 rounded-full border-2 border-white'
            alt='avatar'
          />
          <img
            src='/test3.png'
            className='w-6 h-6 rounded-full border-2 border-white'
            alt='avatar'
          />
          <div className='w-6 h-6 rounded-full bg-gray-100 border-2 border-white text-[10px] flex items-center justify-center text-black font-semibold'>
            +4
          </div>
        </div>
        <span className='text-xs sm:text-sm text-gray-800'>
          7 Students submitted
        </span>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6'>
        <button className='flex-1 cursor-pointer border border-teal-500 text-teal-600 py-2 rounded-lg font-semibold text-xs sm:text-sm'>
          View
        </button>
        <button className='flex-1 cursor-pointer bg-teal-600 text-white py-2 rounded-lg font-semibold text-xs sm:text-sm'>
          Create New
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;
