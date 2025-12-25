import React from "react";
import Verified from "../assets/verified.png";
import Tik from "../assets/tik.png";
import Calendar from "../assets/calendar.png";
import Rupees from "../assets/rupees.png";
import Human from "../assets/human.png";

const CommonCardPromise = () => {
  return (
    <div className="w-full bg-[#F5F5F0]  px-4 md:px-6 lg:px-8">
      <div className="w-full  py-8 md:py-12 px-3">
        <h2 className="text-center lato-bold text-[32px] sm:text-[34px] md:text-[38px] font-semibold text-gray-800 mb-6 md:mb-10">
          Our Promise to You
        </h2>

        <div className="flex flex-wrap justify-center sm:justify-between gap-3 md:gap-4 max-w-[1240px] mx-auto">
          {/* CARD TEMPLATE */}
          {[
            {
              icon: Verified,
              text: (
                <>
                  Verified <br /> Candidates
                </>
              ),
            },
            { icon: Tik, text: <>Quick Replacement if needed</> },
            { icon: Calendar, text: <>3-Day Trial</> },
            {
              icon: Rupees,
              text: (
                <>
                  No upfront <br /> Cost
                </>
              ),
            },
            {
              icon: Human,
              text: (
                <>
                  Personalized <br /> Matching
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                    w-full sm:w-[calc(50%-0.5rem)] md:w-[229px] 
                    h-[190px] 
                    bg-white rounded-[12px] shadow-sm 
                    flex flex-col items-center justify-between 
                    relative p-5
                "
            >
              {/* ICON + TEXT Area (centered) */}
              <div className="flex flex-col items-center justify-center gap-3 mt-2">
                <img
                  src={item.icon}
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="icon"
                />

                <p className="text-center text-[18px] md:text-[22px] font-medium text-gray-700 leading-snug">
                  {item.text}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0A3154] rounded-b-[12px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonCardPromise;
