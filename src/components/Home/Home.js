import LogoC from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// Add skills to the right side of home page with a projects link beside "contact me"
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  // could just use split
  const nameArray = ["h", "a", "s", "e"];
  const webDevArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  const skillsArray = ["S", "k", "i", "l", "l", "s"];

  let path = window.location.pathname;
  console.log(path);
  useEffect(() => {
    let test = document.querySelector(".home-link");
    console.log(test);
    test.classList.add("active");
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            <img src={LogoC} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={webDevArray}
              index={22}
            />
          </h1>
          <h2>Front-end Developer</h2>
          <div className="home-buttons">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Link to="/projects" className="flat-button">
              MY PROJECTS
            </Link>
          </div>
        </div>
        <div className="skills-zone">
          <span className="skills-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              index={22}
            />
          </span>
          <div className="skills">
            <br></br>
            <hr className="skills-hr"></hr>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">SCSS</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">Java</span>
            <span className="skill">Spring Boot</span>
            <span className="skill">Hibernate</span>
            <span className="skill">MySQL</span>
            <span className="skill">Database Design</span>
            <span className="skill">OOP</span>
            <span className="skill">SDLC</span>
            <span className="skill">REST API's</span>
            <span className="skill">SPA's</span>
            <span className="skill">TDD</span>
            <span className="skill">Swagger</span>
            <span className="skill">Version Control with Git</span>
            <span className="skill">GitHub</span>
            <span className="skill">GitHub Projects</span>
            <span className="skill">AWS</span>
            <span className="skill">SCRUM</span>
            <span className="skill">Paired Programming</span>
            <span className="skill">Mobile First Development</span>
            <hr className="skills-hr"></hr>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
};

export default Home;
