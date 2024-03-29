import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoC from "../../assets/images/C.png";
import LogoSubtitle from "../../assets/images/Chase.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className={"logo"} to="/home">
        <img src={LogoC} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "home-link active" : "home-link"
          }
          to="/home"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "about-link active" : "about-link"
          }
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "projects-link active" : "projects-link"
          }
          to="/projects"
        >
          <FontAwesomeIcon icon={faStackOverflow} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={(navData) =>
            navData.isActive ? "contact-link active" : "contact-link"
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="social-links">
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
