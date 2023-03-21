import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

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
    Demo: "https://game-face.io/",
    // Background: "../../assets/images/gameface.jpg",
    image: "gameface",
    Tools:
      "HTML,CSS,Bootstrap,JavaScript,Java,CRUD,Spring Boot,Amazon RDS,Filestack API,RAWG API,Google Authentication",
  },

  Hangry: {
    Title: "Hangry",
    Description: `[In Development] Hangry is a solo-project SPA that serves as a magic
        8-ball for users to find a place to eat based on the entered
        location. The front-end is built with React, CSS, and some
        Bootstrap. The back-end is built on Spring Boot and is served using
        AWS and the Yelp Fusion API.`,
    GitHub: `https://github.com/HangryDevelopment`,
    Demo: "https://hangrydevelopment.github.io/HangryFrontend/",
    // Background: "../../assets/images/hangry.jpg",
    image: "hangry",
    Tools:
      "HTML,CSS,Bootstrap,JavaScript,React,Java,Spring Boot,Yelp Fusion API,Geocoding,Geolocation",
  },
  WeatherMap: {
    Title: "Weather Map",
    Description: `An interactive paired-programming web application with geolocation, geocoding, and the OpenWeather Weather API. This project utilizes the OpenWeather API, JavaScript, and HTML to allow users to enter any location based on name, address, coordinates, or direct marker selection and receive back a 5 day weather forecast for that area. A marker is dropped which behaves dynamically allowing the user to drag to new locations.`,
    GitHub: `https://github.com/Chase-Forestello/ryan-chase-weathermap`,
    Demo: "https://chase-forestello.github.io/weathermap/",
    // Background: "../../assets/images/hangry.jpg",
    image: "weathermap",
    Tools:
      "HTML,CSS,Bootstrap,JavaScript,OpenWeather API,Geocoding,Geolocation",
  },
  MovieSearchRF: {
    Title: "Movie Search Engine[React Refactor]",
    Description: `This project is a refactor of "Move Search Engine" using React, but does not include CRUD or a backend. This single page application allows user to search for movies by name and returns a poster, rating, overview, and release date.`,
    GitHub: `https://github.com/Chase-Forestello/movie-app`,
    Demo: "https://chase-forestello.github.io/movie-app/",
    // Background: "../../assets/images/hangry.jpg",
    image: "moviesearch",
    Tools: "HTML,CSS,Bootstrap,JavaScript,React,The Movie Database API",
  },
  MovieSearch: {
    Title: "Movie Search Engine",
    Description: `A paired-programming single-page application with CRUD functionality. This project allows users to search for movies by name and returns a card with the movie poster, title, director, genres, and plot summary. Through HTML and JavaScript DOM manipulation, users can add, edit, or delete movies from the collection through various modal prompts. The search engine makes use of The Movie Database API (TMDB) and Glitch to serve the back-end.`,
    GitHub: `https://github.com/Shaquielle-Chase-MovieOrg/movies-shaquielle-chase`,
    Demo: undefined,
    Background: "../../assets/images/hangry.jpg",
    image: "moviesearch",
    Tools: "HTML,CSS,Bootstrap,JavaScript,CRUD,The Movie Database API,Glitch",
  },
  CafeSalastello: {
    Title: "Café Salastello",
    Description: `A paired-programming web application with basic in memory CRUD functionality. This project consists of a coffee website built with HTML that serves as a filing cabinet for various roasts of coffee. Through features implementing JavaScript DOM manipulation, users can search for, add or remove coffees, and also provide descriptions for those coffees.`,
    GitHub: `https://github.com/Chase-Forestello/coffee-chase-darien`,
    Demo: "https://chase-forestello.github.io/cafe-salastello/",
    Background: "../../assets/images/hangry.jpg",
    image: "coffee",
    Tools: "HTML,CSS,Bootstrap,JavaScript,In-memory CRUD",
  },
  ConsoleAdventure: {
    Title: "Console Adventure Game",
    Description: `Simple console based Java adventure game. This solo project allows a user to create a fantasy character and embark on a text based choose-your-own-adventure game built solely with Java.`,
    GitHub: `https://github.com/Chase-Forestello/codeup-java-exercises/tree/main/src/rpg_console_game`,
    Demo: undefined,
    // Background: "../../assets/images/hangry.jpg",
    image: "consoleadv",
    Tools: "Java",
  },
  Konami: {
    Title: "Konami Code",
    Description: `A simple, fun, and interactive Konami code experience utilizing HTML, CSS, and JavaScript.`,
    GitHub: `https://github.com/Chase-Forestello/konami`,
    Demo: "https://chase-forestello.github.io/konami/",
    // Background: "../../assets/images/hangry.jpg",
    image: "konami",
    Tools: "HTML,CSS,Bootstrap,JavaScript",
  },
};
// not the right way, need array of objects...
console.log(projects);
// console.log([projects.GameFace.Demo].undefined());

// const handleModalClick = () => {
//   let project = document.querySelector(".project");
//   console.log(project);
// };
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
                <ProjectCard project={projects.Hangry} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.WeatherMap} />
                <ProjectCard project={projects.MovieSearchRF} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.MovieSearch} />
                <ProjectCard project={projects.CafeSalastello} />
              </div>
              <div className="project-cards col-md-6 col-sm-12">
                <ProjectCard project={projects.ConsoleAdventure} />
                <ProjectCard project={projects.Konami} />
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
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
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
                {/* <a
                  href="https://github.com/GameFaceProductions/GameFace"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    title="GameFace"
                    icon={faGithub}
                    color="#000"
                  />
                </a> */}
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
