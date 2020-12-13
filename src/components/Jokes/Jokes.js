import React, { useEffect } from "react";
import Loader from "../SharedUIElements/Loader";

import thunderIcon from "../../assets/icons/thunder-icon.svg";
import arrowIcon from "../../assets/icons/arrow-right-beige-icon.svg";

import "./Jokes.scss";

function Jokes(props) {
  // Destruct props
  const { jokes, isLoading, onFetchJokes } = props;

  useEffect(() => {
    // Fetch jokes from the API
    onFetchJokes();
  }, []);

  // Show loader, while categories are being fetched
  if (isLoading) {
    return <Loader />;
  }

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
    <div className="Jokes">{jokes.map((joke) => renderJokeCard(joke))}</div>
  );
}

export default Jokes;
