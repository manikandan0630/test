import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Eclipse1 from "../assets/eclipse-1.png";
import Eclipse2 from "../assets/eclipse-2.png";
import Eclipse3 from "../assets/eclipse-3.png";
import Eclipse4 from "../assets/eclipse-4.png";
import Eclipse5 from "../assets/eclipse-5.png";
import Eclipse6 from "../assets/eclipse-6.png";
import MobileHeroImage from "../assets/HomeHero.png"; // Mobile image
import Modal from "./whatsAppModa";

export default function Hero() {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="relative    bg-[#001F3F] overflow-hidden">
      {/* Navbar */}
      <Navbar className="mt-10" />

      {/* SVG Rings - visible only on desktop */}
      <div className="hidden  sm:block relative h-[720px] ">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] pointer-events-none opacity-100"
          viewBox="0 0 1500 1500"
        >
          <circle
            cx="750"
            cy="750"
            r="350"
            stroke="rgba(255,255,255,0.35)"
            fill="none"
            strokeWidth="2"
          />
          <circle
            cx="750"
            cy="750"
            r="450"
            stroke="rgba(255,255,255,0.30)"
            fill="none"
            strokeWidth="2"
          />
          <circle
            cx="750"
            cy="750"
            r="550"
            stroke="rgba(255,255,255,0.25)"
            fill="none"
            strokeWidth="2"
          />
          <circle
            cx="750"
            cy="750"
            r="650"
            stroke="rgba(255,255,255,0.20)"
            fill="none"
            strokeWidth="2"
          />
          {/* <circle cx="750" cy="750" r="750" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="2" /> */}
        </svg>

        {/* Floating decorations */}
        <div>
          <div className="absolute w-[244px] h-[40px] top-[46.8%] left-[10%] flex flex-col items-center z-20">
            <p className="mt-2 bg-[#FFD5CE] px-3 py-1 rounded-md text-sm font-medium">
              Seamless experience
            </p>
          </div>
          <div className="absolute top-[71%] left-[92%] z-20">
            <img src={Eclipse1} alt="Eclipse1" />
          </div>
          <div className="absolute top-[73%] left-[12.5%] z-20">
            <img src={Eclipse4} alt="Eclipse4" />
          </div>
          <div className="absolute top-[10%] left-[23.5%] z-20">
            <img src={Eclipse2} alt="Eclipse2" />
          </div>
          <div className="absolute top-[22%] left-[93.5%] -translate-x-1/2 z-20">
            <img src={Eclipse5} alt="Eclipse5" />
          </div>
          <div className="absolute top-[28%] left-[73%] flex items-center gap-2 z-20">
            <p className="w-[170px] bg-[#AAC4A4] px-3 py-1 rounded-md text-sm font-medium">
              Trusted service
            </p>
          </div>
          <div className="absolute w-[234px] h-[40px] top-[80%] left-[66%] flex flex-col items-center z-20">
            <p className=" bg-[#F1D79A] px-3 py-1 rounded-md text-sm font-medium mb-2">
              Trained Staffs
            </p>
          </div>
          <div className="absolute top-[37%] left-[79.8%] z-20">
            <img src={Eclipse6} alt="Eclipse6" />
          </div>
          <div className="absolute top-[31%] left-[4.3%] z-20">
            <img src={Eclipse3} alt="Eclipse3" />
          </div>
        </div>

        {/* Main content centered inside rings */}
        <div className=" pt-[128px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4 max-w-4xl">
          <h1 className="text-white font-bold text-4xl md:text-[32px] mb-5 leading-tight">
            Trusted domestic support tailored
            <br />
            to your family's needs
          </h1>

          <p className="text-white/90 text-lg md:text-[26px] max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with skilled and reliable staff who treat your home like
            their own. Transform your home into a haven with thoughtful & expert
            care
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <button
              className="min-w-[160px] h-12 px-6 bg-[#021732] hover:bg-white hover:text-[#1E3A8A] text-white border border-[#FFA07A] hover:border-none rounded-lg font-semibold flex items-center justify-center"
              onClick={() => setPopup(true)}
            >
              Call Now
            </button>

            <button
              className="min-w-[160px] h-12 px-6 bg-[#FF9C75] text-white rounded-lg font-semibold flex items-center justify-center"
              onClick={() => setModal(true)}
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block sm:hidden text-center px-4 py-12 pt-[153px]">
        {/* Mobile Hero Image */}

        {/* Main Content */}
        <h1 className="text-white font-bold text-[20px] sm:text-4xl mb-4 leading-tight">
          Trusted domestic support tailored
          <br />
          to your family's needs
        </h1>
        <img
          src={MobileHeroImage}
          alt="Mobile Hero"
          className="mx-auto w-full max-w-sm mb-6"
        />

        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Connect with skilled and reliable staff who treat your home like their
          own. Transform your home into a haven with thoughtful & expert care
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <button
            className="min-w-[160px] h-12 px-6 bg-[#021732] hover:bg-white hover:text-[#1E3A8A] text-white border border-white/30 rounded-lg font-semibold flex items-center justify-center"
            onClick={() => setPopup(true)}
          >
            Call Now
          </button>

          <button
            className="min-w-[160px] h-12 px-6 bg-[#FF9C75] text-white rounded-lg font-semibold flex items-center justify-center"
            onClick={() => setModal(true)}
          >
            WhatsApp Us
          </button>
        </div>
      </div>
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
    </div>
  );
}
