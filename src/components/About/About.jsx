import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

const About = () => {
  let homeLink = document.querySelector(".home-link");
  console.log(homeLink);
  homeLink.classList.remove("active");

  // Will need to add for each page that is not 'Home'
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            index={15}
          ></AnimatedLetters>
        </h1>
      </div>
    </div>
  );
};

export default About;
