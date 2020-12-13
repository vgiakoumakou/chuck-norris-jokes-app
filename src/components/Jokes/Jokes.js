import React, { useState, useEffect } from "react";
import Loader from "../SharedUIElements/Loader";
import ViewMoreButton from "../SharedUIElements/ViewMoreButton";

import thunderIcon from "../../assets/icons/thunder-icon.svg";
import arrowIcon from "../../assets/icons/arrow-right-beige-icon.svg";

import "./Jokes.scss";

function Jokes(props) {
  // Destruct props
  const { jokes, isLoading, onFetchJokes } = props;
  // Initialize state
  const [displayedJokes, setDisplayedJokes] = useState([]);
  // Set the amount of jokes to be added when the View More button is clicked
  const jokesAmountToAdd = 6;
  // Set whether the View More button should be displayed or not
  const shouldDisplayViewMore = displayedJokes < jokes;

  useEffect(() => {
    setDisplayedJokes(jokes.slice(0, 6));
  }, [jokes]);

  useEffect(() => {
    // Fetch jokes from the API
    onFetchJokes();
  }, []);

  // Show loader, while categories are being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Add more displayed jokes when the View More button is clicked
  const addMoreJokes = () => {
    const newJokes = [
      ...displayedJokes,
      ...jokes.slice(
        displayedJokes.length,
        displayedJokes.length + jokesAmountToAdd
      ),
    ];
    setDisplayedJokes(newJokes);
  };

  const renderJokeCard = (joke) => {
    return (
      <div className="Jokes__JokeCard">
        <div>
          <h6 className="Jokes__JokeCardTitle">
            <img
              className="Jokes__JokeCardIcon"
              src={thunderIcon}
              alt="Thunder"
            />
            {joke.category}
          </h6>
          <p className="Jokes__JokeCardValue">{joke.value}</p>
        </div>
        <div className="Jokes__JokeCardLink">
          <span className="Jokes__JokeCardLink__Text">SEE STATS</span>
          <img src={arrowIcon} alt="Arrow Right" />
        </div>
      </div>
    );
  };

  return (
    <div className="Jokes">
      <div className="Jokes__List">
        {displayedJokes.map((joke) => renderJokeCard(joke))}
      </div>
      {shouldDisplayViewMore && (
        <div className="Jokes__ViewButtonContainer">
          <ViewMoreButton
            className="Jokes__ViewButton"
            onClick={() => addMoreJokes()}
          />
        </div>
      )}
    </div>
  );
}

export default Jokes;
