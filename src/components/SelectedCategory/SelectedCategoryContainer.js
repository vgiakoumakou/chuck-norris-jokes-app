import { connect } from "react-redux";

import SelectedCategory from "./SelectedCategory";

import { deselectCategory } from "../../state/actions";

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeselectCategory: () => dispatch(deselectCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCategory);
