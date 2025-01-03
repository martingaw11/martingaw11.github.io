import React from "react";

const SkillsCard = ({ skillSet, styles }) => {


  return (
    <>
      <div className={`${styles}`} >
        <div className="flex flex-wrap justify-center max-w-3xl m-auto" >
          {skillSet.map((skill, index) => (
            <div key={index} className="flex justify-center w-52 rounded-md shadow-xl m-4 px-2 py-3">
              <p className="my-auto font-bold text-lg mr-4" >{skill}</p>
              <img src={`public/logos/${skill}.png`} alt={skill} className="h-12 w-12" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default SkillsCard;
