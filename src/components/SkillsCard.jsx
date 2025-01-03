import React from "react";

const SkillsCard = ({ skillSet, styles }) => {
  
  return (
    <>
      <div className={`${styles}`} >
        <h2 className="text-2xl text-vanillaberry font-bold" >Skills</h2>
        <div className="flex flex-wrap justify-center m-auto" >
          {skillSet.map((skill, index) => (
            <div key={index} className="skill-card-grow skill-card-pop flex justify-center rounded-md shadow-xl px-2 py-3">
              <p className="skill-grow my-auto font-semibold mr-4" >{skill}</p>
              <img src={`public/logos/${skill}.png`} alt={skill} className="icon-grow" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default SkillsCard;
