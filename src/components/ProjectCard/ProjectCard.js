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
  };
  return (
    // <div className="card">
    //   <button
    //   className="test-btn"
    //     type="button"
    //   //   onClick={handleModalClick}
    //   //   className="btn modal-btn btn-primary"
    //   //   data-bs-toggle="modal"
    //   //   data-bs-target="#exampleModal"
    //   >
    //     {/* {project.Title} */}
    //   </button>
    //   <img className="project-images" src={require(`../../assets/images/${project.image}.jpg`)}></img>
    //   {/* <!-- Button trigger modal --> */}
    // </div>
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
                  href="https://github.com/Chase-Forestello"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </div>
              <div>
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Chase-Forestello"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </a>
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
