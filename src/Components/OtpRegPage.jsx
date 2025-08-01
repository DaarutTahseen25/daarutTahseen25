import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Verifying from "./Verifying";
import useVerifyOtp from "../hooks/useVerifyOtp";
import { Link, useLocation, useNavigate } from "react-router";

function OtpRegistration() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { verifyOtp, isLoading, showSuccess, showError, error } =
    useVerifyOtp();

  const email = state?.email;
  const emailOtpRefs = useRef([]);
  const [emailOtp, setEmailOtp] = useState(Array(6).fill(""));
  const [openStep, setOpenStep] = useState("");

  const isMatch = emailOtp.every((val) => val !== "");

  const handleOtpInput = (e, idx, refs, setOtp, otpArray) => {
    const value = e.target.value;
    const key = e.nativeEvent.inputType;

    const newOtp = [...otpArray];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && idx < refs.current.length - 1) {
      refs.current[idx + 1].focus();
    }

    if (key === "deleteContentBackward" && idx > 0 && !value) {
      refs.current[idx - 1].focus();
    }
  };

  const handleVerifyClick = async () => {
    if (!email) {
      alert("Email not found. Please register again.");
      return;
    }

    const code = emailOtp.join("");
    setOpenStep("verify");

    const result = await verifyOtp(email, code);

    if (result?.success) {
      setOpenStep("verified");

      // Auto redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } else {
      setOpenStep("error");
    }
  };

  const closeModal = () => setOpenStep("");

  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-2'>
      {/* Left Side */}
      <div className='bg-cream flex flex-col justify-center items-center text-center p-6'>
        <img
          src='/logo.png'
          alt='institute-logo'
          className='w-[150px] sm:w-[180px] md:w-[200px] h-auto mb-5'
        />
        <h2 className='text-xl md:text-2xl font-semibold'>Join Us now!</h2>
        <p className='text-sm md:text-base leading-5 max-w-sm sm:max-w-md px-4'>
          Becoming part of a growing online community dedicated to preserving
          and spreading Islamic knowledge with excellence
        </p>
      </div>

      {/* Right Side */}
      <div className='flex flex-col items-center justify-start px-4 py-6 sm:py-10'>
        <h2 className='text-[24px] text-center font-clash font-[500] mb-4'>
          OTP VERIFICATION
        </h2>

        <div className='w-full max-w-md flex flex-col gap-2 mb-6'>
          <p className='text-sm'>Enter Email OTP</p>
          <div className='flex justify-between flex-wrap gap-2 sm:gap-3'>
            {emailOtp.map((val, idx) => (
              <input
                key={idx}
                type='text'
                maxLength={1}
                value={val}
                ref={(el) => (emailOtpRefs.current[idx] = el)}
                onChange={(e) =>
                  handleOtpInput(e, idx, emailOtpRefs, setEmailOtp, emailOtp)
                }
                className='w-[57px] h-[48px] text-lg font-bold text-center rounded-[10px] border border-dark-grey focus:border-primary focus:shadow-[0_0_5px_rgba(0,150,136,0.3)] outline-none'
              />
            ))}
          </div>
        </div>

        {error && openStep === "error" && (
          <p className='text-red-500 text-sm mb-4 text-center'>{error}</p>
        )}

        <div className='w-full max-w-md'>
          <Button
            className='w-full mt-2'
            onClick={handleVerifyClick}
            isDisabled={!isMatch}
            isLoading={isLoading}>
            Verify
          </Button>
        </div>

        <small className='mt-4'>
          Already have an account?{" "}
          <Link to='/login' className='text-primary font-medium'>
            Login
          </Link>
        </small>
      </div>

      {/* Modals */}
      {openStep !== "" && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div className='relative'>
            <button
              onClick={closeModal}
              className='absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl'>
              &times;
            </button>

            {openStep === "verify" && <Verifying />}

            {openStep === "verified" && showSuccess && (
              <div className='min-w-[300px] sm:w-[500px] h-[328px] flex flex-col items-center justify-center gap-10 bg-white rounded-[20px] py-3 px-10'>
                <img src='/success.png' alt='Verification success' />
                <h1 className='font-[500] text-[25px] font-clash'>
                  Successful!
                </h1>
              </div>
            )}

            {openStep === "error" && showError && (
              <div className='min-w-[300px] sm:w-[500px] h-[328px] flex flex-col items-center justify-center gap-6 bg-white rounded-[20px] py-3 px-8'>
                <img src='/error.png' alt='Verification failed' />
                <h1 className='font-[500] text-[22px] text-red-600 font-clash'>
                  Verification Failed
                </h1>
                <p className='text-center text-gray-600'>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpRegistration;
