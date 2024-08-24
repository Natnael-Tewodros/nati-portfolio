import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiTailwindcss, SiExpress, SiPhp, SiMysql } from "react-icons/si";

const Techstack = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-4 text-center">
          <DiHtml5 className="text-6xl text-blue-500" />
          <p className="text-lg text-white mt-2 font-semibold">HTML</p>
        </div>
        <div className="p-4 text-center">
          <DiCss3 className="text-6xl text-blue-400" />
          <p className="text-lg text-white mt-2 font-semibold">CSS</p>
        </div>
        <div className="p-4 text-center">
          <DiJavascript1 className="text-6xl text-yellow-400" />
          <p className="text-lg text-white mt-2 font-semibold">JavaScript</p>
        </div>
        <div className="p-4 text-center">
          <DiReact className="text-6xl text-cyan-400" />
          <p className="text-lg text-white mt-2 font-semibold">React</p>
        </div>
        <div className="p-4 text-center">
          <DiNodejs className="text-6xl text-green-600" />
          <p className="text-lg text-white mt-2 font-semibold">Node.js</p>
        </div>
        <div className="p-4 text-center">
          <DiMongodb className="text-6xl text-green-800" />
          <p className="text-lg text-white mt-2 font-semibold">MongoDB</p>
        </div>
        <div className="p-4 text-center">
          <SiTailwindcss className="text-6xl text-blue-300" />
          <p className="text-lg text-white mt-2 font-semibold">Tailwind CSS</p>
        </div>
        <div className="p-4 text-center">
          <SiExpress className="text-6xl text-gray-600" />
          <p className="text-lg text-white mt-2 font-semibold">Express</p>
        </div>
        <div className="p-4 text-center">
          <SiPhp className="text-6xl text-purple-600" />
          <p className="text-lg text-white mt-2 font-semibold">PHP</p>
        </div>
        <div className="p-4 text-center">
          <DiGit className="text-6xl text-orange-400" />
          <p className="text-lg text-white mt-2 font-semibold">Git</p>
        </div>
        <div className="p-4 text-center">
          <DiJava className="text-6xl text-red-600" />
          <p className="text-lg text-white mt-2 font-semibold">Java</p>
        </div>
        <div className="p-4 text-center">
          <DiPython className="text-6xl text-blue-500" />
          <p className="text-lg text-white mt-2 font-semibold">Python</p>
        </div>
        <div className="p-4 text-center">
          <SiMysql className="text-6xl text-blue-600" />
          <p className="text-lg text-white mt-2 font-semibold">MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
