import React from "react";
import { Link } from "react-router";
import HomeSidebar from "../Components/HomeSidebar";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString();

  const sectionClass = "mb-6";
  const headingClass = "text-xl font-semibold mb-2 font-clash";
  const textClass = "text-gray-600 leading-relaxed";

  return (
    <main className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header>
        <HomeSidebar />
        <LandingPageHeader />
      </header>

      <article className='w-[90%] md:w-[85%] mx-auto my-5'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800 font-clash'>
          Terms of Service
        </h1>
        <p className='text-sm mb-8 text-gray-600 leading-relaxed'>
          Last updated: {lastUpdated}
        </p>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Acceptance</h2>
          <p className={textClass}>
            By using DaarutTahseen LMS, you accept and agree to be bound to our
            Terms of Service and{" "}
            <Link to='/privacy-policy' className='text-blue-600 underline'>
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Updates to Terms of Service</h2>
          <p className={textClass}>
            DaarutTahseen Institution reserves the right to review and apply
            changes to the Terms of Service on a timely basis. You are expected
            to check the page frequently for updates, as they are binding on
            you.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. Account Use</h2>
          <p className={textClass}>
            You must provide accurate, current, and complete information
            including your NIN. You are solely responsible for your login
            credentials, OTPs, and data security.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. Payments and Fees</h2>
          <p className={textClass}>
            Fees must be paid in full before access to paid courses is granted.
            Payment is handled securely through third-party services. No refunds
            are issued once access has been granted, unless otherwise stated.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Conduct</h2>
          <p className={textClass}>You must agree not to:</p>
          <ul className='list-disc pl-6 mb-4 text-gray-600'>
            <li>Harass or abuse others</li>
            <li>Share or sell course content</li>
            <li>Use fake credentials or submit fraudulent documents</li>
            <li>Impersonate the Institution's employee or other student</li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. NIN Usage</h2>
          <p className={textClass}>
            NIN (National Identification Number) is used strictly for identity
            verification of Nigerian applicants. We comply with the Nigerian
            Data Protection Act and store this information securely.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>7. Termination</h2>
          <p className={textClass}>
            DaarutTahseen reserves the right to suspend or terminate accounts
            for policy violations without notice.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Governing Law</h2>
          <p className={textClass}>
            These Terms are governed by the laws of Nigeria. Disputes shall be
            resolved in courts located in Nigeria.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>Contact</h2>
          <p className='mb-2 text-gray-600 leading-relaxed'>
            For questions, contact us at:
          </p>
          <ul>
            <li className={textClass}>
              <strong className='font-clash'>Business Address:</strong> 18,
              Cucumber Drive, Arowona Adegbeye Estate, New Felele, Ibadan.
            </li>
            <li className={textClass}>
              <strong className='font-clash'>Email:</strong>{" "}
              daaruttahseeninstitution@gmail.com
            </li>
            <li className={textClass}>
              <strong className='font-clash'>Phone:</strong> +2349043609339
            </li>
          </ul>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default TermsOfService;
