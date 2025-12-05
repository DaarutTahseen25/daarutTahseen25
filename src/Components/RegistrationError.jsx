import React from "react";
import { XCircle } from "lucide-react";
const RegistrationError = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      <XCircle className="text-red-600 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />

      <h1 className="font-[500] text-[25px] font-clash mt-4">
        Verification Failed
      </h1>

      <p className="font-montserrat font-[700] text-[14px] text-darkest-grey text-center mt-2">
        {error}
      </p>
    </div>
  );
};

export default RegistrationError;
