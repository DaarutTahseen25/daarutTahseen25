import { Mail, MapPin, Phone } from "lucide-react";
import Input from "../Components/input";
import Button from "../Components/Button";
import useContactForm from "../hooks/useContactForm";
import { usePageTitle } from "../hooks/usePageTitle";

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
    <main className='min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90'>
      <section className='py-16 text-white'>
        <div className='w-[90%] md:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Side */}
          <div className='w-full py-8 px-6 md:px-[40px] flex flex-col gap-12'>
            {/* Header Section */}
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='font-clash font-bold text-[40px] md:text-[56px] leading-tight text-white'>
                  Contact Us
                </h1>
                <div className='w-20 h-1 bg-white rounded-full'></div>
              </div>
              <p className='font-clash font-semibold text-[24px] md:text-[28px] text-white/90'>
                Get in Touch with DaarutTahseen
              </p>
              <p className='font-bricolage font-normal text-[18px] md:text-[22px] max-w-[600px] leading-relaxed text-white/80'>
                Have any questions, need support, or want to learn more about
                our programs? We're here to help. Our team is ready to assist
                you with admissions, technical inquiries, feedback, or general
                questions.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              <h3 className='font-clash font-semibold text-[22px] text-white/90 mb-6'>
                Reach Out To Us
              </h3>
              <ul className='flex flex-col gap-8'>
                {info.map((i) => (
                  <li
                    key={i.id}
                    className='flex gap-6 items-start font-clash font-medium max-w-[600px] text-[18px] md:text-[20px] p-6 bg-white/10 backdrop-blur-sm rounded-2xl'>
                    <span className='text-4xl md:text-5xl text-white flex-shrink-0'>
                      {i.icon}
                    </span>
                    <span className='text-white/90 break-words'>{i.info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Section */}
            <div className='w-full space-y-4'>
              <h3 className='font-clash font-semibold text-[22px] text-white/90'>
                Find Us Here
              </h3>
              <div className='rounded-3xl overflow-hidden shadow-xl border-2 border-white/20'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.86800767707!2d3.8470238698656747!3d7.319680262157586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f7a0afa8b0f%3A0x7ca47b63e6837545!2sAjawele%20Bus%20Stop%2C%20New%20Felele!5e0!3m2!1sen!2sng!4v1752242651082!5m2!1sen!2sng'
                  className='w-full h-[300px] md:h-[350px]'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='DaarutTahseen Location Map'
                />
              </div>
            </div>

            {/* Social Media Section */}
            <div className='space-y-6'>
              <h3 className='font-clash font-semibold text-[22px] text-white/90 text-center'>
                Connect With Us
              </h3>
              <div className='socials flex items-center justify-center gap-6 flex-wrap'>
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
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center h-[60px] w-[60px] md:h-[70px] md:w-[70px] cursor-pointer shadow-lg border-2 border-white/30'
                    aria-label={`Visit our ${item.alt} page`}>
                    <img
                      src={`/${item.src}`}
                      alt={item.alt}
                      className='h-6 w-6 md:h-7 md:w-7'
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span class="text-white font-bold text-xl">${item.alt.charAt(
                          0
                        )}</span>`;
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className='w-full py-8 px-6 md:px-[40px] flex items-center'>
            <form
              onSubmit={handleSubmit}
              className='w-full p-8 md:p-[40px] bg-white/95 backdrop-blur-lg rounded-[30px] text-black flex flex-col gap-8 shadow-xl border border-white/20'>
              <div className='text-center space-y-3'>
                <h1 className='text-black font-clash font-bold text-[28px] md:text-[32px]'>
                  Get In Touch
                </h1>
                <div className='w-16 h-1 bg-gradient-to-r from-primary to-primary/70 rounded-full mx-auto'></div>
                <p className='text-gray-600 font-bricolage text-[16px] md:text-[18px]'>
                  We'd love to hear from you!
                </p>
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div
                  className={`p-5 rounded-2xl text-center font-semibold text-[16px] ${
                    submitMessage.includes("successfully")
                      ? "bg-green-50 text-green-800 border-2 border-green-200"
                      : "bg-red-50 text-red-800 border-2 border-red-200"
                  }`}>
                  {submitMessage}
                </div>
              )}

              <div className='flex flex-col gap-6'>
                <div className='space-y-2'>
                  <Input
                    label='Name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    className={`${
                      formErrors.name
                        ? "border-red-500 border-2"
                        : "border-gray-300"
                    }`}
                    placeholder='Enter your full name'
                    disabled={isSubmitting}
                  />
                  {formErrors.name && (
                    <p className='text-red-600 text-sm font-semibold flex items-center gap-2 mt-2'>
                      <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Input
                    label='Email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`${
                      formErrors.email
                        ? "border-red-500 border-2"
                        : "border-gray-300"
                    }`}
                    placeholder='Enter your email address'
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <p className='text-red-600 text-sm font-semibold flex items-center gap-2 mt-2'>
                      <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Input
                    textArea
                    label='Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className={`${
                      formErrors.message
                        ? "border-red-500 border-2"
                        : "border-gray-300"
                    } min-h-[120px]`}
                    placeholder='Type your message here...'
                    disabled={isSubmitting}
                  />
                  {formErrors.message && (
                    <p className='text-red-600 text-sm font-semibold flex items-center gap-2 mt-2'>
                      <span className='w-1 h-1 bg-red-500 rounded-full'></span>
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <Button
                  type='submit'
                  className={`w-full py-4 text-[18px] font-semibold rounded-xl shadow-lg ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className='flex items-center justify-center gap-3'>
                      <svg className='animate-spin h-6 w-6' viewBox='0 0 24 24'>
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                          fill='none'
                        />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                      </svg>
                      Sending Message...
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
