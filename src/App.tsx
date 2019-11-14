import React from "react";
import UnderConstruction from "./images/under-construction.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-blue">
      <img className="max-w-md" src={UnderConstruction} alt="Not found" />
      <h2 className="text-2xl text-white font-mono">
        This site is under construction...
      </h2>
      <a
        href="https://sweteeth.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-5 font-sans text-xl underline"
      >
        Read more here
        <i className="ml-4">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </i>
      </a>
    </div>
  );
};

export default App;
