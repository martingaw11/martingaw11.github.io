import React from "react";
import logoMap from "../data/logoMap";

const Skills = ({ skillSet, styles }) => {
  
  return (
    <>
      <div className={`${styles}`} >
        <h2 className="text-3xl text-seablue font-bold" >Skills</h2>
        <div className="flex flex-wrap justify-center m-auto" >
          {skillSet.map((skill, index) => (
            <div key={index} className="skill-card-grow skill-card-pop flex justify-center rounded-md shadow-xl px-2 py-3">
              <p className="skill-grow my-auto font-semibold mr-4" >{skill}</p>
              <img src={logoMap[skill]} alt={skill} className="icon-grow" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
