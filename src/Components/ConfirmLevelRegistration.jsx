import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import useUIStore from "../store/useUIStore";

const ConfirmLevelRegistration = ({ onCloseModal, openModal, title }) => {
  const navigate = useNavigate();
  const { setLevel, setAdmissionProcess } = useUIStore();

  const handleConfirm = () => {
    console.log("✅ Proceed clicked");

    // 1. Close modal
    onCloseModal();

    setTimeout(() => {
      console.log("✅ Updating level and admission process");
      setLevel(title); // Save selected level
      setAdmissionProcess(true); // Mark registration complete

      // 2. Open success modal
      openModal("success");

      // 3. Navigate to admission page after brief delay
      setTimeout(() => {
        console.log("✅ Navigating to /dashboard/admission");
        navigate("/dashboard/admission", { replace: true });
      }, 500);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("❌ Cancel clicked");
    onCloseModal();
  };

  return (
    <div className='w-[98%] mx-auto sm:w-[500px] sm:h-[328px] max-h-[450px] flex items-center justify-center bg-white rounded-[20px] py-[48px] px-[30px]'>
      <div className='w-[95%] mx-auto flex flex-col gap-[32px] items-center'>
        <img src='/caution.png' alt='Caution' />

        <div className='flex flex-col items-center justify-center gap-2 text-center'>
          <h1 className='font-[500] text-[25px] font-clash'>
            Confirm Registration
          </h1>
          <p className='font-montserrat font-[700] text-[14px] text-darkest-grey'>
            You have selected the <span className='text-primary'>{title}</span>.
            Are you sure you want to proceed? This action cannot be undone.
          </p>
        </div>

        <div className='flex items-center justify-between gap-5 sm:gap-[136px]'>
          <Button
            variant='cancel'
            onClick={handleCancel}
            className='rounded-[10px] w-[112px] h-[40px]'>
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            className='rounded-[10px] w-[112px] h-[40px] hover:bg-buttonhover'>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLevelRegistration;
