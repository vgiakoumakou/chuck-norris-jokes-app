import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import useComponentNotFocusedOut from "../../hooks/useComponentNotFocusedOut";

import "./SearchBar.scss";

function SearchBar(props) {
  // Destruct props
  const {
    onChangeTerm,
    location,
    history,
    onSelectJoke,
    jokes,
    searchTerm,
  } = props;
  // Initialize state
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Call the hook that detects clicks outside of a component
  const {
    ref,
    isComponentNotFocusedOut,
    setIsComponentNotFocusedOut,
  } = useComponentNotFocusedOut(true);

  useEffect(() => {
    // When the input term changes, set the suggestions pop-over
    // as NOT focused out, to enable showing it again
    setIsComponentNotFocusedOut(true);
  }, [searchTerm]);

  const renderSuggestions = () => {
    // Return nothing if we click outside of the suggestions pop-over,
    // since we have intentionally focused out of it
    if (!isComponentNotFocusedOut) {
      return null;
    }

    return (
      <div className="SearchBar__Suggestions" ref={ref}>
        <div className="SearchBar__SuggestionsInner">
          {jokes.map((joke) => (
            <div
              key={joke.index}
              className="SearchBar__Suggestion"
              onClick={() => {
                // Update the selected joke in the store
                onSelectJoke(joke.index);
                // Redirect to the joke's page
                history.push(`/${joke.id}`);
              }}
            >
              {joke.value}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="SearchBar">
      <h1 className="SearchBar__Title">The Joke Bible</h1>
      <h2 className="SearchBar__SubTitle">Daily Laughs for you and yours</h2>
      <div className="SearchBar__InputWrapper" ref={ref}>
        <input
          className="SearchBar__Input"
          placeholder="How can we make you laugh today?"
          value={searchTerm}
          onChange={(e) => {
            // Update the search term in the store
            onChangeTerm(e.target.value);
            // Show search suggestions if we are not in the home page
            if (location.pathname !== "/") {
              setShowSuggestions(true);
            }
          }}
        />
        {showSuggestions && jokes.length > 0 && renderSuggestions()}
      </div>
    </div>
  );
}

export default withRouter(SearchBar);
