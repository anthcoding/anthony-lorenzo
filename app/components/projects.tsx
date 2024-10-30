import Link from 'next/link';
import React from 'react';
import { projectsData } from '../project/projects.data';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Projects = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-row border-b-[.3px] dark:border-neutral-800 border-neutral-300 pb-2">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm my-auto mr-5">
          Year
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight w-[15%] text-sm">
          Project
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm my-auto mr-2 w-[50%] text-sm">
          Built with
        </p>
        <p className="w-[10%]"></p>
      </div>
      {projectsData?.map((project) => (
        <Link
          key={project.title}
          className="flex flex-col py-3 border-b-[.3px] dark:border-neutral-800 border-neutral-300 py-2 group"
          // href={`/project/${project.link}`}
          target="_blank"
          href={`${project.link}`}
        >
          <div className="w-full flex flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm my-auto mr-2">
              {project.year}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight mr-2 w-[16%] md:w-[12%] my-auto">
              {project.title}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-xs text-neutral-600 mr-1 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-400 py-1 px-2 rounded-2xl"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="ml-auto w-4 h-4 my-auto relative overflow-hidden">
              <IoMdArrowRoundBack className="rotate-135 absolute -translate-x-5 translate-y-5 text-black dark:text-white transition-transform duration-300 group-hover:translate-y-[-0.1rem] group-hover:translate-x-[-0.2rem]" />
              <IoMdArrowRoundBack className="rotate-135 absolute text-neutral-400 dark:text-neutral-700 transition-transform duration-300 group-hover:-translate-y-[0.9rem] group-hover:translate-x-[0.4rem]" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
