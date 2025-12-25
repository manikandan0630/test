import { useState, useEffect } from "react";
import Image1 from "../assets/test-1.jpg";
import Image2 from "../assets/test-2.jpg";
import Image3 from "../assets/test-3.jpg";
import Image4 from "../assets/test-4.jpg";
import Image5 from "../assets/test-5.jpg";

export default function SlideSection() {
  const slides = [
    {
      title: "People You Can Trust in Your Home",
      image: Image1,
      description:
        "We know inviting someone into your family space is deeply personal. Every helper we recommend is thoroughly verified and carefully selected with your peace of mind as our priority.",
    },
    {
      title: "Support That Continues Beyond Placement",
      image: Image2,
      description:
        "Our commitment extends well after hiring. If adjustments are needed, we provide swift replacements and attentive service to ensure everything feels right.",
    },
    {
      title: "Helpers Who Genuinely Care",
      image: Image3,
      description:
        "We seek more than just skills — we find people with heart. From preparing comforting meals to caring for elderly family members, our staff bring authentic warmth to your home.",
    },
    {
      title: "Matching Done with Family in Mind",
      image: Image4,
      description:
        "Your household is one-of-a-kind, and so are your requirements. We invest time to understand your specific needs and connect you with someone who naturally fits your lifestyle.",
    },
    {
      title: "Personal Guidance Every Step of the Way",
      image: Image5,
      description:
        "From initial contact to successful placement, we're here to support you. You'll always feel informed, cared for, and confident in your decision.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT LIST */}
        <div className="md:w-1/3">
          <ul className="space-y-6">
            {slides.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={()=>setActiveIndex(index)}
                    onTouchStart={()=>setActiveIndex(index)}
                    className="flex items-center w-full text-left transition active:scale-[0.98]"
                  >
                    {/* Indicator */}
                    <span
                      className={`w-4 h-4 rounded-full mr-4 transition-colors ${
                        isActive ? "bg-[#FFA07A]" : "bg-gray-400"
                      }`}
                    />

                    {/* Title */}
                    <span
                      className={`font-semibold text-lg transition-colors ${
                        isActive ? "text-[#FFA07A]" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>

                  {/* UNDERLINE */}
                  {isActive && (
                    <div className="border-b-2 border-[#FFA07A] mt-2 w-full" />
                  )}

                  {/* MOBILE CONTENT */}
                  {isActive && (
                    <div className="block md:hidden mt-4 bg-[#b3d4fc] rounded-2xl p-4 space-y-4">
                      <p className="text-gray-900 text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="rounded-xl overflow-hidden shadow">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT CONTENT (DESKTOP ONLY) */}
        <div className="hidden md:flex md:w-2/3 bg-[#b3d4fc] rounded-3xl p-8 flex-col items-center">
          {/* Description */}
          <div
            key={activeIndex}
            className={`w-full max-w-3xl text-left text-gray-900 text-lg leading-relaxed mb-8 transition-opacity duration-600 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            {slides[activeIndex].description}
          </div>

          {/* Image */}
          <div className="w-full max-w-[450px] rounded-xl overflow-hidden shadow-lg">
            <img
              key={slides[activeIndex].image}
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              loading="lazy"
              className={`w-full object-cover rounded-xl transition-all duration-600 ${
                animating
                  ? "opacity-0 scale-105"
                  : "opacity-100 scale-100"
              }`}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
