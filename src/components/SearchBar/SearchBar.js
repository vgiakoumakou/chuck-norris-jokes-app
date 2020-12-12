import React from "react";

import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="SearchBar">
      <h1 className="SearchBar__Title">The Joke Bible</h1>
      <h2 className="SearchBar__SubTitle">Daily Laughs for you and yours</h2>
      <input
        className="SearchBar__Input"
        placeholder="How can we make you laugh today?"
      />
    </div>
  );
}

export default SearchBar;
