import React, { useState, useEffect } from "react";
import Loader from "../SharedUIElements/Loader";

import "./Categories.scss";

function Categories() {
  // Initialize state
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isViewAllSelected, setIsViewAllSelected] = useState(false);

  // When 'View All' is not clicked yet, display the first 7 categories
  const displayedCategories = isViewAllSelected
    ? categories
    : categories.slice(0, 7);

  useEffect(() => {
    async function fetchData() {
      // Fetch the joke categories from the API
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const data = await response.json();
      // Update state
      setCategories(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Show loader, while categories are being fetched
  if (loading) {
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
