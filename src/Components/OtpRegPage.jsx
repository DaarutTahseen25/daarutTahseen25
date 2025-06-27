import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Verifying from "./dashboard/Verifying";

function OtpRegistration() {
  const smsOtpRefs = useRef([]);
  const emailOtpRefs = useRef([]);

  const [smsOtp, setSmsOtp] = useState(Array(4).fill(""));
  const [emailOtp, setEmailOtp] = useState(Array(4).fill(""));

  const isMatch =
    smsOtp.every((val) => val !== "") && emailOtp.every((val) => val !== "");

  const handleOtpInput = (e, idx, refs, setOtp, otpArray) => {
    const value = e.target.value;
    const key = e.nativeEvent.inputType;

    // Update OTP value
    const newOtp = [...otpArray];
    newOtp[idx] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && idx < refs.current.length - 1) {
      refs.current[idx + 1].focus();
    }

    // Move to previous input on backspace
    if (key === "deleteContentBackward" && idx > 0 && !value) {
      refs.current[idx - 1].focus();
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="bg-cream flex flex-col justify-center items-center text-center p-6">
        <img
          src="/logo.png"
          alt="institute-logo"
          className="w-[150px] sm:w-[180px] md:w-[200px] h-auto mb-5"
        />
        <h2 className="text-xl md:text-2xl font-semibold">Join Us now!</h2>
        <p className="text-sm md:text-base leading-5 max-w-sm sm:max-w-md px-4">
          Becoming part of a growing online community dedicated to preserving
          and spreading Islamic knowledge with excellence
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center justify-start px-4 py-6 sm:py-10">
        <h2 className="text-[24px] text-center font-clash font-[500] mb-4">
          OTP VERIFICATION
        </h2>

        {/* SMS OTP */}
        <div className="w-full max-w-md flex flex-col gap-2 mb-6">
          <p className="text-sm">Enter SMS OTP</p>
          <div className="flex justify-between flex-wrap gap-2 sm:gap-3">
            {smsOtp.map((val, idx) => (
              <input
                key={idx}
                type="text"
                name="sms-otp"
                maxLength={1}
                value={val}
                ref={(el) => (smsOtpRefs.current[idx] = el)}
                onChange={(e) =>
                  handleOtpInput(e, idx, smsOtpRefs, setSmsOtp, smsOtp)
                }
                className="w-[57px] h-[48px] text-lg font-bold text-center rounded-[10px] border border-dark-grey focus:border-primary focus:shadow-[0_0_5px_rgba(0,150,136,0.3)] outline-none"
              />
            ))}
          </div>
        </div>

        {/* Email OTP */}
        <div className="w-full max-w-md flex flex-col gap-2 mb-6">
          <p className="text-sm">Enter Email OTP</p>
          <div className="flex justify-between flex-wrap gap-2 sm:gap-3">
            {emailOtp.map((val, idx) => (
              <input
                key={idx}
                type="text"
                name="email-otp"
                maxLength={1}
                value={val}
                ref={(el) => (emailOtpRefs.current[idx] = el)}
                onChange={(e) =>
                  handleOtpInput(e, idx, emailOtpRefs, setEmailOtp, emailOtp)
                }
                className="w-[57px] h-[48px] text-lg font-bold text-center rounded-[10px] border border-dark-grey focus:border-primary focus:shadow-[0_0_5px_rgba(0,150,136,0.3)] outline-none"
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <div className="w-full max-w-md">
          <Modal>
            <Modal.Open opens="verify">
              <Button className="w-full mt-2" isDisabled={!isMatch}>
                Verify
              </Button>
            </Modal.Open>
            <Modal.Window name="verify">
              <Verifying />
            </Modal.Window>
            <Modal.Window name="verified">
              <div className="min-w-[300px] sm:w-[500px] h-[328px] flex flex-col items-center justify-center gap-10 bg-white rounded-[20px] py-3 px-10">
                <img src="/success.png" alt="Verifying animation" />
                <h1 className="font-[500] text-[25px] font-clash ">
                  Successful
                </h1>
              </div>
            </Modal.Window>
            d
          </Modal>
        </div>

        {/* Footer */}
        <small className="mt-4">
          Already have an account?{" "}
          <a href="#" className="text-primary font-medium">
            Login
          </a>
        </small>
      </div>
    </div>
  );
}

export default OtpRegistration;
