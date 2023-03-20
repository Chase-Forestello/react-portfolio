import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ project }) => {
  //   console.log(project);
  const test = project;
  const handleModalClick = (e) => {
    let project = test;
    console.log(project);
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerText = project.Title;
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerText = project.Description;
    let modalfooter = document.querySelector(".modal-footer");
    if (project.Tools !== undefined) {
      let tools = project.Tools.split(",");
      console.log(tools);
      modalfooter.innerHTML = ``;
      for (let i = 0; i < tools.length; i++) {
        modalfooter.innerHTML += `
        <span class="tool-list">${tools[i]}</span>`;
      }
    }
  };
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <button className="test-button">
            <img
              src={require(`../../assets/images/${project.image}.jpg`)}
              className="img-fluid rounded-start"
              alt={project.image}
            ></img>
          </button>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title text-wrap">{project.Title}</h3>
            <div className="project-links">
              <div>
                <a target="_blank" rel="noreferrer" href={project.GitHub}>
                  <FontAwesomeIcon
                    title="GitHub"
                    className="project-link-icons"
                    icon={faGithub}
                  />
                </a>
              </div>
              <div>
                <FontAwesomeIcon
                  title="Info"
                  onClick={handleModalClick}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="project-link-icons"
                  icon={faCircleInfo}
                />
              </div>
              {project.Demo !== undefined ? (
                <a target="_blank" rel="noreferrer" href={project.Demo}>
                  <FontAwesomeIcon
                    title="Demo"
                    className="project-link-icons"
                    icon={faPlay}
                  />
                </a>
              ) : (
                <div><FontAwesomeIcon
                className="hide"
                icon={faPlay}
              /></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
