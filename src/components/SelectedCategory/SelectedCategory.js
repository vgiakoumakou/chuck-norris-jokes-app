import React from "react";

import "./SelectedCategory.scss";

function SelectedCategory(props) {
  // Destruct props
  const { selectedCategory, isLoading } = props;

  //Return nothing when there is no category selected
  // or the app is loading the jokes
  if (selectedCategory.length === 0 || isLoading) {
    return null;
  }

  return (
    <div className="SelectedCategory">
      <div className="SelectedCategory__Chip">{selectedCategory}</div>
    </div>
  );
}

export default SelectedCategory;
