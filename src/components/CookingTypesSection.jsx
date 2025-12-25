import React from 'react';
import './CookingTypesSection.css';

/* ------------ ICONS ------------ */
const VegNonVegIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="30" cy="50" r="15" fill="#4CAF50" />
    <rect x="20" y="65" width="20" height="25" rx="5" fill="#4CAF50" />
    <circle cx="70" cy="50" r="15" fill="#F44336" />
    <rect x="60" y="65" width="20" height="25" rx="5" fill="#F44336" />
    <path d="M 45 30 L 45 50 M 40 30 L 50 30" stroke="#333" strokeWidth="3" strokeLinecap="round" />
    <path d="M 55 30 L 55 50 M 52 30 L 58 30" stroke="#333" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const BrahminIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <ellipse cx="50" cy="70" rx="25" ry="8" fill="#FF9B6A" />
    <path d="M 25 70 Q 25 50 50 40 Q 75 50 75 70" stroke="#FF9B6A" strokeWidth="3" fill="#FF9B6A" />
    <circle cx="50" cy="40" r="8" fill="#FFD700" />
    <path d="M 50 32 Q 48 28 50 25 Q 52 28 50 32" fill="#FFD700" />
  </svg>
);

const NorthIndianIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <ellipse cx="50" cy="70" rx="30" ry="8" fill="#8B4513" />
    <path d="M 20 70 Q 20 50 50 40 Q 80 50 80 70" stroke="#8B4513" strokeWidth="3" fill="#FF9B6A" />
    <path d="M 35 50 Q 30 35 35 25" stroke="#E0E0E0" strokeWidth="2" />
    <path d="M 50 50 Q 50 35 50 25" stroke="#E0E0E0" strokeWidth="2" />
    <path d="M 65 50 Q 70 35 65 25" stroke="#E0E0E0" strokeWidth="2" />
  </svg>
);

const StayInIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="30" y="30" width="40" height="35" rx="3" fill="#4A90E2" />
    <rect x="30" y="30" width="40" height="12" fill="#2E5C8A" />
    <line x1="40" y1="42" x2="60" y2="42" stroke="#2E5C8A" strokeWidth="1" />
    <line x1="40" y1="50" x2="60" y2="50" stroke="#2E5C8A" strokeWidth="1" />
    <line x1="40" y1="58" x2="60" y2="58" stroke="#2E5C8A" strokeWidth="1" />
    <path
      d="M 65 20 L 70 25 L 80 15"
      stroke="#4CAF50"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------ MAIN COMPONENT ------------ */
const CookingFeature = ({ centerImage, items }) => {
  const defaultItems = [
    { icon: <VegNonVegIcon />, title: "Veg / Non-Veg", description: "Delicious veg and non-veg dishes." },
    { icon: <BrahminIcon />, title: "Brahmin", description: "Pure vegetarian meals." },
    { icon: <NorthIndianIcon />, title: "North Indian", description: "Classic North Indian flavors." },
    { icon: <StayInIcon />, title: "Stay In", description: "Homestyle meals at your place." },
  ];

  const displayItems = items || defaultItems;

  return (
    <section className="cooking-section w-full bg-[#F5F5F0]  sm:px-6 md:px-8 lg:px-4 p-5">

      {/* MOBILE & TABLET layout */}
      <div className="lg:hidden flex flex-col items-center space-y-8 max-w-lg mx-auto">
        <img
          src={centerImage}
          alt="Cooking illustration"
          className="hidden cooking-center-image w-56 sm:w-64 md:w-72 mx-auto mb-6 sm:mb-8"
        />
        {displayItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* DESKTOP layout */}
      <div className="hidden lg:block relative max-w-[1240px] mx-auto h-[860px] p-10 xl:px-8">
        <div className=" hidden md:flex absolute bottom-[35%] inset-0  justify-center items-center z-10">
          <img
            src={centerImage}
            alt="Cooking illustration"
            className=" cooking-center-image h-[120%] w-[320px] xl:w-[380px] 2xl:w-[400px] object-contain"
          />
        </div>

        {displayItems.map((item, index) => {
          const positions = [
            "absolute bottom-[1%] right-[2%]",
            "absolute bottom-[20%] left-[70%]",
            "absolute bottom-[26%] right-[2%]",
            "absolute bottom-[50%] left-[70%]",
          ];
          return <Card key={index} item={item} className={positions[index]} />;
        })}
      </div>
    </section>
  );
};

/* ------------ CARD COMPONENT ------------ */
const Card = ({ item, className = "" }) => {
  return (
    <div className={`relative w-full max-w-[400px] h-auto   ${className}`}>

      {/* Background boxes visible in all views, 70% width & height */}
      <div className="absolute -top-[8px] -left-[8px] w-[70%] h-[50%] bg-[#0B2A4A] rounded-xl opacity-90 z-0"></div>
      <div className="absolute -bottom-[8px] -right-[8px] w-[70%] h-[50%] bg-[#0B2A4A] rounded-xl opacity-90 z-0"></div>

      {/* Main content */}
      <div className="relative bg-white min-h-[340px] rounded-xl shadow-lg border border-[#E9EDF4] p-6 z-10">
        <div className="flex items-center justify-start">
          <div className="w-[48px] h-[40px] flex items-center justify-center">
            {typeof item.icon === "string" ? (
              <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
            ) : (
              item.icon
            )}
          </div>
        </div>
        <h3 className="text-[20px] md:text-[20px] text-left font-semibold text-[#0B243F] mt-3">{item.title}</h3>
        <p className="text-[18px] md:text-[18px] text-left text-[#3C4A5C] mt-2 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};


export default CookingFeature;
