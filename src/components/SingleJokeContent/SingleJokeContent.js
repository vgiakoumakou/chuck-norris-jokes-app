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
    totalJokes,
    topJokes,
  } = props;

  const renderBackButton = () => {
    return (
      <div
        className="SingleJokeContent__BackBtn"
        onClick={() => {
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
    const isFirstJoke = joke.index === 0;
    const isLastJoke = joke.index === totalJokes - 1;

    return (
      <div className="SingleJokeContent__JokeNav">
        {!isFirstJoke && (
          <div
            className="SingleJokeContent__NavBtn SingleJokeContent__PrevBtn"
            onClick={() => {
              onSelectJoke(joke.index - 1);
            }}
          >
            PREV. JOKE
          </div>
        )}
        {!isLastJoke && (
          <div
            className="SingleJokeContent__NavBtn SingleJokeContent__NextBtn"
            onClick={() => onSelectJoke(joke.index + 1)}
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
