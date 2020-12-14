import React from "react";
import { withRouter } from "react-router-dom";

import { getJokeLabel } from "./helper";
import arrowLeft from "../../assets/icons/arrow-left.svg";

import "./SingleJokeContent.scss";

function SingleJokeContent(props) {
  // Destruct props
  const {
    joke,
    history,
    onAddLike,
    onAddDislike,
    onSelectJoke,
    topJokes,
    filteredJokesIndexes,
    onDeselectCategory,
    onDeselectSearchTerm,
  } = props;

  const renderBackButton = () => {
    return (
      <div
        className="SingleJokeContent__BackBtn"
        onClick={() => {
          if (filteredJokesIndexes.length === 1) {
            onDeselectCategory();
            onDeselectSearchTerm();
          }
          history.push("/");
        }}
      >
        <img
          className="SingleJokeContent__BackBtn--Img"
          src={arrowLeft}
          alt="Back Icon"
        />
      </div>
    );
  };

  const renderJokeCard = () => {
    // Ge the data for the joke's label
    const labelData = getJokeLabel(joke);

    return (
      <div className="SingleJokeContent__JokeCard">
        <div className="SingleJokeContent__JokeCardTop">
          <div className="SingleJokeContent__Category">{joke.category}</div>
          <div
            className={`SingleJokeContent__Label SingleJokeContent__Label--${labelData.class}`}
          >
            <ul>
              <li>{labelData.text}</li>
            </ul>
          </div>
        </div>
        <div className="SingleJokeContent__Value">{joke.value}</div>
      </div>
    );
  };

  const renderReactionButtons = () => {
    return (
      <div className="SingleJokeContent__ReactionBtns">
        <div className="SingleJokeContent__ReactionBtn--Container">
          <div
            className="SingleJokeContent__ReactionBtn SingleJokeContent__ReactionBtn--Like"
            onClick={() => onAddLike(joke.index)}
          ></div>
          <span className="SingleJokeContent__ReactionBtn--LikeCounter">
            {joke.likes}
          </span>
        </div>
        <div className="SingleJokeContent__ReactionBtn--Container">
          <div
            className="SingleJokeContent__ReactionBtn SingleJokeContent__ReactionBtn--Dislike"
            onClick={() => {
              onAddDislike(joke.index);
            }}
          ></div>
          <span className="SingleJokeContent__ReactionBtn--DislikeCounter">
            {joke.dislikes}
          </span>
        </div>
      </div>
    );
  };

  const renderNavButtons = () => {
    // Get the index of the current joke in the filtered jokes
    const jokeIndex = filteredJokesIndexes.indexOf(joke.index);
    const isFirstJoke = jokeIndex === 0;
    const isLastJoke = jokeIndex === filteredJokesIndexes.length - 1;
    const isTheOnlyJoke = filteredJokesIndexes.length === 0;
    // Get whether the nav buttons can be displayed or not
    const showPrevBtn = !isFirstJoke && !isTheOnlyJoke;
    const showNextBtn = !isLastJoke && !isTheOnlyJoke;

    return (
      <div className="SingleJokeContent__JokeNav">
        {showPrevBtn && (
          <div
            className="SingleJokeContent__NavBtn SingleJokeContent__PrevBtn"
            onClick={() => {
              onSelectJoke(filteredJokesIndexes[jokeIndex - 1]);
            }}
          >
            PREV. JOKE
          </div>
        )}
        {showNextBtn && (
          <div
            className="SingleJokeContent__NavBtn SingleJokeContent__NextBtn"
            onClick={() => onSelectJoke(filteredJokesIndexes[jokeIndex + 1])}
          >
            NEXT JOKE
          </div>
        )}
      </div>
    );
  };

  const renderTopJokes = () => {
    return (
      <div className="SingleJokeContent__Chart">
        <h6 className="SingleJokeContent__ChartTitle">
          THE TOP 10 JOKES THIS WEEK
        </h6>
        {topJokes.map((jk) => (
          <div
            key={jk.index}
            className="SingleJokeContent__ChartJoke"
            onClick={() => onSelectJoke(jk.index)}
          >
            {jk.value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="SingleJokeContent">
      {renderBackButton()}
      <div className="SingleJokeContent__Main">
        <div className="SingleJokeContent__JokeSection">
          {renderJokeCard()}
          <div className="SingleJokeContent__JokeActions">
            {renderReactionButtons()}
            {renderNavButtons()}
          </div>
        </div>
        {renderTopJokes()}
      </div>
    </div>
  );
}

export default withRouter(SingleJokeContent);
