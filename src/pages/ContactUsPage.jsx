import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import { Mail, MapPin, Phone } from "lucide-react";
import Input from "../Components/input";
import Button from "../Components/Button";

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
    info: "DaarutTahseen Institution, Taqwa Street, Phase II, Ilorin, Kwara State, Nigeria.",
  },
];

const ContactUsPage = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen ">
      <HomeSidebar />
      <LandingPageHeader />
      <section className="bg-primary py-10 text-white">
        <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left side */}
          <div className="w-full py-5 px-4 md:px-[30px] flex flex-col gap-9">
            {/* heading */}
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

            {/* contact info */}
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

            {/* map */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.86800767707!2d3.8470238698656747!3d7.319680262157586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f7a0afa8b0f%3A0x7ca47b63e6837545!2sAjawele%20Bus%20Stop%2C%20New%20Felele!5e0!3m2!1sen!2sng!4v1752242651082!5m2!1sen!2sng"
                className="w-full h-[250px] md:h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* socials */}
            <div className="socials flex items-center justify-center gap-4 flex-wrap">
              {[
                { src: "vw.png", href: "https://wa.me/2349043609339" },
                {
                  src: "vf.png",
                  href: "https://www.facebook.com/profile.php?id=61565958205885",
                },
                {
                  src: "vI.png",
                  href: "https://www.instagram.com/p/DK-b-NAANKL/?igsh=MWV3NXc5cWxodnE1OQ==",
                },
                {
                  src: "Vx.png",
                  href: "https://x.com/Daarultahseen/status/1934718224194834817?t=-qZlaoUHCnCaE396Cy0qBw&s=08",
                },
              ].map((src, i) => (
                <a
                  href={src.href}
                  key={i}
                  className="bg-white rounded-full flex items-center justify-center h-[50px] w-[50px] md:h-[55px] md:w-[55px] cursor-pointer"
                >
                  <img
                    src={`/${src.src}`}
                    alt={`social-${i}`}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* right side: contact form */}
          <div className="w-full py-5 px-4 md:px-[30px]">
            <form className="p-5 md:p-[30px] bg-white rounded-[20px] flex flex-col gap-7">
              <h1 className="text-center text-black font-clash font-medium text-[22px] md:text-[25px]">
                Get In Touch
              </h1>
              <div className="flex flex-col gap-3">
                <Input label="Name" name="name" />
                <Input label="Email" name="email" />
                <Input textArea label="Message" name="message" />
                <Button className="w-full hover:bg-buttonhover">
                  Send Message
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
