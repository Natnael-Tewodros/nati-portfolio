import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="Contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gray-900 text-4xl md:text-5xl">
                Let's Talk
              </span>
              <span className="block text-blue-300 text-xl md:text-2xl">
                I'm here to help
              </span>
            </h3>
            <p className="text-blue-400">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-blue-400 mr-2" />
              <a
                href="mailto:natnaeltewodros03@gmail.com"
                className="hover:underline text-blue-400"
              >
                natnaeltewodros03@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-blue-400 mr-2" />
              <span className="text-blue-400">
                +251941357150 / +251716357150
              </span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-blue-400 mr-2" />
              <span className="text-blue-400">Addis Ababa, Ethiopia</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-blue-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-blue-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-blue-400">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button className="bg-gray-900 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full shadow-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
