import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBolt } from 'react-icons/fa';
import { FaCircleUser, FaRegCopy } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const Header = ({ onToggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-2 py-4 bg-white relative">
      <button
        className="md:hidden text-2xl flex items-center justify-between gap-2"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <MdMenu />
      </button>

      <div className="flex justify-end items-center w-full md:justify-between">
        <div className="flex items-center ml-auto mr-2 sm:mr-10 relative">
          <span className="text-base font-bold text-black mr-4 flex items-center gap-2 mr-2 sm:mr-5">
            palai.launchpal.ai <FaRegCopy className="text-[#000] size-4" />
          </span>
          <button className="bg-[#7E22CD] text-base font-semibold text-white h-[40px] px-4 py-2 rounded-lg flex items-center mr-5">
            Create <FaBolt className="text-white ml-2" size={14} />
          </button>
          <span className="w-[1px] h-[25px] bg-[#E3E6E7]"></span>         
          <div className="relative ml-5" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              <FaCircleUser className="text-[#E3E6E7] size-9 sm:size-11" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>                   
                  </li>
                  <li>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>                   
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
