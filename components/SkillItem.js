import React from 'react';
import Image from 'next/image';

const SkillItem = ({ path, skill }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={path} alt="skill" width="64px" height="64px" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="capitalize">{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
