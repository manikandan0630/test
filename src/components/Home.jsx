import { useState } from "react";
import "./Home.css";
import Logo from "../assets/Logo.png";
import Cook from "../assets/Group62.png";
import Medical from "../assets/Group640.png";
import Clean from "../assets/Group63.png";
import Group from "../assets/group.png";
import Human from "../assets/human.png";
import Verified from "../assets/verified.png";
import Tik from "../assets/tik.png";
import Rupees from "../assets/rupees.png";
import Calendar from "../assets/calendar.png";
import Navbar from "./Navbar/Navbar";
import IconChef from "../components/icons/iconChef";
import IconArrow from "../components/icons/iconArrow";
import IconBottle from "../components/icons/iconBottle";
import IconUser from "../components/icons/iconUser";
import IconGroup from "../components/icons/icongroup";
import Hero from "./Hero";
import Feedback from "./feedbackCard";
import mobileheor from "../assets/HomeHero.png";
import Footer from "./footer";
import Group65 from "../assets/Group65.png";
import Group66 from "../assets/Group66.png";
import Slider from "./slider";
import CommonCardPromise from "../components/commonCardPromise";
import Header from "./header";
const HomeComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full">
        {/* Hero Section*/}
        {/* <div className="h-[716px] heroMain pt-10 relative overflow-hidden bg-[#021732]">

                    {/* Navbar */}
        {/* <Navbar />

                   <Hero /> */}

        {/* </div>  */}
      
            <Header />
        <Hero />
      

        <div className="mt-10 pt-[40px]">
          <h1 className="lato-bold text-[20px]  md:text-[36px]">Stay-In & Non-Stay Services</h1>
          <p className="text-[18px] md:text-[22px] ">
            Your Schedule, Your Choice - Whether you need someone available 24/7
            or prefer daily visits
          </p>
          <div className="py-8 md:py-12 w-full max-w-[1440px] mx-auto p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="relative w-full">
                <div className="absolute -top-[6px] -left-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>
                <div className="absolute -bottom-[6px] -right-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>

                <div
                  className="relative min-h-[340px] bg-white rounded-xl p-6 border border-[#E9EDF4]
        shadow-[0_4px_10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
        transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img src={Cook} className="w-7 h-7" alt="Cook Services" />
                  </div>
                  <h3 className=" text-[20px] md:text-2xl text-left font-semibold text-[#0B243F] mb-3">
                    Cook Services
                  </h3>
                  <p className="text-[18px] md:text-lg  text-left text-[#3C4A5C] leading-relaxed">
                    Enjoy home-cooked meals prepared by our skilled kitchen
                    staff who create nutritious, flavorful dishes suited to your
                    family's preferences.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative w-full">
                <div className="absolute -top-[6px] -left-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>
                <div className="absolute -bottom-[6px] -right-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>

                <div className="relative min-h-[340px] bg-white rounded-xl p-6 border border-[#E9EDF4] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img src={Clean} className="w-7 h-7" alt="Maid Services" />
                  </div>
                  <h3 className="text-[20px] md:text-2xl  text-left font-semibold text-[#0B243F] mb-3">
                    Maid Services
                  </h3>
                  <p className="text-[18px] md:text-lg text-left text-[#3C4A5C] leading-relaxed">
                    Keep your home fresh and organized with our reliable
                    housekeeping professionals who maintain your space so you
                    can focus on your family.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative w-full">
                <div className="absolute -top-[6px] -left-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>
                <div className="absolute -bottom-[6px] -right-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>

                <div className="relative min-h-[340px] bg-white rounded-xl p-6 border border-[#E9EDF4] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img
                      src={Medical}
                      className="w-7 h-7"
                      alt="Caregiving Services"
                    />
                  </div>
                  <h3 className="text-[20px] md:text-2xl text-left font-semibold text-[#0B243F] mb-3">
                    Caregiving Services
                  </h3>
                  <p className="text-[18px] md:text-lg text-left text-[#3C4A5C] leading-relaxed">
                    Provide your loved ones with gentle, respectful care from
                    our compassionate caregivers who assist with daily
                    activities and companionship.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative w-full">
                <div className="absolute -top-[6px] -left-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>
                <div className="absolute -bottom-[6px] -right-[6px] w-[180px] h-[150px] bg-[#0B2A4A] rounded-xl opacity-90"></div>

                <div className="relative min-h-[340px] bg-white rounded-xl p-6 border border-[#E9EDF4] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <img
                      src={Group65}
                      className="w-7 h-7"
                      alt="Baby Care Services"
                    />
                  </div>
                  <h3 className=" text-[20px] md:text-2xl text-left font-semibold text-[#0B243F] mb-3">
                    Baby Care Services
                  </h3>
                  <p className="text-[18px] md:text-lg text-left text-[#3C4A5C] leading-relaxed">
                    Give your children attentive, nurturing care from our
                    experienced caregivers who create safe, engaging
                    environments for growth and learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Cards */}

          {/* Purpose section */}
          <div className="  px-4 py-8 md:py-12">
            <p className="text-[38px] lato-bold  sm:text-3xl md:text-4xl font-bold text-center px-4">
              Your Daily Challenges = Our Purpose
            </p>
            <p className="text-[18px] sm:text-lg md:text-xl mt-4 text-center px-4">
              Your household staffing needs are our specialty
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[1240px] mt-6 md:mt-[4%] mx-auto px-4">
              <div className="bg-[#FFA07A] flex flex-col items-start justify-center rounded-xl w-full sm:w-1/2 min-h-[100px] md:h-[120px] p-4 text-[#0B243F] leading-relaxed">
                <p className="text-left mt-2 md:mt-4 text-base sm:text-lg md:text-xl">
                  Need a reliable maid who's always punctual?
                  <br />
                </p>

                <p className="text-left text-base sm:text-lg md:text-xl font-semibold">
                  We've got you covered.
                </p>
              </div>

              <div className="bg-[#FFA07A] flex flex-col items-start justify-center rounded-xl w-full sm:w-1/2 min-h-[100px] md:h-[120px] p-4 text-[#0B243F] leading-relaxed">
                <p className="text-left mt-2 md:mt-4 text-base sm:text-lg md:text-xl">
                  Want a cook who understands your family's preferences?
                  <br />
                </p>
                <p className="text-left text-base sm:text-lg md:text-xl font-semibold">
                  We make it simple.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row max-w-[1240px] mx-auto gap-3 md:gap-4 mt-3 px-4">
              <div className="bg-[#FFA07A] flex flex-col items-start justify-center rounded-xl w-full sm:w-[45%] md:w-[505px] min-h-[100px] md:h-[120px] p-4 text-[#0B243F] leading-relaxed">
                <p className="text-left mt-2 md:mt-4 text-base sm:text-lg md:text-xl">
                  Searching for gentle, loving childcare?
                  <br />
                </p>
                <p className="text-left text-base sm:text-lg md:text-xl font-semibold">
                  We're here to help.
                </p>
              </div>

              <div className="bg-[#FFA07A] flex flex-col items-start justify-center rounded-xl w-full sm:w-[55%] md:w-[713px] min-h-[100px] md:h-[120px] p-4 text-[#0B243F] leading-relaxed">
                <p className="text-left mt-2 md:mt-4 text-base sm:text-lg md:text-xl">
                  Looking for compassionate care for your elderly parents?
                  <br />
                </p>
                <p className="text-left text-base sm:text-lg md:text-xl font-semibold">
                  We'll find the perfect match.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
    max-w-[1240px] 
    w-full 
    mx-auto 
    flex 
    flex-col 
    md:flex-row 
    items-center 
    justify-center 
    gap-8 
    md:gap-12 
    px-4 
    sm:px-6 
    lg:px-8 
    py-8 
    md:py-16
  "
          >
            {/* LEFT IMAGE SECTION */}
            <div
              className="
      relative 
      w-[200px] 
      sm:w-[260px] 
      md:w-[340px] 
      lg:w-[420px] 
      aspect-square 
      flex-shrink-0 
      mx-auto
    "
            >
              {/* Circle */}
              <div
                className="
        absolute 
        inset-0 
        rounded-full 
        bg-[conic-gradient(#FFCEB9_0deg_180deg,#0A3154_180deg_270deg,#FFE1D3_270deg_360deg)]
      "
              ></div>

              {/* Illustration */}
              <img
                src={Group}
                className="absolute inset-0 w-full h-full object-contain z-10"
                alt="illustration"
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="max-w-xl text-center md:text-left">
              <p
                className="
        text-gray-600 
        leading-relaxed 
        text-[17px] 
        sm:text-base 
        md:text-[20px] 
        mb-4
      "
              >
                For every home, we take a thoughtful, personal approach to
                connect you with someone who truly fits your family. Your needs,
                our commitment, delivered with trust, care, and dependability.
              </p>

              <h1
                className="
    font-semibold 
    text-gray-900 
    leading-snug 
    text-lg 
    sm:text-xl 
    md:text-2xl 
    lg:text-[36px]
  "
              >
                <span>Your home needs, our heartfelt solutions. </span>
                <span>
                  With
                  <span className="bg-orange-300 px-2 py-[2px] rounded-md mx-2 inline-block">
                    Wings
                  </span>
                  , quality care comes home.
                </span>
              </h1>
            </div>
          </div>

          {/* Promise Section */}

          <CommonCardPromise />

          {/* Service special */}
          <div className="w-full  py-8 md:py-12 px-4">
            <h2 className="text-center lato-bold text-2xl sm:text-3xl md:text-[38px] font-semibold text-gray-900 mb-6 md:mb-10">
              What Makes Wings Services Special?
            </h2>

            <Slider />
          </div>

          {/* Testimonial section */}
          <Feedback />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomeComponent;
