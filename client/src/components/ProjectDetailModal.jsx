import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-mybg1d bg-opacity-50 flex items-center justify-center z-50">
      <div className="mx-12 bg-mybg1 dark:bg-mybg1d rounded-lg shadow-xl overflow-hidden w-full max-w-3xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-mytext dark:text-mytextd">{project.name}</h2>
            <button
              onClick={onClose}
              className="text-mytext hover:text-myacc dark:text-mytextd dark:hover:text-myaccd focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <hr className="border-t border-mytext dark:border-mytextd mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              className="w-full h-64 object-cover rounded-md"
              src={project.image}
              alt={project.name}
            />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-mytext dark:text-mytextd">Description:</h3>
              <p className="text-sm text-mytext dark:text-mytextd">{project.description}</p>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-mytext dark:text-mytextd">Technologies:</h3>
              <p className="text-sm text-mytext dark:text-mytextd">{project.technologies.join(", ")}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-mytext dark:text-mytextd">Challenges Overcome:</h3>
            <p className="text-sm text-mytext dark:text-mytextd">{project.tasks.join(", ") || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

