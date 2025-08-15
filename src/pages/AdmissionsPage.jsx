import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import RegistrationCard from "../Components/RegistrationCard";
import Button from "../Components/Button";
import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";

const AdmissionsPage = () => {
  usePageTitle("Admission Process");
  return (
    <main className=''>
      <section>
        <div className=''>
          <div className='w-[90%] sm:w-[85%] md:w-[75%] mx-auto py-10'>
            <h1 className='text-2xl sm:text-3xl md:text-[40px] font-medium text-[#360400] text-center font-clash'>
              Admissions Overview
            </h1>
            <p className='text-base sm:text-lg text-center mt-4'>
              Our admissions process is designed to be simple, inclusive, and
              efficient, ensuring a smooth transition into our structured
              Quranic and Islamic studies programs.
            </p>
            <p className='text-base sm:text-lg text-center mt-4'>
              Whether you're a student seeking to deepen your understanding of
              Islamic knowledge or a teacher ready to share your expertise,
              DaarutTahseen offers a pathway tailored to your goals.
            </p>
            <p className='text-base sm:text-lg text-center mt-4'>
              We invite you to choose your registration type and begin your
              journey with us today.
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-0 w-[90%] sm:w-[80%] md:w-[55%] mx-auto mt-14'>
            <RegistrationCard
              title='Student Registration'
              points={[
                "Access structured Quranic programs",
                "Includes assessments & progression",
                "For learners of all levels",
              ]}
              children='Get Started'
              directory='/create/student-account'
            />
            <RegistrationCard
              title='Teacher Registration'
              points={[
                "Share your knowledge to students",
                "For qualified educators",
                "Access teaching dashboard",
              ]}
              children='Get Started'
              directory='/create/tutor-account'
            />
          </div>

          <div className='py-10'>
            <h1 className='text-2xl sm:text-3xl md:text-[40px] font-medium text-[#360400] text-center font-clash'>
              What You Will Need
            </h1>
            <ol className='w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-6 list-disc pl-5 space-y-5 text-base sm:text-lg md:text-[20px] font-clash font-normal'>
              <li>
                NIN (National Identification Number): For identity verification.
              </li>
              <li>Email Address: For communication and receiving materials.</li>
              <li>Phone Number: Required for SMS verification.</li>
              <li>Password: Create a secure password for your account.</li>
              <li>
                Upload NIN (if needed): A clear image of your NIN card may be
                required.
              </li>
              <li>
                Agree to Terms: Accept our Privacy Policy and Terms of Service.
              </li>
              <li>
                (For Teachers) Optional Documents: Upload credentials to
                complete your profile.
              </li>
            </ol>
          </div>

          <div className='bg-[#FFFCE1] py-10'>
            <h1 className='text-2xl sm:text-3xl md:text-[40px] font-medium text-[#360400] text-center font-clash'>
              Ready To Begin?
            </h1>
            <div className='flex justify-between gap-6 md:gap-0 w-[90%] sm:w-[80%] md:w-[55%] mx-auto mt-10'>
              <div className='w-[48%]'>
                <Link to='/create/student-account'>
                  <Button
                    children='Start Student Registration'
                    className='w-full text-[15px] sm:text-[20px]'
                  />
                </Link>
              </div>
              <div className='w-[48%]'>
                <Link to='/create/tutor-account'>
                  <Button
                    children='Start Teacher Registration'
                    className='w-full text-[15px] sm:text-[20px]'
                  />
                </Link>
              </div>
            </div>

            <p className='w-[90%] sm:w-[80%] md:w-[60%] mx-auto text-center text-base sm:text-lg mt-6'>
              For assistance or questions during the admission process, please
              don't hesitate to contact our
              <span className='text-[#009688] font-medium'>
                {" "}
                support team.
              </span>{" "}
              We are here to help
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
