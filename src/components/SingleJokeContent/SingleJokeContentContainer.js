import { connect } from "react-redux";

import SingleJokeContent from "./SingleJokeContent";

import { addLike, addDislike, selectJoke } from "../../state/actions";
import {
  getSelectedJokeSelector,
  getTotalJokes,
  getTopJokes,
} from "../../state/selectors";

const mapStateToProps = (state) => {
  return {
    joke: getSelectedJokeSelector(state),
    totalJokes: getTotalJokes(state),
    topJokes: getTopJokes(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddLike: (index) => dispatch(addLike(index)),
  onAddDislike: (index) => dispatch(addDislike(index)),
  onSelectJoke: (index) => dispatch(selectJoke(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleJokeContent);
