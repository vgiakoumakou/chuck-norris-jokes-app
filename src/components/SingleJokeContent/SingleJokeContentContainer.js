import { connect } from "react-redux";

import SingleJokeContent from "./SingleJokeContent";

import {
  addLike,
  addDislike,
  selectJoke,
  deselectCategory,
  changeSearchTerm,
} from "../../state/actions";
import {
  getSelectedJokeSelector,
  getTopJokes,
  getFilteredJokesIndexes,
} from "../../state/selectors";

const mapStateToProps = (state) => {
  return {
    joke: getSelectedJokeSelector(state),
    filteredJokesIndexes: getFilteredJokesIndexes(state),
    topJokes: getTopJokes(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddLike: (index) => dispatch(addLike(index)),
  onAddDislike: (index) => dispatch(addDislike(index)),
  onSelectJoke: (index) => dispatch(selectJoke(index)),
  onDeselectCategory: () => dispatch(deselectCategory()),
  onDeselectSearchTerm: () => dispatch(changeSearchTerm("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleJokeContent);
