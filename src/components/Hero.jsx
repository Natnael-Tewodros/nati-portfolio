import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../assets/avator.jpg"; // Update with your image path

const Hero = () => {
  return (
    <div
      id="Hero"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-10 w-full"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Description Section */}
        <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LET ME <span className="text-indigo-500">INTRO</span>DUCE MYSELF
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            I started programming in early 2019 when I joined the Information
            Technology department at ASU.
            <br />
            <br />I initially started with Python and then transitioned to web
            development. My favorite coding language has been
            <i>
              <b className="text-indigo-500"> JavaScript </b>
            </i>
            , and I'm also familiar with Java, Python, C++, and sometimes C 🤯.
            <br />
            <br />
            I'm highly interested in{" "}
            <i>
              <b className="text-indigo-500">Artificial Intelligence</b>
            </i>{" "}
            and <b className="text-indigo-500">Full Stack Web Development</b>.
            <br />
            <br />
            Additionally, I mentor and practice to enhance my problem-solving
            skills.
          </p>
        </div>

        {/* Avatar Section */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={myImg}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-lg transform transition-transform hover:scale-105"
            alt="avatar"
          />
        </div>
      </div>

      {/* Social Links Section */}
      <div className="mt-12 text-center">
        <h1 className="text-2xl font-bold mb-4">FIND ME ON</h1>
        <p className="mb-4">
          Feel free to <span className="text-indigo-500">connect</span> with me
        </p>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://github.com/Natnael-Tewodros"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Natnael_Tew_7"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/natnael-tewodros/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/natnael_tewodros_7/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
