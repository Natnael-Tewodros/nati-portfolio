import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiSublimetext,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Tools
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full shadow-md">
          <SiLinux className="w-10 h-10 text-blue-400" />
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full shadow-md">
          <SiVisualstudiocode className="w-10 h-10 text-blue-500" />
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full shadow-md">
          <SiPostman className="w-10 h-10 text-red-500" />
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full shadow-md">
          <SiSublimetext className="w-10 h-10 text-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default Toolstack;
