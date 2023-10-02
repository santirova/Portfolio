import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects";
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { useState } from "react";
import Anchor from "../components/Anchor";
import Button from "../components/Button";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects =
    dataOwner === "dvoskin" ? dataDvoskinProjects : dataRovalettiProjects;

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; 
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      name="projects"
      className="flex flex-col w-full items-center py-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-4/5 items-center">
        <h1 className="mb-12 text-3xl font-semibold text-myacc dark:text-myaccd md:text-5xl">PROJECTS</h1>
        {dataProjects.map((project, index) => {
          return (
            /* Project Item with Laptop Image */
            <div
              key={index}
              className="flex mb-12 items-center"
            >
              <div className="w-1/3">
                <img
                  className="w-full h-auto"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="w-2/3 ml-8">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm font-sans mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.deploy && <Anchor href={project.deploy} text="DEPLOY" />}
                  {project.repository && <Anchor href={project.repository} text="REPOSITORY" />}
                  <Button text="TECHNOLOGIES" onClickHandler={() => openProjectDetail(project)} />
                </div>
              </div>
            </div>
          );
        })}
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeProjectDetail} />
        )}
      </div>
    </section>
  );
};

export default Projects;
