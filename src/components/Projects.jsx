import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectList }) => {

  return (
    <>
      <div className="flex flex-wrap justify-center gap-12" >
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
