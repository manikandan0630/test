import Navbar from "./Navbar/Navbar";
import Footer from "./footer";

import Contact1 from "../assets/Contact.png";
import Call from "../assets/Call.png";
import Whatsapp from "../assets/WhatsApp.png";
import Email from "../assets/Email.png";
import { useState } from "react";
import Modal from "./whatsAppModa";
import Header from "./header";

const Contact = () => {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="bg-white">
        {/* Header */}
        <Header />
        <div className="w-full h-[340px]  bg-[#001F3F] flex justify-center items-center">
          <Navbar className="mt-10" />
          <h2 className="text-white text-center lato-bold text-[32px] sm:text-[38px] mt-[120px] sm:mt-[150px]">
            CONTACT US
          </h2>
        </div>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Text + Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
              {/* Left Side - Text */}
              <div className="flex flex-col justify-start space-y-6 text-gray-800">
                {/* Name */}
                <div>
                  <label className="block text-left text-sm font-medium mb-1">Name <span className="text-[#FF0000]">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2A4A]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-left text-sm font-medium mb-1">
                    Phone <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2A4A]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-left text-sm font-medium mb-1">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2A4A]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-left text-sm font-medium mb-1">
                    Message <span className="text-[#FF0000]">*</span>
                  </label>
                   
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0B2A4A]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FFA07A] text-[#08315a] hover:text-white font-semibold py-3 rounded-lg hover:bg-[#08315a] transition duration-300"
                >
                  Send Message
                </button>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end -mt-12 lg:-mt-[80px]">
                <img
                  src={Contact1}
                  alt="Contact Illustration"
                  className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[594px] h-auto object-cover"
                />
              </div>
            </div>

            {/* Cards Section */}
            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 py-12">
              {/* Card 1 */}
              <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
                <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
                <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

                <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col h-full">
                  <div className="mb-4 sm:mb-5">
                    <img
                      src={Call}
                      alt="Call Icon"
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                    />
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                    WHATSAPP US
                  </h3>
                  <p className="text-gray-600 text-[16px] sm:text-[20px] leading-relaxed flex-grow">
                    Get quick support, fast responses, and instant service
                    booking right from your phone. Our team is available to
                    assist you with enquiries, requirements, and updates
                    anytime.
                  </p>
                  <button
                    className="bg-[#FFA07A] hover:text-white   text-[#030E2D] p-3 text-[24px] font-semibold rounded-md mt-6"
                    onClick={() => setModal(true)}
                  >
                    Whatsapp Us
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
                <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
                <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

                <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col h-full">
                  <div className="mb-4 sm:mb-5">
                    <img
                      src={Whatsapp}
                      alt="Whatsapp Icon"
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                    />
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                    CALL US
                  </h3>
                  <p className="text-gray-600 text-[16px] sm:text-[20px] leading-relaxed flex-grow">
                    Need immediate help or want to discuss your home staffing
                    needs? Call us directly and our team will guide you through
                    the process with clear, friendly support.
                  </p>
                  <button
                    className="bg-[#FFA07A] hover:text-white  text-[#030E2D] p-3 text-[24px] font-semibold  rounded-md mt-6"
                    onClick={() => setPopup(true)}
                  >
                    Call Us
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
                <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
                <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

                <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col h-full">
                  <div className="mb-4 sm:mb-5">
                    <img
                      src={Email}
                      alt="Email Icon"
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                    />
                  </div>
                  <h3 className="text-[20px] hover:text-white   sm:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                    EMAIL US
                  </h3>
                  <p className="text-gray-600 text-[16px] sm:text-[20px] leading-relaxed flex-grow">
                    For detailed enquiries, partnership requests, or
                    documentation, reach us through email. We reply within 24
                    hours on working days.
                  </p>
                  <button className="bg-[#FFA07A] text-[#030E2D] p-3  text-[24px] font-semibold rounded-md mt-6">
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {popup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white w-80 rounded-xl p-6 shadow-xl animate-scaleIn">
              {/* Buttons */}
              <div className="flex flex-col mt-6 space-y-3">
                <a
                  href="tel:+919500628800"
                  className="text-center bg-[#001F3F]  text-white py-2 rounded-lg font-medium transition-all"
                >
                  Call Now +91 9500628800
                </a>

                <button
                  onClick={() => setPopup(false)}
                  className="text-center bg-gray-200 hover:bg-gray-300 text-[#1E3A8A] py-2 rounded-lg font-medium transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {modal && <Modal setModal={setModal} />}

        <Footer />
      </div>
    </>
  );
};

export default Contact;
