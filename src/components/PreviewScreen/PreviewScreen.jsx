import React, { useState } from "react";
import facebook from "../../assets/facebook.png";
import previewImage from "../../assets/previewImage.png";
import leftSliderArrow from "../../assets/leftSliderArrow.png";
import rightSliderArrow from "../../assets/rightSliderArrow.png";
import backArrow from "../../assets/backArrow.png";
import Rectangle from "../../assets/Rectangle_44.png";
import emptyCircle from "../../assets/emptyCircle.png";
import mic from "../../assets/mic.png";
import upArrow from "../../assets/upArrow.png";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const PreviewScreen = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const chats = [
    {
      type: "user",
      message:
        "I want a cool post about the future of advertising and how Outshine will lead this",
    },
    {
      type: "user",
      message: "hmm, don’t love this. Can you give me new ideas?",
    },
    {
      type: "user",
      message: "Don't use it because index 2 uses special div",
    },
    {
      type: "user",
      message: "Can you get a photo of their office and add it to the post?",
    },
    {
      type: "user",
      message: "Can you make 4 versions for me to review?",
    },
  ];

  return (
    <div className="flex flex-wrap flex-col md:flex-row gap-6 bg-[#F9FAFB] p-6">
      {/* Back Button */}
      <div className="relative w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center mb-4 md:mb-0">
        <img src={backArrow} alt="Back" className="w-4 h-4" />
      </div>

      {/* Main Chat Box */}
      <div className="xl:flex-1 min-w-0 rounded-[13px] shadow-md bg-white p-6">
        <p className="text-left text-sm mb-2">
          Here’s a post about marketing and how Outshine can be a B2B leader...
        </p>
        <div>
          {chats.map((chat, index) =>
            index === 2 ? (
              <div
                key={index}
                className="flex flex-wrap gap-2 p-4 rounded-[14px] bg-[#F6F9FF] mb-4"
              >
                <h6 className="w-full mb-2 font-semibold">
                  Sure! Here’s some new concepts to pick from:
                </h6>
                {[
                  "Client win highlight",
                  "Future of marketing",
                  "Expert Insight",
                  "Another item here",
                  "Expert Insight",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="px-4 py-2 rounded-full border border-[#7E22CD] text-black text-sm"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <p
                key={index}
                className="flex justify-end mb-2 p-4 rounded-[14px] bg-[#F4E7FF] text-sm text-black"
              >
                {chat.message}
              </p>
            )
          )}

          {/* Adjust Post Box */}
          <div className="mt-6 rounded-[13px] bg-white p-6 shadow-md">
            <h5 className="text-xl font-semibold mb-2">
              Would you like to adjust this post?
            </h5>
            <p className="text-sm text-[#8848B2] mb-4">
              Note: You can edit the text directly yourself.
            </p>
            <input
              type="text"
              className="w-full h-[92px] border-2 border-[#DFE5EC] rounded-[7px] mb-4"
            />
            <div className="flex justify-end gap-4">
              <div className="relative">
                <img src={emptyCircle} alt="Circle" />
                <img
                  src={mic}
                  alt="Mic"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="relative">
                <img src={Rectangle} alt="Rectangle" />
                <img
                  src={upArrow}
                  alt="Up Arrow"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Screen */}
      <div className="lg:flex-1 min-w-0 rounded-[13px] bg-white p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <img src={leftSliderArrow} alt="Left Arrow" />
          {["A", "B", "C", "D", "E"].map((v, i) => (
            <p
              key={v}
              className={`text-base font-semibold underline ${
                i === 0 ? "text-[#7E22CD]" : "text-[#A39DA9]"
              }`}
            >
              Version {v}
            </p>
          ))}
          <img src={rightSliderArrow} alt="Right Arrow" />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {[
            FaFacebookF,
            FaInstagram,
            FaLinkedinIn,
            FaInstagram,
            FaLinkedinIn,
          ].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full border bg-white"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>

        <div className="relative flex flex-col md:flex-wrap md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <img src={facebook} alt="Facebook" className="w-[210px]" />
          <button
            className="bg-[#7E22CD] text-white px-4 py-2 rounded-[8px]"
            onClick={() => setOpenOptions(!openOptions)}
          >
            Share Post
          </button>
          {openOptions && (
            <div className="absolute top-full right-0 mt-2 w-72 border border-[#7E22CD] rounded-lg bg-white shadow z-50">
              <div className="flex items-start gap-3 p-4 border-b">
                <FaCalendarAlt className="text-[#7E22CD] text-lg mt-1" />
                <div>
                  <h6 className="text-sm font-semibold text-[#111827]">
                    Schedule this post
                  </h6>
                  <p className="text-sm text-[#6B7280]">
                    Add to your content calendar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border-b">
                <FaShareAlt className="text-[#7E22CD] text-lg mt-1" />
                <div>
                  <h6 className="text-sm font-semibold text-[#111827]">
                    Post Now
                  </h6>
                  <p className="text-sm text-[#6B7280]">
                    Text about posting now
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4">
                <FaDownload className="text-[#7E22CD] text-lg mt-1" />
                <div>
                  <h6 className="text-sm font-semibold text-[#111827]">
                    Download .jpg and .txt
                  </h6>
                  <p className="text-sm text-[#6B7280]">Export raw assets</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 text-sm space-y-4">
          <p>🌟 Join us for a sneak peek into the future of advertising...</p>
        </div>

        <div className="relative w-full">
          <img
            src={previewImage}
            alt="Preview"
            className="w-full h-auto rounded"
          />
          <div className="absolute top-6 left-6 bg-[#7E22CD] text-white p-3 rounded-2xl w-[90%] max-w-[450px]">
            Want a different photo or post? Ask our chat to the left.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;
