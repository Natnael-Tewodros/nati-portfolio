import React from "react";
import MyImage from "../assets/Robofriends.png";

const projects = [
  {
    id: 1,
    name: "RoboFriends",
    technologies: "React",
    image: MyImage,
    github: "https://natnael-tewodros.github.io/robofriends/",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="Projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gray-900 hover:bg-gray-700 
              text-white px-4 py-2 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
