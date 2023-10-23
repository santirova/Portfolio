import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col w-full items-center py-24 bg-mybg2 dark:bg-mybg2d" name="projects">
      <div className="flex flex-col w-full max-w-screen-xl items-center">
        <h1 className="mb-12 text-3xl font-semibold text-myacc dark:text-myaccd md:text-5xl">
          PROJECTS
        </h1>
        {dataProjects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex mb-12 flex-col md:flex-row items-center md:mx-4"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  className="w-full h-auto"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="md:w-2/3 max-md:mx-10">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm font-sans mb-4">{project.description}</p>
                <div className="flex flex-col sm:flex-row md:space-x-4">
                  {project.deploy && (
                    <Button href={project.deploy} text="DEPLOY" />
                  )}
                  {project.repository && (
                    <Button href={project.repository} text="REPOSITORY" />
                  )}
                  <Button
                    text="TECHNOLOGIES"
                    onClickHandler={() => openProjectDetail(project)}
                  />
                </div>
              </div>
            </div>
          );
        })}
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
