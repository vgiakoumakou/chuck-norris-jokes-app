import { connect } from "react-redux";

import Categories from "./Categories";

import {
  asyncFetchCategories,
  selectCategory,
  deselectCategory,
} from "../../state/actions";

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    isLoading: state.isLoadingCategories,
    isLoadingJokes: state.isLoadingJokes,
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCategories: () => dispatch(asyncFetchCategories()),
  onSelectCategory: (name) => dispatch(selectCategory(name)),
  onDeselectCategory: () => dispatch(deselectCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
