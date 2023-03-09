import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const projects = {
  GameFace: {
    Title: "GameFace",
    Description: `GameFace is a single-page application social media platform that
 allows gamers to connect with other gamers in order to enhance their
 gaming experience. This project uses HTML, CSS (Bootstrap), and a
 small scale SPA JavaScript framework to deliver the front-end. The
 back-end was built in Java using Spring Boot and is served using
 Amazon RDS, and Amazon S3. The relational database consists of
 various datasets to track user activity and implements some custom
 SQL queries which are all served through a robust REST API.
 Utilizing Google authentication, GameFace users are able to create
 and personalize their profile based on platform of choice,
 gamertags, and favorite games through the RAWG API. Additionally,
 GameFace users connect with posts, likes, comments, and highlights
 which are served by the Filestack API. GameFace gives users the
 ability to find gaming partners based on games played, region,
 skill, and play style. Ultimately, GameFace is a networking solution
 that allows users to connect and grow as gamers in a safe and
 inclusive environment.`,
    GitHub: `https://github.com/GameFaceProductions/GameFace`,
    Demo: `https://game-face.io/" target="_blank`,
  },

  Project2: {
    Title: "Hangry",
    Description: `[In Development] Hangry is a solo-project SPA that serves as a magic
        8-ball for users to find a place to eat based on the entered
        location. The front-end is built with React, CSS, and some
        Bootstrap. The back-end is built on Spring Boot and is served using
        AWS and the Yelp Fusion API.`,
    GitHub: `https://github.com/HangryDevelopment`,
    Demo: `na`,
  },
};
// not the right way, need array of objects...
console.log(projects);
// console.log([projects.GameFace.Demo].toString());

const handleModalClick = () => {
  let project = document.querySelector(".project");
  console.log(project);
};
const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  if (document.querySelector(".home-link")) {
    let homeLink = document.querySelector(".home-link");
    // console.log(homeLink);
    homeLink.classList.remove("active");
  }

  // Will need to add for each page that is not 'Home'
  return (
    <>
      <div className="skills-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
              index={10}
            ></AnimatedLetters>
          </h1>
          <div className="project-container container-fluid text-center">
            <div className="row g-5">
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.GameFace} />
                <ProjectCard project={projects.Project2} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.Project2} />
                <ProjectCard project={projects.Project2} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.Project2} />
                <ProjectCard project={projects.Project2} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.Project2} />
                <ProjectCard project={projects.Project2} />
              </div>
            </div>
            {/* <div className="project-cards">
              <div className="card"></div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade text-center"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-center w-100"
                  id="exampleModalLabel"
                ></h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer text-center w-100">
                <a
                  href="https://github.com/GameFaceProductions/GameFace"
                  target="_blank"
                ><FontAwesomeIcon title="GameFace" icon={faGithub} color="#000"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
};

export default Projects;
