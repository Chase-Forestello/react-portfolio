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
        <Link to="/react-portfolio/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <div id="projectContainer" className="row">
        <div className="projectCard col-lg-5">
          <h2>GameFace</h2>
          <p>
            GameFace is a single-page application social media platform that
            allows gamers to connect with other gamers in order to enhance their
            gaming experience. GameFace users are able to create and personalize
            their profile based on platform of choice, gamertags, and favorite
            games. Additionally, GameFace users connect with posts, likes,
            comments, and highlights. GameFace gives users the ability to find
            gaming partners based on games played, region, skill, and play
            style. Ultimately, GameFace is a networking solution that allows
            users to connect and grow as gamers in a safe and inclusive
            environment.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/GameFaceProductions/GameFace"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
                <div className="demoDiv">
                  <a title="Demo" href="https://game-face.io/" target="_blank">
                    <i className="fas projectLink fa-play"></i>
                  </a>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>CRUD</li>
              <li>Spring Boot</li>
              <li>Amazon RDS</li>
              <li>Filestack API</li>
              <li>RAWG API</li>
              <li>Google Authentication</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>Weather Map</h2>
          <p>
            An interactive paired-programming web application with geolocation,
            geocoding, and the OpenWeather Weather API. This project utilizes
            the OpenWeather API, JavaScript, and HTML to allow users to enter
            any location based on name, address, coordinates, or direct marker
            selection and receive back a 5 day weather forecast for that area. A
            marker is dropped which behaves dynamically allowing the user to
            drag to new locations.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Chase-Forestello/ryan-chase-weathermap"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
                <div className="demoDiv">
                  <a
                    title="Demo"
                    href="https://chase-forestello.github.io/weathermap/"
                    target="_blank"
                  >
                    <i className="fas projectLink fa-play"></i>
                  </a>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>OpenWeather API</li>
              <li>Geocoding</li>
              <li>Geolocation</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>
            Movie Search Engine
            <br />
            [React.js Refactor]
          </h2>
          <p>
            This project is a refactor of "Move Search Engine" using React, but
            does not include CRUD or a backend. This single page application
            allows user to search for movies by name and returns a poster,
            rating, overview, and release date.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Chase-Forestello/movie-app"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
                <div className="demoDiv">
                  <a
                    title="Demo"
                    href="https://chase-forestello.github.io/movie-app/"
                    target="_blank"
                  >
                    <i className="fas projectLink fa-play"></i>
                  </a>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>The Movie Database API</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>Movie Search Engine</h2>
          <p>
            A paired-programming single-page application with CRUD
            functionality. This project allows users to search for movies by
            name and returns a card with the movie poster, title, director,
            genres, and plot summary. Through HTML and JavaScript DOM
            manipulation, users can add, edit, or delete movies from the
            collection through various modal prompts. The search engine makes
            use of The Movie Database API (TMDB) and Glitch to serve the
            backend.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Shaquielle-Chase-MovieOrg/movies-shaquielle-chase"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>CRUD</li>
              <li>The Movie Database API</li>
              <li>Glitch</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>Café Salastello</h2>
          <p>
            A paired-programming web application with basic in memory CRUD
            functionality. This project consists of a coffee website built with
            HTML that serves as a filing cabinet for various roasts of coffee.
            Through features implementing JavaScript DOM manipulation, users can
            search for, add or remove coffees, and also provide descriptions for
            those coffees.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Chase-Forestello/coffee-chase-darien"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
                <div className="demoDiv">
                  <a
                    title="Demo"
                    href="https://chase-forestello.github.io/cafe-salastello/"
                    target="_blank"
                  >
                    <i className="fas projectLink fa-play"></i>
                  </a>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>In-memory CRUD</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>Console Adventure Game</h2>
          <p>
            Simple console based Java adventure game. This solo project allows a
            user to create a fantasy character and embark on a
            choose-your-own-adventure game built solely with Java.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Chase-Forestello/codeup-java-exercises/tree/main/src/rpg_console_game"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div className="projectCard col-lg-5">
          <h2>Konami Code</h2>
          <p>
            A simple, fun, and interactive Konami code experience utilizing
            HTML, CSS, and JavaScript.
          </p>
          <div className="buttons">
            <div className="bottom-section">
              <div className="social-media projectLinks">
                <a
                  title="GitHub"
                  href="https://github.com/Chase-Forestello/konami"
                  target="_blank"
                >
                  <i className="fab projectLink fa-github"></i>
                </a>
                <div className="demoDiv">
                  <a
                    title="Demo"
                    href="https://chase-forestello.github.io/konami/"
                    target="_blank"
                  >
                    <i className="fas projectLink fa-play"></i>
                  </a>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h6>Tools Used</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
            </ul>
          </div>
      </div>
        </div> */}
    </div>
  );
};

export default Home;
