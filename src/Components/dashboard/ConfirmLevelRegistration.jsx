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
    <div className="mx-auto flex flex-col items-center justify-between gap-6 h-full">
      {/* Caution Image */}
      <img src="/caution.png" alt="Caution" />

      {/* Text Content */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
        <h1 className="font-[500] text-[25px] font-clash">
          Confirm Registration
        </h1>
        <p className="font-montserrat font-[700] text-[14px] text-darkest-grey">
          You have selected the <span className="text-primary">{title}</span>.
          Are you sure you want to proceed? This action cannot be undone.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-4 w-[80%]">
        <Button variant="cancel" onClick={onCloseModal}>
          Cancel
        </Button>

        <Button onClick={handleConfirm}>Proceed</Button>
      </div>
    </div>
  );
};

export default ConfirmLevelRegistration;
