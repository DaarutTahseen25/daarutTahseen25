import React from "react";

import Footer from "../Components/Footer";

import RegistrationCard from "../Components/RegistrationCard";
import Button from "../Components/Button";
import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  IdCard,
  Mail,
  Phone,
  Lock,
  Upload,
  CheckCircle,
  FileText,
} from "lucide-react";

const requirements = [
  {
    title: "NIN (National Identification Number)",
    description: "For identity verification",
    icon: IdCard,
  },
  {
    title: "Email Address",
    description: "For communication and receiving materials",
    icon: Mail,
  },
  {
    title: "Phone Number",
    description: "Required for SMS verification",
    icon: Phone,
  },
  {
    title: "Secure Password",
    description: "Create a strong password for your account",
    icon: Lock,
  },
  {
    title: "Upload NIN (if needed)",
    description: "A clear image of your NIN card may be required",
    icon: Upload,
  },
  {
    title: "Terms Agreement",
    description: "Accept our Privacy Policy and Terms of Service",
    icon: CheckCircle,
  },
];

const AdmissionsPage = () => {
  usePageTitle("Admission Process");

  return (
    <main className="min-h-screen">
      {/* Hero Section with modern gradient */}
      <section className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFCE1]/30 via-transparent to-[#009688]/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#009688]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#360400]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 w-[90%] sm:w-[85%] md:w-[75%] mx-auto py-20">
          {/* Modern hero title */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="px-6 py-2 bg-[#009688]/10 rounded-full text-[#009688] font-medium text-sm mb-4">
                Start Your Journey
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#360400] font-clash leading-tight mb-8">
              Admissions
              <span className="block text-[#009688] bg-gradient-to-r from-[#009688] to-[#360400] bg-clip-text ">
                Overview
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#009688] to-[#360400] mx-auto rounded-full mb-8"></div>
          </div>

          {/* description  */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className=" p-8">
              <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed">
                Our admissions process is designed to be{" "}
                <span className="font-semibold text-[#009688]">simple</span>,{" "}
                <span className="font-semibold text-[#009688]">inclusive</span>,
                and{" "}
                <span className="font-semibold text-[#009688]">efficient</span>,
                ensuring a smooth transition into our structured Quranic and
                Islamic studies programs.
              </p>
            </div>

            <div className="bg-[#009688]/10  rounded-2xl p-8 border border-[#009688]/20">
              <p className="text-lg sm:text-xl text-[#360400] text-center leading-relaxed font-medium">
                We invite you to choose your registration type and begin your
                journey with us today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Cards Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="w-[90%] sm:w-[85%] md:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#360400] font-clash mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the registration type that best fits your learning goals
            </p>
          </div>

          <div className=" ">
            <div className="transform  transition-transform duration-300">
              <RegistrationCard
                title="Student Registration"
                points={[
                  "Access structured Quranic programs",
                  "Includes assessments & progression",
                  "For learners of all levels",
                ]}
                children="Get Started"
                directory="/apply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="w-[90%] sm:w-[85%] md:w-[75%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#360400] font-clash mb-4">
              What You Will Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prepare these essential items for a smooth registration process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-6  border border-gray-100  hover:border-[#009688]/20 transition-all duration-300 ${
                      item.forTeachers ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-8 h-8 text-[#009688]" />{" "}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-clash font-bold text-lg text-[#360400] mb-2 group-hover:text-[#009688] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#009688]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#360400]/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 w-[90%] sm:w-[85%] md:w-[75%] mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#360400] font-clash mb-6">
              Ready To Begin?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your Islamic education journey
            </p>
          </div>

          <div className="flex items-center justify-center mb-12">
            <Link to="/apply" className="group">
              <Button className="w-full py-6 px-8  hover:bg-[#009688] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl  ">
                Start Student Registration
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Button>
            </Link>
          </div>

          <div className=" p-8 ">
            <p className="text-lg text-gray-700 leading-relaxed">
              For assistance or questions during the admission process, please
              don't hesitate to contact our
              <span className="font-bold text-[#009688] hover:text-[#360400] transition-colors cursor-pointer">
                {" "}
                support team
              </span>
              . We are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
