import { connect } from "react-redux";

import Jokes from "./Jokes";

import { asyncFetchJokes } from "../../state/actions";
import { getFilteredJokesSelector } from "../../state/selectors";

const mapStateToProps = (state) => {
  return {
    jokes: getFilteredJokesSelector(state),
    isLoading: state.isLoadingJokes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchJokes: () => dispatch(asyncFetchJokes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
