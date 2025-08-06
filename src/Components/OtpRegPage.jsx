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
      {/* Left Section */}
      <div className='bg-cream flex flex-col justify-center items-center text-center p-6'>
        <img
          src='/logo.png'
          alt='institute-logo'
          className='w-[120px] sm:w-[160px] md:w-[200px] mb-5'
        />
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold'>
          Join Us Now!
        </h2>
        <p className='text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-4'>
          Become part of a growing online community dedicated to preserving and
          spreading Islamic knowledge with excellence.
        </p>
      </div>

      {/* Right Section */}
      <div className='flex flex-col items-center justify-start px-4 py-10 sm:px-6'>
        <h2 className='text-[20px] sm:text-[24px] text-center font-clash font-[500] mb-4'>
          OTP Verification
        </h2>

        <div className='w-full max-w-md flex flex-col gap-2 mb-6'>
          <p className='text-sm'>Enter Email OTP</p>
          <div className='flex justify-center sm:justify-between flex-wrap gap-2 sm:gap-3'>
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
                className='w-12 sm:w-[50px] h-12 sm:h-[48px] text-lg font-bold text-center rounded-lg border border-gray-400 focus:border-primary focus:shadow-md outline-none'
              />
            ))}
          </div>
        </div>

        <div className='w-full max-w-md'>
          <Button
            className='w-full mt-2'
            onClick={handleVerifyClick}
            isDisabled={!isMatch}
            isLoading={isLoading}>
            Verify
          </Button>
        </div>

        <small className='mt-4 text-sm text-center'>
          Already have an account?{" "}
          <Link to='/login' className='text-primary font-medium'>
            Login
          </Link>
        </small>
      </div>

      {/* Modals */}
      {openStep !== "" && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
          <div className='relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-lg py-6 px-6 sm:px-10 overflow-y-auto max-h-[90vh]'>
            <button
              onClick={closeModal}
              className='absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl'>
              &times;
            </button>

            {openStep === "verify" && <Verifying />}

            {openStep === "verified" && showSuccess && (
              <div className='flex flex-col items-center justify-center gap-6'>
                <img
                  src='/success.png'
                  alt='Verification success'
                  className='w-[80px] sm:w-[100px]'
                />
                <h1 className='font-[500] text-[22px] sm:text-[25px] font-clash text-center'>
                  Successful!
                </h1>
              </div>
            )}

            {openStep === "error" && showError && (
              <div className='flex flex-col items-center justify-center gap-4'>
                <img
                  src='/error.png'
                  alt='Verification failed'
                  className='w-[80px] sm:w-[100px]'
                />
                <h1 className='font-[500] text-[20px] sm:text-[22px] text-red-600 font-clash text-center'>
                  Verification Failed
                </h1>
                <p className='text-center text-gray-600 text-sm'>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpRegistration;
