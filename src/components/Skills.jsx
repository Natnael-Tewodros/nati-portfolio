import React from "react";
import Techstack from "./Techstack"; // Adjust the path as needed
import Toolstack from "./Toolstack"; // Import the Toolstack component

const Skills = () => {
  return (
    <section id="Skills" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
          My Skills
        </h2>
        <p className="text-lg mb-8 text-center text-white">
          Here are some of the technologies, tools, and skills I have experience
          with:
        </p>
        <Techstack />
        <Toolstack /> {/* Add the Toolstack component */}
      </div>
    </section>
  );
};

export default Skills;
