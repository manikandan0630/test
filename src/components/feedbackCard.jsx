import React, { useState, useEffect, useRef } from "react";
import "./feedbackCard.css";

const Testimonials = ({ reviews }) => {
  const feedback = [
    {
      name: "Meena Kumari",
      message:
        "I have been availing  the services of Wings Home Care for past 2 months. Sujatha is very professional, responsive, flexible and supportive. Difficult to find persons like her in the field who are so responsive and responsible. We have been greatly relieved from the time we availed her services",
    },
    {
      name: "Praveen Kumar",
      message:
        "I had a very good experience with Wings Consultancy. Timely service and a caring, helpful babysitter.",
    },
    {
      name: "Ranjith ",
      message:
        "Excellent and dedicated staff..very prompt and trustworthy office and staff..100 percent work perfect",
    },
  ];

  const displayReviews = reviews || feedback;
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // 50% of section visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-scroll only if user interacted AND section is in view
  useEffect(() => {
    if (!userInteracted || !isInView || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll(".testimonial-card");
    if (cards.length === 0) return;

    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % displayReviews.length;
        const targetCard = cards[nextIndex];
        if (targetCard) {
          targetCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [userInteracted, isInView, displayReviews.length]);

  const handleUserInteraction = () => {
    if (!userInteracted) setUserInteracted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F5F0] py-8 md:py-12 px-0 sm:px-4"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-0">
        <h2 className="text-center text-[28px] md:text-[38px] lato-bold font-semibold text-gray-900 mb-8">
          Hear from our happy customers
        </h2>

        {/* Mobile slider */}
        <div
          ref={scrollContainerRef}
          className="feedback-slider-container block lg:hidden overflow-x-auto no-scrollbar pb-4 scroll-smooth"
          onTouchStart={handleUserInteraction}
        >
          <div className="flex gap-4 w-max">
            {displayReviews.map((item, index) => (
              <div
                key={index}
                className={`testimonial-card
                                    w-[85vw] sm:w-[80vw] min-w-[280px] sm:min-w-[320px] max-w-[400px]
                                    p-5 sm:p-6 rounded-xl shadow-md relative snap-start flex-shrink-0
                                    ${index === 0 ? "ml-4 sm:ml-6" : ""}
                                    ${
                                      index === displayReviews.length - 1
                                        ? "mr-4 sm:mr-6"
                                        : ""
                                    }
                                    ${
                                      index === 1
                                        ? "bg-gradient-to-b from-[#FFBFA3] to-[#F7A586]"
                                        : "bg-[#FCE4DB]"
                                    }
                                    ${currentIndex == index ? 'bg-[#FFA07A] scale-105' : 'bg-[#FCE4DB]'}
                                `}
              >
                <div className="text-[#FFA07A] text-4xl sm:text-5xl leading-none absolute -top-3 left-4 font-bold">
                  &ldquo;
                </div>

                <h3 className="font-semibold text-lg sm:text-[22px] text-gray-900 mt-6 mb-2">
                  {item.name}
                </h3>

                <p className="text-sm sm:text-[16px] text-gray-700 leading-relaxed">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          {displayReviews.map((item, index) => (
            <div
              key={index}
              className={`
                                p-5 pb-6 rounded-xl shadow-md relative overflow-visible
                                ${
                                  index === 1
                                    ? "bg-gradient-to-b from-[#FFBFA3] to-[#F7A586] md:scale-105"
                                    : "bg-[#FCE4DB]"
                                }
                            `}
              onMouseEnter={handleUserInteraction} // optional desktop trigger
            >
              <div className="text-[#FFA07A] text-5xl leading-none absolute -top-3 left-4 font-bold">
                &ldquo;
              </div>

              <h3 className="font-semibold text-[22px] text-gray-900 mt-6 mb-2">
                {item.name}
              </h3>

              <p className="text-[16px] text-gray-700 leading-relaxed">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
