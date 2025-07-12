import React from "react";
import { Link } from "react-router-dom"; 

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: [Insert Date]</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance</h2>
        <p>
          By using DaarutTahseen LMS, you accept and agree to be bound to our
          Terms of Service and <Link to="/privacypolicy.jsx" className="text-blue-600 underline">Privacy Policy</Link>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Updates to Terms of Service</h2>
        <p>
          DaarutTahseen Institution reserves the right to review and apply changes to
          the Terms of Service on a timely basis. You are expected to check the page
          frequently for updates, as they are binding on you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Account Use</h2>
        <p>
          You must provide accurate, current, and complete information including your NIN.
          You are solely responsible for your login credentials, OTPs, and data security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Payments and Fees</h2>
        <p>
          Fees must be paid in full before access to paid courses is granted. Payment is handled
          securely through third-party services. No refunds are issued once access has been granted,
          unless otherwise stated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Conduct</h2>
        <p>You must agree not to:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Harass or abuse others</li>
          <li>Share or sell course content</li>
          <li>Use fake credentials or submit fraudulent documents</li>
          <li>Impersonate the Institution's employee or other student</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. NIN Usage</h2>
        <p>
          NIN (National Identification Number) is used strictly for identity verification of Nigerian
          applicants. We comply with the Nigerian Data Protection Act and store this information securely.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>
          DaarutTahseen reserves the right to suspend or terminate accounts for policy violations
          without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Nigeria. Disputes shall be resolved in courts
          located in Nigeria.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="mb-2">For questions, contact us at:</p>
        <ul>
          <li><strong>Business Address:</strong> 18, Cucumber Drive, Arowona Adegbeye Estate, New Felele, Ibadan.</li>
          <li><strong>Email:</strong> daaruttahseeninstitution@gmail.com</li>
          <li><strong>Phone:</strong> +2349043609339</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;