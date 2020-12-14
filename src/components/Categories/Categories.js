import React, { useState, useEffect } from "react";

import ViewMoreButton from "../SharedUIElements/ViewMoreButton/ViewMoreButton";

import "./Categories.scss";

function Categories(props) {
  // Destruct props
  const {
    categories,
    isLoading,
    isLoadingJokes,
    onFetchCategories,
    onSelectCategory,
    onDeselectCategory,
    selectedCategory,
  } = props;
  // Initialize state
  const [isViewAllSelected, setIsViewAllSelected] = useState(false);

  useEffect(() => {
    // Fetch categories from the API
    onFetchCategories();
  }, []);

  // When 'View All' is not clicked yet, display the first 7 categories
  const displayedCategories = isViewAllSelected
    ? categories
    : categories.slice(0, 7);

  // Show loader, while categories are being fetched
  if (isLoading || isLoadingJokes) {
    return null;
  }

  // Returns a category element
  const renderCategory = (name) => {
    const isSelected = name === selectedCategory;
    const selectedClass = isSelected ? "Selected" : "";

    return (
      <div
        key={name}
        className={`Categories__Category ${selectedClass}`}
        onClick={() => {
          if (isSelected) {
            onDeselectCategory();
          } else {
            onSelectCategory(name);
          }
        }}
      >
        {name}
      </div>
    );
  };

  return (
    <div className="Categories">
      {displayedCategories.map((cat) => renderCategory(cat))}
      {isViewAllSelected && renderCategory("uncategorized")}
      {!isViewAllSelected && (
        <ViewMoreButton
          text="All"
          className="Categories__Category"
          onClick={() => setIsViewAllSelected(true)}
        />
      )}
    </div>
  );
}

export default Categories;
