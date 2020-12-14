import { connect } from "react-redux";

import SearchBar from "./SearchBar";

import { changeSearchTerm, selectJoke } from "../../state/actions";
import { getFilteredJokesSelector } from "../../state/selectors";

const mapStateToProps = (state) => {
  return {
    jokes: getFilteredJokesSelector(state),
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeTerm: (term) => dispatch(changeSearchTerm(term)),
  onSelectJoke: (index) => dispatch(selectJoke(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
