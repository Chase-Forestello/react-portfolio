import "./Contact.scss";
import Loader from "react-loaders";
import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    let emailSuccess = document.querySelector(".emailSuccess");

    emailjs
      .sendForm(
        "service_gs2jypn",
        "template_jfoml1m",
        refForm.current,
        "XiYOBqsj5R6tNgQ-I"
      )
      .then(
        () => {
          if (emailSuccess) {
            emailSuccess.classList.toggle("emailToggle");
          }
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        },
        () => {
          if (emailSuccess) {
            emailSuccess.innerText =
              "Failed to send message. Please try again.";
            emailSuccess.classList.toggle("emailToggle");
          }
        }
      );
    e.preventDefault();
    // to stop page refresh (check if this works. Replace with 404 redirect solution)
  };

  if (document.querySelector(".home-link")) {
    let homeLink = document.querySelector(".home-link");
    // console.log(homeLink);
    homeLink.classList.remove("active");
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm currently employed as a Developer,
            <br />
            but I'm also interested in small freelance opportunites. <br />
            Contact me using the form below!
          </p>
          <p className="emailSuccess emailToggle">Message sent, thank you!</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </>
  );
};

export default Contact;
