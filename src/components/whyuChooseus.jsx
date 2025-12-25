import React from "react";

const WhyChooseUs = ({ items }) => {
  // Default items if not provided
  const defaultItems = [
    "Cooks Who Maintain Exceptional Cleanliness Standards",
    "Complete Menu Planning and Grocery Management",
    "Flexible Stay-in and Non-Stay Options",
    "Specialized Expertise for Every Dietary Need",
    "Personal Guidance Throughout Your Cooking Journey",
  ];

  const displayItems = items || defaultItems;

  // Create subtle pattern background
  const patternBackground = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5A48C' fill-opacity='0.4'%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='35' y='35' width='15' height='15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "60px 60px",
  };

  return (
    <section className="w-full bg-[#F5F5F0] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Card */}
          <div
            className="bg-[#FFB195] hidden p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed md:flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[0]}
          </div>

          {/* Center Title */}
          <h2
            className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 
                 whitespace-nowrap"
          >
            Why Choose from Us?
          </h2>
          <div
            className="md:hidden bg-[#FFB195] p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[0]}
          </div>

          {/* Right Card */}
          <div
            className="bg-[#FFB195] p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[1]}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div
            className="bg-[#FFB195] p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[2]}
          </div>

          <div
            className="bg-[#FFB195] p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[3]}
          </div>

          <div
            className="bg-[#FFB195] p-6 rounded-xl shadow-sm text-center font-medium text-gray-800 
                 text-base lg:text-lg leading-relaxed flex items-center justify-center mx-auto"
            style={{ ...patternBackground, width: "340px", height: "180px" }}
          >
            {displayItems[4]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
