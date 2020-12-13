import { connect } from "react-redux";

import Categories from "./Categories";

import { asyncFetchCategories } from "../../state/actions";

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCategories: () => dispatch(asyncFetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
