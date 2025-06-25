function OtpRegistration() {
    return (
        <div className="min-h-screen flex flex-col md:grid md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-[#FFF9C4] flex flex-col justify-center items-center text-center p-4">
                <img src="/logo.png" alt="institute-logo" className="w-[200px] h-[125px] mb-5" />
                <h2 className="text-[20px] font-semibold text-[#000000]">Join Us now!</h2>
                <p className="text-[#000000] text-[17px] leading-5 mx-20">
                    Becoming part of a growing online community dedicated to preserving and spreading
                    Islamic knowledge with excellence
                </p>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-center justify-start p-4 mt-10 md:mt-20 w-full">
                <h2 className="text-[20px] font-semibold text-[#000000]">OTP VERIFICATION</h2>

                <div className="w-[300px] flex flex-col items-start mt-4">
                    <p className="text-[#000000] text-[13px]">Enter SMS OTP</p>
                    <div className="flex justify-start gap-2 mt-2">
                        {Array(6).fill(null).map((_, idx) => (
                            <input
                                name="sms-otp"
                                key={idx}
                                type="password"
                                maxLength={1}
                                className="w-[35px] h-[35px] text-[18px] font-bold text-center rounded-[6px] border border-[#ccc] focus:border-[#007BFF] focus:shadow-[0_0_5px_rgba(0,123,255,0.3)] outline-none"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-[300px] flex flex-col items-start mt-4">
                    <p className="text-[#000000] text-[13px]">Enter Email OTP</p>
                    <div className="flex justify-start gap-2 mt-2">
                        {Array(6).fill(null).map((_, idx) => (
                            <input
                                name="email-otp"
                                key={idx}
                                type="password"
                                maxLength={1}
                                className="w-[35px] h-[35px] text-[18px] font-bold text-center rounded-[6px] border border-[#ccc] focus:border-[#007BFF] focus:shadow-[0_0_5px_rgba(0,123,255,0.3)] outline-none"
                            />
                        ))}
                    </div>
                    <button className="bg-[#F6F6F6] text-[#CCCCCC] mt-5 w-[245px] h-[35px] rounded cursor-pointer">
                        Verify
                    </button>
                </div>
                <small className="text-[#000000] mt-2">
                    Already have an account?{" "}
                    <a href="#" className="text-[#009688]">
                        Login
                    </a>
                </small>
            </div>
        </div>
    );
}

export default OtpRegistration;
