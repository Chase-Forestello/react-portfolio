import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  if (document.querySelector(".home-link")) {
    let homeLink = document.querySelector(".home-link");
    console.log(homeLink);
    homeLink.classList.remove("active");
  }

  // Will need to add for each page that is not 'Home'
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              index={15}
            ></AnimatedLetters>
          </h1>
          <p>
            Dedicated to writing clean code that delivers seamless, intuitive,
            secure, and efficient experiences. I'm highly adaptable and can
            quickly find solutions with the tools and skills I have.
            Organization and structure are my primary focuses.
          </p>
          <p>
            I'm quietly condifident, naturally curious, and always working to
            improve my skills and problem solving abilities.
          </p>
          <p>
            In my spare time I'm a gamer, bogey golfer, and avid enthusiast of
            all things science.
          </p>
          <Link to="/react-portfolio/projects" className="flat-button">
            MY PROJECTS
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
              ></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#5382a1"></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#EC4D28"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
};

export default About;
