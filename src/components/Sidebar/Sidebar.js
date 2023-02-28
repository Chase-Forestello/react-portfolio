import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoC from "../../assets/images/C.png";
import LogoSubtitle from "../../assets/images/Chase.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const handleAboutClick = () => {
  let homeLink = document.querySelector("home-link");
  homeLink.classList.toggle("active");
};
// Will need to add an Onclick for each link that is not 'Home'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className={"logo"} to="/react-portfolio/home">
        <img src={LogoC} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "home-link active" : "home-link"
          }
          to="/react-portfolio/home"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "about-link active" : "about-link"
          }
          onClick={handleAboutClick}
          to="/react-portfolio/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "contact-link active" : "contact-link"
          }
          onClick={handleAboutClick}
          to="/react-portfolio/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/chase-forestello/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Chase-Forestello"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
