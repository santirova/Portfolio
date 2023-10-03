import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-mybg2 dark:bg-mybg2d rounded-md shadow-lg border-2 border-mytext dark:border-white w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <hr className="border-t border-mytext dark:border-white" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Skills:</h3>
          <p className="text-sm text-gray-600 dark:text-white">
            {project.technologies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
