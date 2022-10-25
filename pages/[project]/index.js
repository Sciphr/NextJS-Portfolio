import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiRadioButtonFill } from 'react-icons/ri';
import berrytok from '../../public/assets/project/berrytok.png';
import berryshop from '../../public/assets/project/ecommercesity.png';
import githubsearch from '../../public/assets/project/github-search-screenshot.png';
import jobtracker from '../../public/assets/project/job-tracker-screenshot.png';
import projectDataArray from '../../public/assets/projectDataArray.json';

const index = () => {
  const router = useRouter();
  const { project } = router.query;
  const { projects } = projectDataArray;

  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [titleSkills, setTitleSkills] = useState('');
  const [projectOverview, setProjectOverview] = useState('');
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [githubLink, setGithubLink] = useState('');
  const [demoLink, setDemoLink] = useState('');

  useEffect(() => {
    if (project === 'berrytok') {
      setImage(berrytok);
      setTitle(projects[0].title);
      setTitleSkills(projects[0].titleSkills);
      setProjectOverview(projects[0].projectOverview);
      setProjectTechnologies(projects[0].technologies);
      setGithubLink(projects[0].github);
      setDemoLink(projects[0].demo);
    } else if (project === 'berryshop') {
      setImage(berryshop);
      setTitle(projects[1].title);
      setTitleSkills(projects[1].titleSkills);
      setProjectOverview(projects[1].projectOverview);
      setProjectTechnologies(projects[1].technologies);
      setGithubLink(projects[1].github);
      setDemoLink(projects[1].demo);
    } else if (project === 'githubsearch') {
      setImage(githubsearch);
      setTitle(projects[2].title);
      setTitleSkills(projects[2].titleSkills);
      setProjectOverview(projects[2].projectOverview);
      setProjectTechnologies(projects[2].technologies);
      setGithubLink(projects[2].github);
      setDemoLink(projects[2].demo);
    } else if (project === 'jobtracker') {
      setImage(jobtracker);
      setTitle(projects[3].title);
      setTitleSkills(projects[3].titleSkills);
      setProjectOverview(projects[3].projectOverview);
      setProjectTechnologies(projects[3].technologies);
      setGithubLink(projects[3].github);
      setDemoLink(projects[3].demo);
    }
  }, [project]);

  if (!image) {
    return <p>Waiting...</p>;
  }

  if (image) {
    return (
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={image}
            alt="project image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">{title}</h2>
            <h3>{titleSkills}</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2 className="py-3">Overview</h2>
            <p className="py-2">{projectOverview}</p>
            <button className="px-8 py-2 mt-4 mr-8">
              <a href={demoLink} target="_blank">
                Demo
              </a>
            </button>
            <button className="px-8 py-2 mt-4">
              <a href={githubLink} target="_blank">
                Code
              </a>
            </button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {projectTechnologies.map((tech, index) => (
                  <p
                    key={index}
                    className="text-gray-600 py-2 flex items-center"
                  >
                    <RiRadioButtonFill className="pr-1" />
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    );
  }
};

export default index;
