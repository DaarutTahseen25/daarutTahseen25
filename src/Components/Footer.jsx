import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-[40px] md:py-[50px]">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-10">
        <div className="w-full text-white flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-5">
          {/* Quick Links */}
          <div>
            <h1 className="font-clash font-[500] text-[20px] mb-3">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2">
              {["Home", "About Us", "Courses", "Admissions"].map((item) => (
                <li
                  key={item}
                  className="font-clash font-[400] text-[16px] hover:text-primary transition-colors duration-300"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h1 className="font-clash font-[500] text-[20px] mb-3">
              Contact Us
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="font-clash font-[400] text-[16px]">
                Email:{" "}
                <a
                  href="mailto:daaruttahseen@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  daaruttahseen@gmail.com
                </a>
              </li>
              <li className="font-clash font-[400] text-[16px]">
                Phone:{" "}
                <a
                  href="https://wa.me/2349043609339"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +2349043609339
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h1 className="font-clash font-[500] text-[20px] mb-3">Legal</h1>
            <ul className="flex flex-col gap-2">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li
                  key={item}
                  className="font-clash font-[400] text-[16px] hover:text-primary transition-colors duration-300"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h1 className="font-clash font-[500] text-[20px] mb-3">Social</h1>
            <div className="flex gap-4 items-center">
              <a href="https://x.com/Daarultahseen/status/1934718224194834817?t=-qZlaoUHCnCaE396Cy0qBw&s=08">
                <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565958205885">
                <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/p/DK-b-NAANKL/?igsh=MWV3NXc5cWxodnE1OQ==">
                <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-white font-clash font-[500] text-[16px] md:text-[18px] text-center">
          &copy; DaarutTahseen Institution
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
