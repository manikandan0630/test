import { Link } from "react-router-dom";
import footer from "../assets/footer.png";
import fa from "../assets/fa.png";
import insta from "../assets/insta.png";
import wa from "../assets/a.png";
import { useState } from "react";
import Modal from "./whatsAppModa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Call from '../assets/Group611.png';
import Email from '../assets/Group612.png'

const Footer = () => {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <footer className="bg-[#032647] text-white py-10 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Left: Logo + Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-[260px]">
          <img
            src={footer}
            alt="Wings Services Logo"
            className="w-[140px] md:w-[160px] object-contain"
          />

          <div className="flex items-center  gap-5 mt-2">
            <img
              src={wa}
              alt="WhatsApp"
              className="w-[32px]  h-[32px] cursor-pointer  "
              onClick={() => setModal(true)}
            />
            <img src={fa} alt="Facebook" className="w-[32px]  h-[32px] cursor-pointer" />
            <img
              src={insta}
              alt="Instagram"
              className="w-[32px] h-[32px] cursor-pointer   "
              onClick={() => {
                const width = 600;
                const height = 700;
                const left = window.screenX + (window.outerWidth - width) / 2;
                const top = window.screenY + (window.outerHeight - height) / 2;

                window.open(
                  "https://www.instagram.com/wingsservices.in?igsh=OGtpaTVkcDU1ZXJo",
                  "instagramPopup",
                  `width=${width},height=${height},left=${left},top=${top}`
                );
              }}
            />
            {/* <img src={Call} className="w-[32px] h-[32px]" onClick={() => setPopup(true)} />
           
            <img src={Email} className="w-[32px] h-[32px]" /> */}
            
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="md:flex flex-col md:w-[180px] text-center md:text-left">
          <h3 className="lato-bold text-[18px] md:text-[24px] underline mb-4 tracking-widest">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col gap-2 text-[15px] md:text-[18px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services/cook">Cook</Link>
            </li>
            <li>
              <Link to="/services/maid">Maid Services</Link>
            </li>
            <li>
              <Link to="/services/baby-care-taker">Baby Care</Link>
            </li>
            <li>
              <Link to="/services/patient-care">Patient Attender</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[280px] flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h3 className="lato-bold text-[18px] md:text-[24px] underline mb-2 tracking-widest">
            CONTACT US
          </h3>
          <div className="flex flex-col gap-3 text-[15px] md:text-[18px] items-center md:items-start">
            <div className="flex items-center gap-3">
              <img src={Call} alt="Phone" className="w-[32px] h-[32px]" />

              <span>+91 95006 28800</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={wa} alt="WhatsApp" className="w-[32px] h-[32px]" />
              <span>+91 95006 28800</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={Email} alt="Email" className="w-[32px] h-[32px]" />
              
              <span>hr.wingservices@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <button
            className="bg-white text-[#032647] font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-200 transition duration-300"
            onClick={() => setPopup(true)}
          >
            Call Now
          </button>
          <button
            className="bg-[#FFA07A] text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-[#d87b2e] transition duration-300"
            onClick={() => setModal(true)}
          >
            WhatsApp Us
          </button>
        </div>
        {/* Right: Contact Info + Buttons */}
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
    </footer>
  );
};

export default Footer;
