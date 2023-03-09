import React from "react";
import ReactDOM from "react-dom";

const ProjectCard = ({ project }) => {
//   console.log(project);
const test = project;
  const handleModalClick = (e) => {
    let project = test;
    console.log(project);
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerText = project.Title
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerText = project.Description
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
    </div>
  );
};

export default ProjectCard;
