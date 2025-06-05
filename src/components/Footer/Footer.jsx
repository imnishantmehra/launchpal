import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-4 shadow-inner text-sm text-gray-500">
      © {new Date().getFullYear()} LaunchPal. All rights reserved.
    </footer>
  );
};

export default Footer;
