import React from 'react';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What Can I Do</h2>
        <SkillsGrid />
      </div>
    </div>
  );
};

export default Skills;
