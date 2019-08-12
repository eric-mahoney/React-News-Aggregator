import React from "react";
import News from "./News";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <span className="stripe" />
        <h1>React News App</h1>
        <h2>
          <i>
            News articles via{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://newsapi.org/"
            >
              News API
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bbc.co.uk/"
            >
              BBC
            </a>
          </i>
        </h2>
      </div>
      <News />
      <Footer />
    </div>
  );
}

export default App;
