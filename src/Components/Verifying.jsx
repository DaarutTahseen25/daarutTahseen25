import React, { useEffect } from "react";

const Verifying = ({ onCloseModal, openModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseModal(); // Close the Verifying modal after 3 seconds
      openModal("verified"); // Then open the "verified" modal
    }, 3000);

    return () => clearTimeout(timer);
  }, [onCloseModal, openModal]);

  return (
    <div className="min-w-[300px] sm:w-[500px] h-[328px] flex flex-col items-center justify-center gap-10 bg-white rounded-[20px] py-3 px-10">
      <img
        src="/verifying.png"
        alt="Verifying animation"
        className="animate-spin"
      />
      <h1 className="font-[500] text-[25px] font-clash ">Verifying OTP...</h1>
    </div>
  );
};

export default Verifying;
