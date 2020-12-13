import { connect } from "react-redux";

import Jokes from "./Jokes";

import { asyncFetchJokes } from "../../state/actions";

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchJokes: () => dispatch(asyncFetchJokes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
