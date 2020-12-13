import React, { useState, useEffect } from "react";
import Loader from "../SharedUIElements/Loader";

import "./Categories.scss";

function Categories(props) {
  // Destructuring props
  const { categories, isLoading, onFetchCategories } = props;
  // Initialize state
  const [isViewAllSelected, setIsViewAllSelected] = useState(false);

  useEffect(() => {
    onFetchCategories();
  }, []);

  // When 'View All' is not clicked yet, display the first 7 categories
  const displayedCategories = isViewAllSelected
    ? categories
    : categories.slice(0, 7);

  // Show loader, while categories are being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Returns a category element
  const renderCategory = (name) => {
    return (
      <div key={name} className="Categories__Category" onClick={() => {}}>
        {name}
      </div>
    );
  };

  return (
    <div className="Categories">
      {displayedCategories.map((cat) => renderCategory(cat))}
      {!isViewAllSelected && (
        <div
          className="Categories__Category Categories__ViewAll"
          onClick={() => setIsViewAllSelected(true)}
        >
          View All
        </div>
      )}
    </div>
  );
}

export default Categories;
