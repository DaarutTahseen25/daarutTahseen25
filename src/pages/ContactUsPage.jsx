import React, { useState } from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import { Mail, MapPin, Phone } from "lucide-react";
import Input from "../Components/input";
import Button from "../Components/Button";
import useContactForm from "../hooks/useContactForm";

const info = [
  {
    id: 1,
    icon: <Phone />,
    info: "+2348123456789",
  },
  {
    id: 2,
    icon: <Mail />,
    info: "daaruttahseen@gmail.com",
  },
  {
    id: 3,
    icon: <MapPin />,
    info: "18, Cucumber Drive, Arowona Adegbeye Estate, New Felele, Ibadan.",
  },
];

const ContactUsPage = () => {
 const {
   formData,
   formErrors,
   isSubmitting,
   submitMessage,
   handleChange,
   handleSubmit,
 } = useContactForm();


  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      <section className="bg-primary py-10 text-white">
        <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="w-full py-5 px-4 md:px-[30px] flex flex-col gap-9">
            <div>
              <h1 className="font-clash font-semibold text-[30px] md:text-[40px]">
                Contact Us
              </h1>
              <p className="font-clash font-medium text-[20px] md:text-[25px]">
                Get in Touch with DaarutTahseen
              </p>
              <p className="font-bricolage font-normal text-[16px] md:text-[20px] max-w-[500px]">
                Have any questions, need support, or want to learn more about
                our programs? We're here to help. Our team is ready to assist
                you with admissions, technical inquiries, feedback, or general
                questions.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {info.map((i) => (
                <li
                  key={i.id}
                  className="flex gap-6 items-start font-clash font-medium max-w-[500px] text-[18px] md:text-[20px]"
                >
                  <span className="text-3xl md:text-4xl">{i.icon}</span>
                  {i.info}
                </li>
              ))}
            </ul>

            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.86800767707!2d3.8470238698656747!3d7.319680262157586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f7a0afa8b0f%3A0x7ca47b63e6837545!2sAjawele%20Bus%20Stop%2C%20New%20Felele!5e0!3m2!1sen!2sng!4v1752242651082!5m2!1sen!2sng"
                className="w-full h-[250px] md:h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DaarutTahseen Location Map"
              />
            </div>

            <div className="socials flex items-center justify-center gap-4 flex-wrap">
              {[
                {
                  src: "vw.png",
                  href: "https://wa.me/2349043609339",
                  alt: "WhatsApp",
                },
                {
                  src: "vf.png",
                  href: "https://www.facebook.com/profile.php?id=61565958205885",
                  alt: "Facebook",
                },
                {
                  src: "vI.png",
                  href: "https://www.instagram.com/p/DK-b-NAANKL/?igsh=MWV3NXc5cWxodnE1OQ==",
                  alt: "Instagram",
                },
                {
                  src: "Vx.png",
                  href: "https://x.com/Daarultahseen/status/1934718224194834817?t=-qZlaoUHCnCaE396Cy0qBw&s=08",
                  alt: "Twitter",
                },
              ].map((item, index) => (
                <a
                  href={item.href}
                  key={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full flex items-center justify-center h-[50px] w-[50px] md:h-[55px] md:w-[55px] cursor-pointer hover:bg-gray-100 transition-colors"
                  aria-label={`Visit our ${item.alt} page`}
                >
                  <img
                    src={`/${item.src}`}
                    alt={item.alt}
                    className="h-5 w-5"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="text-primary font-bold">${item.alt.charAt(
                        0
                      )}</span>`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full py-5 px-4 md:px-[30px]">
            <form
              onSubmit={handleSubmit}
              className="p-5 md:p-[30px] bg-white rounded-[20px] text-black flex flex-col gap-7"
            >
              <h1 className="text-center text-black font-clash font-medium text-[22px] md:text-[25px]">
                Get In Touch
              </h1>

              {/* Success/Error Message */}
              {submitMessage && (
                <div
                  className={`p-3 rounded-lg text-center font-medium ${
                    submitMessage.includes("successfully")
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm font-medium">
                    {formErrors.name}
                  </p>
                )}

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm font-medium">
                    {formErrors.email}
                  </p>
                )}

                <Input
                  textArea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Type your message here..."
                  disabled={isSubmitting}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm font-medium">
                    {formErrors.message}
                  </p>
                )}

                <Button
                  type="submit"
                  className={`w-full ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-buttonhover"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
