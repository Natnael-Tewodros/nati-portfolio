import React from "react";
import logo from "../assets/logo.png"; // Example of correct case

import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid"; // Example with Heroicons

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 md:px-16 lg:px-24 shadow-lg relative">
      <div className="container py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-blue-500 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="space-x-8 flex items-center">
          <a
            href="#Home"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <HomeIcon className="w-6 h-6 mr-2" /> Home
          </a>
          <a
            href="#About"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <UserIcon className="w-6 h-6 mr-2" /> About Me
          </a>
          <a
            href="#Skills"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <WrenchScrewdriverIcon className="w-6 h-6 mr-2" /> Skills
          </a>
          <a
            href="#Projects"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <BriefcaseIcon className="w-6 h-6 mr-2" /> Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1zSFqZPmopzxXEUIGdbT36Fivz91ShoTZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <DocumentTextIcon className="w-6 h-6 mr-2" /> Resume
          </a>
          <a
            href="#Contact"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg font-semibold italic"
          >
            <PhoneIcon className="w-6 h-6 mr-2" /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
