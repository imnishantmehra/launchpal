import React from "react";
import backArrow from "../../assets/backArrow.png";
import Rectangle from "../../assets/Rectangle_44.png";

const ContentType = () => {
  const topics = [
    "Client win highlight",
    "Future of marketing",
    "Expert Insight",
    "Another Item",
    "Yet another item",
    "Expert Insight",
    "Future of marketing",
    "Expert Insight",
  ];

  return (
    <>
      {/* Top Section with Back Button */}
      <div className="relative w-10 h-10 mb-4 bg-purple-700 rounded-full flex items-center justify-center">
        <img
          src={Rectangle}
          alt="Background"
          className="absolute w-full h-full object-cover rounded-full"
        />
        <img src={backArrow} alt="Back" className="w-4 h-4 z-10" />
      </div>

      <div className="w-full max-w-xl rounded-[13px] bg-white p-6 shadow-md md:ml-20">
        {/* Main Content */}
        <h1 className="font-semibold text-[16px] mb-1">
          What would you like to create?
        </h1>
        <p className="text-[11px] text-gray-600 mb-4">
          Tell us about your company, include website, placeholder
        </p>

        <div>
          <textarea
            placeholder="Theme, topic, trends, we can work with anything"
            className="w-full min-h-[87px] rounded-[7px] bg-gray-100 mb-6 border border-[#DFE5EC] p-3 text-sm resize-y"
          ></textarea>
        </div>

        {/* Suggested Topics */}
        <p className="text-[16px] mb-4">Suggested Topics:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic, index) => (
            <p
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
            >
              {topic}
            </p>
          ))}
        </div>

        <p className="font-medium text-[16px] text-purple-700 mb-4 underline cursor-pointer">
          Explore other ideas
        </p>

        <button className="w-full md:w-[117px] h-[50px] rounded-[8px] text-white bg-purple-700 hover:bg-purple-800 transition">
          Generate
        </button>
      </div>
    </>
  );
};

export default ContentType;
