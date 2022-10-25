import React from 'react';
import Image from 'next/image';
import SkillItem from './SkillItem';

const SkillsGrid = () => {
  const photoPath = '/../public/assets/skills/';

  const data = [
    {
      path: `${photoPath}html.png`,
      skill: 'html',
    },
    {
      path: `${photoPath}css.png`,
      skill: 'css',
    },
    {
      path: `${photoPath}firebase.png`,
      skill: 'firebase',
    },
    {
      path: `${photoPath}github1.png`,
      skill: 'github',
    },
    {
      path: `${photoPath}javascript.png`,
      skill: 'javascript',
    },
    {
      path: `${photoPath}mongo.png`,
      skill: 'MongoDB',
    },
    {
      path: `${photoPath}nextjs.png`,
      skill: 'nextjs',
    },
    {
      path: `${photoPath}node.png`,
      skill: 'node',
    },
    {
      path: `${photoPath}react.png`,
      skill: 'react',
    },
    {
      path: `${photoPath}tailwind.png`,
      skill: 'tailwind',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((item, index) => (
        <SkillItem
          path={data[index].path}
          skill={data[index].skill}
          key={index}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;
