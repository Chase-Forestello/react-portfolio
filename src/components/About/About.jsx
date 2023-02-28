import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

const About = () => {
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
