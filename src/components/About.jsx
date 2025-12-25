import Navbar from "./Navbar/Navbar";
import Footer from "./footer";

import About1 from "../assets/about.png";
import Goal from "../assets/Goal.png";
import Vision from "../assets/LightOn.png";
import Mission from "../assets/Trust.png";
import Header from "./header";

const About = () => {
  return (
    <>
      <div className="bg-white ">
        {/* Header */}
        <Header />
        <div className="w-full h-[280px] sm:h-[320px] md:h-[340px] flex justify-center items-center   bg-[#001F3F]">
          <Navbar className="" />
          <h2 className="text-white text-center lato-bold text-[28px] sm:text-[32px] md:text-[38px] mt-[100px] sm:mt-[120px] md:mt-[150px]">
            ABOUT US
          </h2>
        </div>

        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch mb-16">
              {/* Left Side - Image */}

              {/* Right Side - Text */}

              <div className="flex justify-center lg:justify-start">
                <img
                  src={About1}
                  alt="About Illustration"
                  className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-full object-cover"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 text-left text-gray-800">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                  At Wingsally, we believe a home functions best when the
                  right people support it. We were founded with one purpose — to
                  make trusted domestic help accessible, reliable, and genuinely
                  caring.
                </p>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                  Inviting someone into your home is a matter of trust, which is
                  why we go beyond simple staffing. We understand your family’s
                  needs and match you with trained, verified professionals who
                  bring comfort, care, and consistency. From housekeeping and
                  cooking to baby care and elderly support, our focus is to
                  provide dependable, heartfelt care your home can rely on.
                </p>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                  Over the years, we’ve supported countless families with not
                  just great helpers, but ongoing guidance, quick replacements,
                  and a personal service experience.
                </p>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                  With Wings, you don’t just hire help — you bring home care you
                  can trust.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 py-12">
            {/* Card 1 */}
            <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
              <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
              <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

              <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col justify-start items-center h-full">
                <div className="text-5xl mb-4 sm:mb-5">
                  <img src={Goal} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                  OUR MISSION
                </h3>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed flex-grow">
                  To provide trustworthy and compassionate domestic support that
                  improves every family's daily life through safety, dignity,
                  and professionalism.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
              <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
              <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

              <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col justify-start items-center h-full">
                <div className="text-5xl mb-4 sm:mb-5">
                  <img src={Vision} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                  OUR VISION
                </h3>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed flex-grow">
                  To become India’s most reliable home-care staffing service by
                  offering expert matching, verified professionals, and
                  continuous support families can depend on.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full sm:w-[320px] md:w-[360px] lg:w-[387px] h-auto">
              <div className="absolute -top-2 -left-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>
              <div className="absolute -bottom-2 -right-2 w-[45%] h-[60%] bg-[#082B4C] rounded-xl z-0"></div>

              <div className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center z-10 flex flex-col justify-center items-center h-full">
                <div className="text-5xl mb-4 sm:mb-5">
                  <img src={Mission} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold lato-bold text-[#082B4C] mb-3 sm:mb-4">
                  OUR VALUES
                </h3>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed flex-grow">
                  We stand for trust, compassion, quality, and respect —
                  ensuring every family receives dependable care and every
                  helper is treated with dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
