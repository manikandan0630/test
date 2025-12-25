import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import Modal from "../whatsAppModa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full fixed top-[57px] left-0 bg-white shadow-sm z-40 ">
      
      <div className="flex flex-wrap items-center justify-between px-4 md:px-10 py-3">
        {/* LEFT SIDE */}
        <div className="flex mt-[15px] w-full md:w-auto items-center gap-6 md:gap-10 px-2 md:px-10 justify-between md:justify-start">
          {/* LOGO */}
          <img src={Logo} alt="Logo" className="h-10 w-auto" />

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-gray-600 text-3xl" onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-8 font-semibold text-sm text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/" className="text-[18px]">
                Home
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer text-[18px]">
                Services
                <IoChevronDown
                  className={`transition-transform duration-200 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* DESKTOP DROPDOWN */}
              {serviceOpen && (
                <ul
                  className="
                                        absolute top-full left-0 mt-0
                                        bg-white shadow-lg rounded-md 
                                        w-48 z-50
                                        text-left items-start justify-start
                                        py-1
                                    "
                >
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600">
                    <Link to="/services/cook" className="block text-[18px]">
                      Cook
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600">
                    <Link to="/services/maid" className="block text-[18px]">
                      Maid
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600">
                    <Link
                      to="/services/patient-care"
                      className="block text-[18px]"
                    >
                      Patient Care
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600">
                    <Link to="/services/baby-care-taker" className="block text-[18px]">
                      Baby Care
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hidden md:flex hover:text-blue-600 cursor-pointer">
              <Link to="/about-us" className="text-[18px]">
                About Us
              </Link>
            </li>

            <li className="hidden md:flex hover:text-blue-600 cursor-pointer">
              <Link to="/contact-us" className="text-[18px]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="w-full md:hidden mt-3 px-4">
            <ul className="flex  flex-col gap-4 font-semibold text-gray-700 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>

              {/* MOBILE SERVICES HEADER */}
              <li
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-center  cursor-pointer"
              >
                <span>Services</span>
                <IoChevronDown
                  className={`transition-transform duration-200 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </li>

              {/* MOBILE DROPDOWN */}
              {serviceOpen && (
                <ul className="  rounded-md shadow text-sm ">
                  <li className="px-2 py-2 hover:text-blue-600">
                    <Link to="/services/cook" className="block ">
                      Cook
                    </Link>
                  </li>

                  <li className="px-2 py-2 hover:text-blue-600">
                    <Link to="/services/maid" className="block ">
                      Maid
                    </Link>
                  </li>

                  <li className="px-2 py-2 hover:text-blue-600">
                    <Link
                      to="/services/patient-care"
                      className="block "
                    >
                      Patient Care
                    </Link>
                  </li>

                  <li className="px-2 py-2 hover:text-blue-600">
                    <Link to="/services/baby-care-taker" className="block ">
                      Baby Care
                    </Link>
                  </li>
                </ul>
              )}

              <li className="">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-end gap-3 md:gap-4 mt-3 md:mt-0 pe-0 md:pe-12">
          <button
            className="w-full md:w-auto min-w-[130px] h-9 px-5 border border-[#14305A] text-[#14305A] text-sm font-semibold rounded-full hover:bg-[#14305A] hover:text-white transition flex items-center justify-center"
            onClick={() => setPopup(true)}
          >
            Call Now
          </button>

          <button
            className="w-full md:w-auto min-w-[130px] h-9 px-5 bg-[#FF9B6A] text-white text-sm font-semibold rounded-full hover:bg-[#ff8e52] transition flex items-center justify-center"
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
};

export default Navbar;
