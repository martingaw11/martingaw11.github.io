import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectList }) => {

  return (
    <>
      <div className="flex justify-around" >
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
