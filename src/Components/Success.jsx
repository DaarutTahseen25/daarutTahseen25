import React from "react";
import Button from "./Button";

const Success = ({ onCloseModal, title }) => {
  return (
    <div className='min-w-[300px] sm:w-[500px] sm:h-[328px] max-h-[450px] flex flex-col gap-4 items-center justify-center bg-white rounded-[20px] py-[36px] px-[24px] sm:py-[48px] sm:px-[30px]'>
      <img src='/success.png' alt='Success' className='w-[80px] sm:w-[100px]' />

      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='font-[600] text-[20px] sm:text-[25px] leading-tight font-clash'>
          Registration Successful
        </h1>

        <p className='font-montserrat font-[500] text-[13px] sm:text-[14px] text-darkest-grey max-w-[90%] sm:max-w-[400px]'>
          You have successfully registered for the{" "}
          <span className='text-primary font-[700]'>{title}</span>. Your
          placement test will be scheduled soon. Please check your dashboard
          regularly to see when it becomes available.
        </p>
      </div>

      <div className='flex items-center justify-center'>
        <Button
          onClick={onCloseModal}
          className='w-[91px] h-[40px] rounded-[10px] hover:bg-buttonhover'>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Success;
