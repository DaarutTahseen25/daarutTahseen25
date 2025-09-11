import React from 'react'
import { XCircle } from "lucide-react";
const RegistrationError = ({error}) => {
  return (
    <div className='min-w-[300px] sm:w-[500px] sm:h-[328px] max-h-[450px] flex flex-col items-center justify-center bg-white rounded-[20px] py-[48px] px-[30px]'>
                <XCircle className='text-red-600 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]' />

              <h1 className='font-[500] text-[25px] font-clash mt-4'>
               Verification Failed
             </h1>

           <p className='font-montserrat font-[700] text-[14px] text-darkest-grey text-center mt-2'>
           {error}
          </p>
          </div>
  )
}

export default RegistrationError
