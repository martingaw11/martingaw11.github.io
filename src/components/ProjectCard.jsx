import React from "react";
import logoMap from "../data/logoMap";

const ProjectCard = ({ project }) => {
  
  return (
    <>
      <div id="project-card" className="flex flex-col h-64 w-96 justify-between px-4 py-6 rounded-xl shadow-xl" >
        <h3 className="text-lg font-semibold" >{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
        <div id="tools" className="flex jusitfy-start" >
          {project.tools.map((tool, index) => (
            <img key={index} src={logoMap[tool]} alt={tool} className="icon-grow" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
