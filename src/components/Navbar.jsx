import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Natnael</div>
        <div className="space-x-8">
          {" "}
          {/* Adjusted spacing between links */}
          <a href="#Home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="hover:text-gray-400">
            {" "}
            {/* Removed extra space */}
            About Me
          </a>
          <a href="#Skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#Projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
