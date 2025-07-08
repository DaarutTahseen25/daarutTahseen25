 
import React from "react";
import Button from "../Components/Button";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";

const PrivacyPolicy = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              At DaarutTahseen Institution, we collect information that you provide directly to us, such as when you create an account, enroll in courses, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Educational background and preferences</li>
              <li>Payment information for course fees</li>
              <li>Communication records and support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Provide and improve our educational services</li>
              <li>Process enrollments and manage your account</li>
              <li>Communicate with you about courses and updates</li>
              <li>Ensure the security and integrity of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              3. Information Sharing
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Educational partners for course delivery (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              4. Data Security
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              5. Your Rights
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              6. Cookies and Tracking
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our website uses cookies to enhance your browsing experience and provide personalized content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              7. Updates to This Policy
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              8. Contact Us
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>DaarutTahseen Institution</strong><br />
                Email: privacy@daaruttahseen.org<br />
                Phone: [Your Phone Number]<br />
                Address: [Your Institution Address]
              </p>
            </div>
          </section>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;