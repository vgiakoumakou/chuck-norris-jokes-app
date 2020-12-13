import { connect } from "react-redux";

import Categories from "./Categories";

import { asyncFetchCategories, selectCategory } from "../../state/actions";

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    isLoading: state.isLoadingCategories,
    isLoadingJokes: state.isLoadingJokes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCategories: () => dispatch(asyncFetchCategories()),
  onSelectCategory: (name) => dispatch(selectCategory(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
