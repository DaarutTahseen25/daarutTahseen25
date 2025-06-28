import React from "react";
import Button from "./../../Components/Button";

const ConfirmLevelRegistration = ({ onCloseModal, openModal, title }) => {
  const handleConfirm = () => {
    // Step 1: Close the confirmation modal
    onCloseModal();

    // Step 2: After a small delay, open the success modal
    setTimeout(() => {
      openModal("success");
    }, 1000); // Delay helps prevent modal overlap
  };

  return (
    <div className="w-[98%] mx-auto sm:w-[500px]  sm:h-[328px] max-h-[450px] flex  items-center justify-center  bg-white rounded-[20px] py-[48px] px-[30px]">
      <div className="w-[95%] mx-auto flex flex-col gap-[32px] items-center">
        {/* Caution Image */}
        <img src="/caution.png" alt="Caution" />

        {/* Text Content */}
        <div className="flex  flex-col items-center justify-center gap-2 text-center">
          <h1 className="font-[500] text-[25px] font-clash">
            Confirm Registration
          </h1>
          <p className="font-montserrat font-[700] text-[14px] text-darkest-grey">
            You have selected the <span className="text-primary">{title}</span>.
            Are you sure you want to proceed? This action cannot be undone.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-5 sm:gap-[136px]  ">
          <Button
            variant="cancel"
            onClick={onCloseModal}
            className="rounded-[10px] w-[112px] h-[40px]"
          >
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            className="rounded-[10px] w-[112px] h-[40px] hover:bg-buttonhover"
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLevelRegistration;
