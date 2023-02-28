import LogoC from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
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

  useEffect(() => {
    setTimeout(() => {
      let test = document.querySelector(".home-link");
      console.log(test);
      test.classList.add("active");
      return setLetterClass("text-animate-hover");

    }, 4000);
  }, []);


  return (
    <div className="container home-page">
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
        <Link to="/react-portfolio/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
