import React from "react";
import Categories from "../Categories";
import JokesContainer from "../Jokes";
import SelectedCategoryContainer from "../SelectedCategory";

import "./JokesContent.scss";

function JokesContent() {
  return (
    <div className="JokesContent">
      <Categories />
      <SelectedCategoryContainer />
      <JokesContainer />
    </div>
  );
}

export default JokesContent;
