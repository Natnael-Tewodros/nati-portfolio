import React from "react";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-10 md:py-20"
    >
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-center text-5xl text-indigo-500 font-bold mb-8">
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">python</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 60 }}
          >
            60%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">HTML</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 80 }}
          >
            80%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">express</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 30 }}
          >
            30%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">react.js</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 50 }}
          >
            50%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">Css</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 80 }}
          >
            80%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">Javascript</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 80 }}
          >
            80%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">PHP</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 70 }}
          >
            70%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">Node Js</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 30 }}
          >
            30%
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl mb-2 text-indigo-400 font-bold">Git</h3>
          <div
            className="radial-progress mx-10 text-white"
            style={{ "--value": 60 }}
          >
            60%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
