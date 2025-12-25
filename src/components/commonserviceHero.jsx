import { useState } from "react";
import Modal from "./whatsAppModa";

const HeroSection = ({ title, description, image }) => {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <section className="py-12 lg:py-20 mt-[35%] md:mt-[5%]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center">
        <div>
          <h1 className=" lato-bold text-left text-[36px] md:text-[36px] font-semibold text-gray-900 leading-snug mb-5">
            {title}
          </h1>
          <div className="lg:hidden flex  pb-10">
            <img
              src={image}
              alt="hero visual"
              className="max-h-[335px] max-w-[300px] object-contain"
            />
          </div>

          <p className="text-gray-700 text-[20px] text-left mb-8 whitespace-pre-line">
            {description
              .split("Flexible stay-in and non-stay")
              .map((part, index) =>
                index === 1 ? (
                  <>
                    <span className="font-bold text-black">
                      Flexible stay-in and non-stay
                    </span>
                    {part}
                  </>
                ) : (
                  part
                )
              )}
          </p>

          <div className="flex gap-4">
            <button
              className="bg-[#021732] text-white rounded-md h-12 w-[230px] flex items-center justify-center"
              onClick={() => setPopup(true)}
            >
              Call Now
            </button>

            <button
              className="bg-[#FF9C75] text-white rounded-md h-12  w-[230px] flex items-center justify-center"
              onClick={() => setModal(true)}
            >
              WhatsApp Us
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-content-center ">
          <img
            src={image}
            alt="hero visual"
            className="max-h-[365px] max-w-[425px] object-contain"
          />
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
    </section>
  );
};

export default HeroSection;
