import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import { Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    id: 1,
    icon: <Phone />,
    info: "+2348123456789",
  },
  {
    id: 2,
    icon: <Mail />,
    info: "support@daaruttahseen.org",
  },
  {
    id: 3,
    icon: <MapPin />,
    info: "DaarutTahseen Institution,Taqwa Street, Phase II, Ilorin, Kwara State, Nigeria.",
  },
];

const ContactUsPage = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] h-screen text-white">
      <HomeSidebar />
      <LandingPageHeader />
      <section className="bg-primary py-5">
        <div className="w-[90%] md:w-[85%] mx-auto">
          {/* left side */}
          <div className="">
            {/* contact us up */}
            <div>
              <h1 className="font-clash font-[500] text-[40px] ">Contact Us</h1>
              <p className="font-clash font-[500] text-[25px]">
                Get in Touch with DaarutTahseen
              </p>

              <p className="font-bricolage font-[400] text-[20px]">
                Have any questions, need support, or want to learn more about
                our programs? We're here to help. Our team is ready to assist
                you with admissions, technical inquiries, feedback, or general
                questions.
              </p>
            </div>
            {/* handles down */}
            <ul className="flex flex-col gap-[30px]">
              {info.map((i) => (
                <li
                  key={i.id}
                  className="flex gap-[30px] items-center font-clash font-[500] text-[25px] "
                >
                  <span className="text-4xl">{i.icon}</span>
                  {i.info}
                </li>
              ))}
            </ul>
            <div className="map">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.86800767707!2d3.8470238698656747!3d7.319680262157586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f7a0afa8b0f%3A0x7ca47b63e6837545!2sAjawele%20Bus%20Stop%2C%20New%20Felele!5e0!3m2!1sen!2sng!4v1752242651082!5m2!1sen!2sng"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
            <div className="socials flex items-center gap-4">
              <div className="bg-white rounded-full flex items-center justify-center h-[55px] w-[55px] cursor-pointer ">
                <img src="/vw.png" alt="" />
              </div>
              <div className="bg-white rounded-full flex items-center justify-center h-[55px] w-[55px] cursor-pointer ">
                <img src="/vf.png" alt="" />
              </div>
              <div className="bg-white rounded-full flex items-center justify-center h-[55px] w-[55px] cursor-pointer ">
                <img src="/vI.png" alt="" />
              </div>
              <div className="bg-white rounded-full flex items-center justify-center h-[55px] w-[55px] cursor-pointer ">
                <img src="/Vx.png" alt="" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className=""></div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
