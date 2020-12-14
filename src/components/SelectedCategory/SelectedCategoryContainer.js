import { connect } from "react-redux";

import SelectedCategory from "./SelectedCategory";

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.selectedCategory,
    isLoading: state.isLoadingJokes,
  };
};

export default connect(mapStateToProps, null)(SelectedCategory);
