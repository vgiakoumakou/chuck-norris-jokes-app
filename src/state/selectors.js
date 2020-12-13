/**
 * Returns the jokes array after applying any needed filtering to it,
 * such as the selected joke category.
 */
export const getFilteredJokesSelector = (state) => {
  if (state.selectedCategory.length > 0) {
    // Group jokes by category
    const groupedJokes = state.jokes.reduce((acc, curr) => {
      //If this category wasn't previously stored
      if (!acc[curr.category]) {
        acc[curr.category] = [];
      }
      acc[curr.category].push(curr);
      return acc;
    }, []);

    // Return the group of jokes that belong to the selected category
    return groupedJokes[state.selectedCategory]
      ? groupedJokes[state.selectedCategory]
      : [];
  }

  return state.jokes;
};
