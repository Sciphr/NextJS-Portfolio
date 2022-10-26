import React from 'react';
import SkillItem from './SkillItem';

import htmlSkill from '../public/assets/skills/html.png';
import cssSkill from '../public/assets/skills/css.png';
import firebaseSkill from '../public/assets/skills/firebase.png';
import githubSkill from '../public/assets/skills/github1.png';
import javascriptSkill from '../public/assets/skills/javascript.png';
import mongoSkill from '../public/assets/skills/mongo.png';
import nextSkill from '../public/assets/skills/nextjs.png';
import nodeSkill from '../public/assets/skills/node.png';
import reactSkill from '../public/assets/skills/react.png';
import tailwindSkill from '../public/assets/skills/tailwind.png';

const SkillsGrid = () => {
  const data = [
    {
      path: htmlSkill,
      skill: 'html',
    },
    {
      path: cssSkill,
      skill: 'css',
    },
    {
      path: firebaseSkill,
      skill: 'firebase',
    },
    {
      path: githubSkill,
      skill: 'github',
    },
    {
      path: javascriptSkill,
      skill: 'javascript',
    },
    {
      path: mongoSkill,
      skill: 'MongoDB',
    },
    {
      path: nextSkill,
      skill: 'nextjs',
    },
    {
      path: nodeSkill,
      skill: 'node',
    },
    {
      path: reactSkill,
      skill: 'react',
    },
    {
      path: tailwindSkill,
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
