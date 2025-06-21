import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black   md:h-[213px] flex justify-center items-center py-[27px]">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-10 md:gap-3">
        <div className=" w-full text-white flex flex-col md:flex-row md:justify-between items-start gap-10">
          {/* Quick links */}
          <div>
            <h1 className="font-clash font-[500]  text-[20px] leading-[100%] tracking-[0%] mb-4 ">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">Home</a>
              </li>
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">About Us</a>
              </li>
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">Courses</a>
              </li>
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">Admissions</a>
              </li>
            </ul>
          </div>
          {/* contact us */}
          <div>
            <h1 className="font-clash font-[500]  text-[20px] leading-[100%] tracking-[0%] mb-4 ">
              Contact Us
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                Email:{" "}
                <a href="mailto:daaruttahseen@gmail.com">
                  daaruttahseen@gmail.com
                </a>
              </li>
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                Phone: <a href="https://wa.me/2349043609339">+2349043609339</a>
              </li>
            </ul>
          </div>
          {/* legal */}
          <div>
            <h1 className="font-clash font-[500]  text-[20px] leading-[100%] tracking-[0%] mb-4 ">
              Legal
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-clash font-[400]  text-[18px] hover:text-primary transition-colors duration-300 leading-[100%] tracking-[0%]">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          {/* social */}
          <div>
            <h1 className="font-clash font-[500]  text-[20px] leading-[100%] tracking-[0%] mb-4 ">
              Social
            </h1>
            <div className="flex gap-3 items-baseline">
              <a href="https://x.com/Daarultahseen/status/1934718224194834817?t=-qZlaoUHCnCaE396Cy0qBw&s=08">
                <img src="/twitter.png" alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565958205885">
                <img src="/facebook.png" alt="" />
              </a>
              <a href="https://www.instagram.com/p/DK-b-NAANKL/?igsh=MWV3NXc5cWxodnE1OQ==">
                <img src="/instagram.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-white font-clash font-[500] self-auto md:self-center text-[20px] leading-[100%] tracking-[0%]">
          &copy;DaarutTasheen Institution
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
