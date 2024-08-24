import React from "react";
import { ImPointRight } from "react-icons/im";
import AboutImage from "../assets/home.jpg"; // Update with your image path

const About = () => {
  return (
    <div
      id="About"
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-10"
    >
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <img
            src={AboutImage}
            alt="About Me"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-indigo-500 mb-6 md:mb-0 md:mr-8"
          />

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Hello there, <span className="text-indigo-500">Natnael</span>{" "}
              here.
              <br />
              Born and raised in{" "}
              <span className="text-indigo-500">Addis Ababa, Ethiopia</span>.
            </h2>
            <p className="text-base md:text-lg mb-4">
              I am a dedicated web developer who recently graduated from Assosa
              University with a degree in Information Technology. I am actively
              seeking opportunities and am open to hiring for roles in web
              development.
              <br />
              <br />
              Apart from coding, what do I enjoy?
            </p>

            <ul className="list-disc list-inside mb-4">
              <li className="flex items-center mb-2">
                <ImPointRight className="text-indigo-500 mr-2" /> Listening to
                Music
              </li>
              <li className="flex items-center mb-2">
                <ImPointRight className="text-indigo-500 mr-2" /> Spending Time
                with Family and friends
              </li>
            </ul>

            <p className="italic text-gray-400 mb-4">
              "The only limit to our realization of tomorrow is our doubts of
              today."
            </p>
            <footer className="text-gray-500">Franklin D. Roosevelt</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
