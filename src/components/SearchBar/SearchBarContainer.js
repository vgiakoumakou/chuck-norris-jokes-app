import { connect } from "react-redux";

import SearchBar from "./SearchBar";

import { asyncFetchJokes } from "../../state/actions";

const mapDispatchToProps = (dispatch) => ({
  onFetchJokes: (term) => dispatch(asyncFetchJokes(term)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
