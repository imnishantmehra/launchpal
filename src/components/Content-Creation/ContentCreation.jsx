import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContentCreation = () => {
  const threads = [
    "Outshine and the future of AI marketing",
    "Poseidon OS and their life support systems",
    "Using AI for Vibe Coding",
    "Outshine and the future of AI marketing",
    "Poseidon OS and their life support systems",
    "Using AI for Vibe Coding",
  ];

  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4">Content Creation Threads</h2>

      {/* Start Fresh */}
      <div className="flex items-center justify-between p-6 bg-white rounded-[8px] shadow-sm mb-4">
        <div>
          <h3 className="text-base font-semibold">Start Fresh</h3>
          <p className="text-sm text-[#6B7280]">Create a new post</p>
        </div>
        <button className="px-4 py-2 bg-[#7E22CD] text-white text-sm font-semibold rounded-[8px]">
          Start new post
        </button>
      </div>

      {/* Threads List */}
      <div className="space-y-4">
        {threads.map((thread, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 bg-white rounded-[8px] shadow-sm cursor-pointer hover:bg-[#F9FAFB] transition"
          >
            <p className="text-base text-[#111827]">{thread}</p>
            <FaArrowRight className="text-[#7E22CD]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCreation;
