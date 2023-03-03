import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import "./About.scss";

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
          secure, and efficient experiences. I am highly adaptable and can
          quickly find solutions with the tools and skills I have. Organization
          and structure are my primary focuses.
        </p>
        <p>
          I'm quietly condifident, naturally curious, and always working to
          improve my skills and problem solving abilities.
        </p>
        <p>
          In my spare time I'm a gamer, bogey golfer, and avid enthusiast of all
          things science.
        </p>
      </div>
    </div>
  );
};

export default About;
