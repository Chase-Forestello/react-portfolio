import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
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
    modalfooter.innerText = project.Tools;
  };
  return (
    <div class="card">
      <div class="row">
        <div class="col-md-4">
          <button className="test-button">
            <img
              src={require(`../../assets/images/${project.image}.jpg`)}
              class="img-fluid rounded-start"
              alt={project.image}
            ></img>
          </button>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">{project.Title}</h3>
            <p class="card-text text-wrap">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="project-links">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.GitHub}
                >
                  <FontAwesomeIcon
                  title="GitHub"
                    className="project-link-icons"
                    icon={faGithub}
                    color="#4d4d4e"
                  />
                </a>
              </div>
              <div>
                {/* <button
      className="test-btn"
        type="button"
        onClick={handleModalClick}
        className="btn modal-btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {project.Title}
      </button> */}
                <FontAwesomeIcon
                title="Info"
                  onClick={handleModalClick}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="project-link-icons"
                  icon={faCircleInfo}
                />
              </div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
