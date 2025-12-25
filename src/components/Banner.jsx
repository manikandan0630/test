const Banner = ({ imageSrc, description, tag1, tag2 }) => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8  mt-[13%]">
      <div className="max-w-[1240px] mx-auto bg-[#05203c] text-white rounded-xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start flex-shrink-0">
          <img
            src={imageSrc}
            alt="Cooking illustration"
            className="w-[134px] max-w-[154px] sm:max-w-[280px] md:w-72 lg:w-80 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <p className="text-sm text-[18px] sm:text-base md:text-lg text-left opacity-80 leading-relaxed mb-4 md:mb-6">
            {description}
          </p>

          <h2 className="text-lg sm:text-xl lato-bold md:text-2xl lg:text-3xl text-left font-semibold leading-snug">
            {tag1}{" "}
            <span
              className="font-bold bg-[#FFA07A] text-white px-1 rounded"
              style={{ padding: "1px", borderRadius: "5px" }}
            >
              Wings
            </span>
            , traditional {tag2}.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
