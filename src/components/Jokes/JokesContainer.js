import { connect } from "react-redux";

import Jokes from "./Jokes";

import { asyncFetchJokes, selectJoke } from "../../state/actions";
import { getFilteredJokesSelector } from "../../state/selectors";

const mapStateToProps = (state) => {
  return {
    jokes: getFilteredJokesSelector(state),
    isLoading: state.isLoadingJokes,
    selectedJokeIndex: state.selectedJokeIndex,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchJokes: () => dispatch(asyncFetchJokes()),
  onSelectJoke: (index) => dispatch(selectJoke(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
