import React from "react";

import "./SearchBar.scss";

function SearchBar(props) {
  // Destruct props
  const { onFetchJokes } = props;

  return (
    <div className="SearchBar">
      <h1 className="SearchBar__Title">The Joke Bible</h1>
      <h2 className="SearchBar__SubTitle">Daily Laughs for you and yours</h2>
      <input
        className="SearchBar__Input"
        placeholder="How can we make you laugh today?"
        onChange={(e) => {
          // If the search input becomes empty, get all the jokes
          if (e.target.value.length === 0) {
            onFetchJokes("all");
          }
          // The API does a search for strings with >=3 characters
          if (e.target.value.length >= 3) {
            onFetchJokes(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
