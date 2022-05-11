import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill , index) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} key={index} />
        );
      })}
    </div>
  );
}

export default Skills;
