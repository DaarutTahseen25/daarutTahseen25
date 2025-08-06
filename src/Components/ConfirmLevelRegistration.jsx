import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import useUIStore from "../store/useUIStore";
import { useAuth } from "./../contexts/AuthContext";

const ConfirmLevelRegistration = ({ title, onProceed }) => {
  const { user } = useAuth();

  return (
    <div className='min-w-[300px] sm:w-[500px] sm:h-[328px] max-h-[450px] flex flex-col gap-4 items-center justify-center bg-white rounded-[20px] py-[36px] px-[24px] sm:py-[48px] sm:px-[30px]'>
      <img src='/caution.png' alt='Caution' className='w-[60px] sm:w-[80px]' />

      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='font-[600] text-[20px] sm:text-[25px] leading-tight font-clash'>
          Confirm Registration
        </h1>
        <p className='font-montserrat font-[500] text-[13px] sm:text-[14px] text-darkest-grey max-w-[90%] sm:max-w-[400px]'>
          You have selected the{" "}
          <span className='text-primary font-[700]'>{title}</span>. Are you sure
          you want to proceed? This action cannot be undone.
        </p>
      </div>

      <div className='flex items-center justify-between gap-4 sm:gap-[136px] mt-4'>
        <Button
          variant='cancel'
          className='rounded-[10px] w-[112px] h-[40px] text-sm sm:text-base'>
          Cancel
        </Button>

        <Button
          className='rounded-[10px] w-[112px] h-[40px] hover:bg-buttonhover text-sm sm:text-base'
          onClick={() => onProceed("error")}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default ConfirmLevelRegistration;
