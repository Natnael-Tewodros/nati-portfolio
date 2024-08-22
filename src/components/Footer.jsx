import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex-1 text-left">
          <p className="text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Natnael. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 text-right">
          <div className="flex justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
