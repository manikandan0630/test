import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
export default function ContactBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#001F3F]">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 px-4 sm:px-8 py-2 sm:py-3">
    
    {/* Email */}
    <div className="flex items-center gap-2 text-white">
      <div className="bg-white rounded-full p-2">
        <MdOutlineMailOutline className="text-black text-[16px] md:text-[18px]" />
      </div>
      <span className="text-[14px] md:text-[16px]">
        hr.wingservices@gmail.com
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-2 text-white">
      <div className="bg-white rounded-full p-2">
        <FaPhoneAlt className="text-black text-[16px] md:text-[18px]" />
      </div>
      <span className="text-[14px] md:text-[16px]">
        +91 95006 28800
      </span>
    </div>

  </div>
</div>

  );
}
