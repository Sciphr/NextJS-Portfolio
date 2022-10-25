import React from 'react';
import berryTok from '../public/assets/project/berrytok.png';
import berryshop from '../public/assets/project/ecommercesity.png';
import githubsearch from '../public/assets/project/github-search-screenshot.png';
import jobtracker from '../public/assets/project/job-tracker-screenshot.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto px-2 py-14">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="BerryTok"
            backgroundImg={berryTok}
            projectUrl="/berrytok"
          />
          <ProjectItem
            title="Berry Shop"
            backgroundImg={berryshop}
            projectUrl="/berryshop"
          />
          <ProjectItem
            title="Github Profile Search"
            backgroundImg={githubsearch}
            projectUrl="/githubsearch"
          />
          <ProjectItem
            title="Job Tracker"
            backgroundImg={jobtracker}
            projectUrl="/jobtracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
