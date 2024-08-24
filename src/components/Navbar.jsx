import React, { useState } from "react";
import logo from "../assets/logo.png"; // Correct path to your logo
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-4 md:px-8 lg:px-16 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-blue-500 transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            {isDropdownOpen ? (
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 transition-all duration-300 ease-in-out ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
        onClick={toggleDropdown} // Close menu on outside click
      >
        <div className="absolute top-0 left-0 w-3/4 bg-gray-900 text-white p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#Home"
              className="flex items-center text-white hover:text-gray-300"
            >
              <HomeIcon className="w-6 h-6 mr-2" /> Home
            </a>
            <a
              href="#About"
              className="flex items-center text-white hover:text-gray-300"
            >
              <UserIcon className="w-6 h-6 mr-2" /> About Me
            </a>
            <a
              href="#Skills"
              className="flex items-center text-white hover:text-gray-300"
            >
              <WrenchScrewdriverIcon className="w-6 h-6 mr-2" /> Skills
            </a>
            <a
              href="#Projects"
              className="flex items-center text-white hover:text-gray-300"
            >
              <BriefcaseIcon className="w-6 h-6 mr-2" /> Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1zSFqZPmopzxXEUIGdbT36Fivz91ShoTZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-gray-300"
            >
              <DocumentTextIcon className="w-6 h-6 mr-2" /> Resume
            </a>
            <a
              href="#Contact"
              className="flex items-center text-white hover:text-gray-300"
            >
              <PhoneIcon className="w-6 h-6 mr-2" /> Contact
            </a>
          </nav>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/asero13th"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aser-hailu-7b5238240/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/Aser09433103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/aser_hailu_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
