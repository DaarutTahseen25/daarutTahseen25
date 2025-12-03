import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Button from "./Button";
import Verifying from "./Verifying";
import useVerifyOtp from "../hooks/useVerifyOtp";
import { Link, useLocation, useNavigate } from "react-router";
import {
  Mail,
  Shield,
  ArrowLeft,
  X,
  CheckCircle,
  XCircle,
  Loader2,
  Clock,
  RefreshCw,
} from "lucide-react";
import useResendOtp from "../hooks/useResendOtp";
import { toast } from "react-toastify";

function OtpRegistration() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    resendOtp,
    isLoading: resendLoading,
    message,
    error: resendError,
  } = useResendOtp();
  const { verifyOtp, isLoading, showSuccess, showError, error } =
    useVerifyOtp();

  const [cooldown, setCooldown] = useState(0);
  const [emailOtp, setEmailOtp] = useState(Array(6).fill(""));
  const [openStep, setOpenStep] = useState("");

  const emailOtpRefs = useRef([]);
  const email = state?.email;
  const isComplete = emailOtp.every((val) => val !== "");

  // Cooldown timer
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleOtpInput = (e, idx) => {
    const value = e.target.value;
    const newOtp = [...emailOtp];

    // Handle paste
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedCode[i] || "";
      }
      setEmailOtp(newOtp);

      const lastFilledIndex = newOtp.findLastIndex((digit) => digit !== "");
      const focusIndex = Math.min(lastFilledIndex + 1, 5);
      emailOtpRefs.current[focusIndex]?.focus();
      return;
    }

    // Regular input
    newOtp[idx] = value;
    setEmailOtp(newOtp);

    // Auto-focus next input
    if (value && idx < 5) {
      emailOtpRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !emailOtp[idx] && idx > 0) {
      emailOtpRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerifyClick = async () => {
    if (!email) {
      toast.error("Email not found. Please register again.");
      return;
    }

    const code = emailOtp.join("");
    setOpenStep("verify");

    const result = await verifyOtp(email, code);

    if (result?.success) {
      setOpenStep("verified");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } else {
      setOpenStep("error");
    }
  };

  const handleResendClick = () => {
    if (!email) return;
    resendOtp(email);
    setCooldown(30);
  };

  const closeModal = () => setOpenStep("");

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Left Section - Welcome */}
      <div className="bg-cream flex flex-col justify-center items-center text-center p-6 lg:p-12">
        <div className="space-y-6 max-w-md">
          {/* Logo */}
          <div className="relative">
            <img
              src="/logo.png"
              alt="institute-logo"
              className="w-32 sm:w-40 md:w-48 mx-auto hover:scale-105 duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-clash text-accent">
              Almost There!
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-bricolade">
              We've sent a verification code to your email. Enter it below to
              complete your registration.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - OTP Form */}
      <div className="flex flex-col items-center justify-center px-6 py-8 bg-white/90 backdrop-blur-sm">
        <div className="w-full max-w-sm space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-accent font-clash mb-1">
                Verify Your Email
              </h2>
              <p className="text-gray-600 text-sm font-bricolade">
                Enter the 6-digit code sent to
              </p>
            </div>
            {email && (
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full">
                <span className="text-primary font-medium text-sm">
                  {email}
                </span>
              </div>
            )}
          </div>

          {/* OTP Input Section */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700 text-center">
              Verification Code
            </label>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {emailOtp.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  maxLength="6"
                  value={val}
                  ref={(el) => (emailOtpRefs.current[idx] = el)}
                  onChange={(e) => handleOtpInput(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-bold rounded-lg border-2 transition-all duration-200 outline-none ${
                    val
                      ? "border-primary bg-primary/5 text-accent shadow-md"
                      : "border-gray-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  }`}
                />
              ))}
            </div>

            {/* Error Display */}
            {showError && error && (
              <div className="text-center p-2 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Verify Button */}
          <Button
            className={`w-full py-3 font-semibold transition-all duration-200 ${
              !isComplete
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            }`}
            variant={isComplete ? "primary" : "secondary"}
            onClick={handleVerifyClick}
            disabled={!isComplete || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Verify Code
              </span>
            )}
          </Button>

          {/* Resend Section */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-sm text-gray-600">Didn't receive the code?</p>
            <button
              onClick={handleResendClick}
              disabled={resendLoading || cooldown > 0}
              className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                !resendLoading && cooldown === 0 ? "hover:underline" : ""
              }`}
            >
              {resendLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Resending...
                </>
              ) : cooldown > 0 ? (
                <>
                  <Clock className="w-4 h-4" />
                  Resend in {cooldown}s
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Resend Code
                </>
              )}
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center pt-4">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500">
                  Already verified?
                </span>
              </div>
            </div>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-all duration-200 hover:gap-3 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Modals */}
      <Dialog
        open={openStep !== ""}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent className="sm:max-w-sm bg-white">
          <DialogHeader className="hidden">
            <DialogTitle>Verification Status</DialogTitle>
          </DialogHeader>

          <div className="py-4">
            {/* Verifying State */}
            {openStep === "verify" && (
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative">
                  <Loader2 className="w-16 h-16 animate-spin text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-clash font-semibold text-gray-800 mb-2">
                    Verifying Code...
                  </h3>
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Success State */}
            {openStep === "verified" && showSuccess && (
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative">
                  <CheckCircle className="w-20 h-20 text-green-500 animate-[scale-in_0.3s_ease-out]" />
                  <div className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-40 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-clash font-semibold text-gray-800 mb-2">
                    Verification Successful!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Redirecting to login page...
                  </p>
                </div>
              </div>
            )}

            {/* Error State */}
            {openStep === "error" && showError && (
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative">
                  <XCircle className="w-20 h-20 text-red-500 animate-[shake_0.5s_ease-in-out]" />
                  <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-40 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-clash font-semibold text-red-600 mb-2">
                    Verification Failed
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {error || "Please check your code and try again."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(4px);
          }
        }
      `}</style>
    </div>
  );
}

export default OtpRegistration;
