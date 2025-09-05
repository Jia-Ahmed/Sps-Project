import { Link } from "react-router-dom";

const NewsTicker = () => {
  return (
    <div className="bg-gray-200 overflow-hidden py-2 sm:py-3">
      {/* Fixed height wrapper to prevent shifts */}
      <div className="h-6 sm:h-7 flex items-center">
        <div className="inline-block animate-marquee whitespace-nowrap">
          <span className="sm:text-sm md:text-base font-medium text-black mx-4 sm:mx-8 hover:underline">
            SPS is showcasing VITA SEC-530 Compliance Services at COVITS 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
