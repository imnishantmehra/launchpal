import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { sidebarMenu } from "./sidebarMenu";
import Logo from '../../assets/Logo.png';
import { FaTimes } from 'react-icons/fa';
import { FaRegImage } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
const Sidebar = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Outshine");
  return (
    <aside
      className={`overflow-auto fixed md:relative z-50 h-screen w-[300px] bg-white sm:w-[340px] p-0 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        sideBar`}
    >
      <button
        className="absolute top-4 right-4 text-xl font-bold md:hidden"
        onClick={onClose}
        aria-label="Close Sidebar"
      >
        <FaTimes />
      </button>      
      <div className="mb-10 flex items-center gap-2 mt-6 md:mt-6 px-1">
        <Link to="/"><img src={Logo} alt="LaunchPal Logo" className="w-[249px] h-[56px] object-contain" /></Link>
        <span className="text-green-600 font-semibold text-sm bg-[#EFFDF4] border border-[#62A979] rounded-lg px-2 mt-3">Beta</span>
      </div>      
      <div className="mb-6 px-4 relative">
        <div
          className="w-full flex items-center justify-between border rounded-[10px] p-2 text-sm cursor-pointer shadow-md hover:border-gray-300"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gray-100 border border-gray-600 rounded-full flex items-center justify-center text-xs ml-2">
            <FaRegImage className='text-gray-300 size-4' />
            </div>
            <span className="text-gray-800 font-medium">{selected}</span>
          </div>
          <HiChevronUpDown className="w-6 h-6 text-gray-500" />
        </div>       
        {open && (
          <div className="absolute mt-1 left-4 right-4 bg-white border rounded-lg shadow text-sm z-10">
            {["Outshine", "Option 2", "Option 3"].map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <ul>
        <li className="flex items-center font-bold p-2 bg-[#7E22CD10] rounded-r-full border-l-8 border-[#7E22CD] mr-10">
          <svg className="mr-4" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" stroke="#7E22CD" />
            <rect x="6.5" y="6.5" width="7" height="7" rx="2.5" stroke="#7E22CD" />
            <rect x="16.5" y="6.5" width="7" height="7" rx="2.5" stroke="#7E22CD" />
            <rect x="6.5" y="16.5" width="7" height="7" rx="2.5" stroke="#7E22CD" />
            <rect x="16.5" y="16.5" width="7" height="7" rx="2.5" stroke="#7E22CD" />
          </svg>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
      <div className='px-4'>
        {sidebarMenu.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.title && (
              <h3 className="text-md font-semibold text-gray-600 mt-6 sm:mt-10 mb-3 ml-3 uppercase">
                {section.title}
              </h3>
            )}
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-gray-100">
                  <Link to={item.path} className="flex items-center w-full">
                    <span className="bg-white py-1 h-[40px] w-[40px] rounded-xl mr-4 border-2 border-[#f2f2f2] drop-shadow-md flex justify-center items-center">
                      {item.icon}
                    </span>
                    <span className="text-base font-semibold">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
