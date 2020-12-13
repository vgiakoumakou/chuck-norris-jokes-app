import React from "react";
import Categories from "../Categories";
import JokesContainer from "../Jokes";

import "./JokesContent.scss";

function JokesContent() {
  return (
    <div className="JokesContent">
      <Categories />
      <JokesContainer />
    </div>
  );
}

export default JokesContent;
