import React from "react";
import "./App.css";
import codepen from "./codepen.svg";
import github from "./github.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="icon-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/emahoney/"
          >
            <img src={codepen} alt="codepen logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/eric-mahoney"
          >
            <img src={github} alt="github logo" />
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
