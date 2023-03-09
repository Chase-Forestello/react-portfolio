import React from "react";
import ReactDOM from "react-dom";

const ProjectCard = ({ project }) => {
//   console.log(project);
const test = project;
  const handleModalClick = (e) => {
    let project = test;
    let modalTitle = document.querySelector(".modal-title");
    console.log(project);
  };
  return (
    <div className="card">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        onClick={handleModalClick}
        className="btn modal-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {project.Title}
      </button>
      <div className="project-des text-wrap">{project.Description}</div>
    </div>
  );
};

export default ProjectCard;
