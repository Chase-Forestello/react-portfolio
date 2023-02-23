import LogoC from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm&nbsp; 
          <img src={LogoC} alt="developer" />
          hase
          <br />
          web developer
        </h1>
        <h2>Front-end Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
