import React from "react";

import "./SelectedCategory.scss";

function SelectedCategory(props) {
  // Destruct props
  const { selectedCategory, onDeselectCategory } = props;

  //Return nothing when there is no category selected
  if (selectedCategory.length === 0) {
    return null;
  }

  return (
    <div className="SelectedCategory">
      <div
        className="SelectedCategory__Chip"
        onClick={() => onDeselectCategory()}
      >
        {selectedCategory}
      </div>
    </div>
  );
}

export default SelectedCategory;
