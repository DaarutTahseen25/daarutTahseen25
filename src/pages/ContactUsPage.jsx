import { Mail, MapPin, Phone } from "lucide-react";
import Input from "../Components/input";
import Button from "../Components/Button";
import useContactForm from "../hooks/useContactForm";
import { usePageTitle } from "../hooks/usePageTitle";

const info = [
  { id: 1, icon: <Phone />, info: "+2348123456789" },
  { id: 2, icon: <Mail />, info: "daaruttahseen@gmail.com" },
  {
    id: 3,
    icon: <MapPin />,
    info: "18, Cucumber Drive, Arowona Adegbeye Estate, New Felele, Ibadan.",
  },
];

const ContactUsPage = () => {
  usePageTitle("Contact Us");
  const {
    formData,
    formErrors,
    isSubmitting,
    submitMessage,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <main className="min-h-screen bg-primary text-white">
      <section className="py-16">
        <div className="w-[92%] md:w-[86%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="w-full space-y-12">
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="font-clash font-bold text-[36px] md:text-[48px] leading-tight">
                  Contact Us
                </h1>
                <div className="w-16 h-[3px] bg-white/90 rounded-full"></div>
              </div>
              <p className="font-clash font-semibold text-[22px] md:text-[26px] text-white/90">
                Get in Touch with DaarutTahseen
              </p>
              <p className="font-bricolage text-[17px] md:text-[20px] max-w-[620px] leading-relaxed text-white/85">
                Have questions, need support, or want to learn more? Our team is
                here to help with admissions, technical inquiries, feedback, and
                general questions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-clash font-semibold text-[20px] text-white/90">
                Reach Out To Us
              </h3>
              <ul className="flex flex-col gap-4">
                {info.map((i) => (
                  <li
                    key={i.id}
                    className="flex gap-4 items-start font-clash font-medium text-[18px] md:text-[19px] p-5 bg-white/10 border border-white/20 rounded-2xl"
                  >
                    <span className="text-3xl md:text-4xl text-white flex-shrink-0">
                      {i.icon}
                    </span>
                    <span className="text-white/90 break-words">{i.info}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-clash font-semibold text-[20px] text-white/90">
                Find Us Here
              </h3>
              <div className="rounded-2xl overflow-hidden border border-white/15">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.86800767707!2d3.8470238698656747!3d7.319680262157586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f7a0afa8b0f%3A0x7ca47b63e6837545!2sAjawele%20Bus%20Stop%2C%20New%20Felele!5e0!3m2!1sen!2sng!4v1752242651082!5m2!1sen!2sng"
                  className="w-full h-[280px] md:h-[320px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DaarutTahseen Location Map"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-clash font-semibold text-[20px] text-white/90">
                Connect With Us
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
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
                ].map((item) => (
                  <a
                    href={item.href}
                    key={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-white/20 rounded-full flex items-center justify-center h-[52px] w-[52px] md:h-[58px] md:w-[58px]"
                    aria-label={`Visit our ${item.alt} page`}
                  >
                    <img
                      src={`/${item.src}`}
                      alt={item.alt}
                      className="h-5 w-5 md:h-6 md:w-6"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span class="text-white font-semibold text-base">${item.alt.charAt(
                          0
                        )}</span>`;
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full p-8 md:p-10 bg-white text-black rounded-2xl border border-gray-100 flex flex-col gap-7"
            >
              <div className="space-y-2 text-left">
                <h1 className="text-black font-clash font-bold text-[26px] md:text-[30px]">
                  Get In Touch
                </h1>
                <p className="text-gray-600 font-bricolage text-[15px] md:text-[16px]">
                  We'd love to hear from you.
                </p>
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-xl text-center text-[15px] font-semibold ${
                    submitMessage.includes("successfully")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <div className="flex flex-col gap-5">
                <div className="space-y-2">
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
                    <p className="text-red-600 text-sm font-semibold flex items-center gap-2 mt-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
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
                    <p className="text-red-600 text-sm font-semibold flex items-center gap-2 mt-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    textArea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } min-h-[120px]`}
                    placeholder="Type your message here..."
                    disabled={isSubmitting}
                  />
                  {formErrors.message && (
                    <p className="text-red-600 text-sm font-semibold flex items-center gap-2 mt-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className={`w-full py-3.5 text-[16px] font-semibold rounded-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
    </main>
  );
};

export default ContactUsPage;
