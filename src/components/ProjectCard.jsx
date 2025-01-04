import React from "react";
import logoMap from "../data/logoMap";

const ProjectCard = ({ project }) => {
  
  return (
    <>
      <div id="project-card" className="project-card-pop project-card-grow flex flex-col justify-between px-6 py-5 rounded-xl" >
        <div id="top-half" >
          <h3 className="text-xl font-bold" >{project.title}</h3>
          <p className="mt-2" >{project.description}</p>
        </div>

        <div id="bottom-half" className="" >
          <div id="url-sect" >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-link mb-4" >View</a>
            <span id="spacer" />
          </div>
          <div id="tools" className="flex jusitfy-start" >
            {project.tools.map((tool, index) => (
              <img key={index} src={logoMap[tool]} alt={tool} title={tool} className="icon-grow mr-3" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default ProjectCard;
