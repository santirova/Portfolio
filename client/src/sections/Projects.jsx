import React, { useState } from "react";
import { dataProjects } from "../data/dataRovaletti/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import Button from "../components/Button";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col w-full items-center py-24 px-12 bg-mybg2 dark:bg-mybg2d" name="projects">
      <div className="flex flex-col w-full max-w-screen-xl items-center">
        <h1 className="mb-12 text-3xl font-semibold text-myacc dark:text-myaccd md:text-5xl">
          PROJECTS
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dataProjects.map((project, index) => (
            <div
              key={index}
              className="bg-mybg1 dark:bg-mybg1d rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => openProjectDetail(project)}
            >
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.name}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-mytext dark:text-mytextd">{project.name}</h2>
                <p className="text-sm text-mytext dark:text-mytextd mb-4 line-clamp-3">{project.description}</p>
                <div className="flex space-x-2 mt-auto">
                  {project.deploy && (
                    <Button href={project.deploy} text="Demo" />
                  )}
                  {project.repository && (
                    <Button href={project.repository} text="Repository" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={closeProjectDetail}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
