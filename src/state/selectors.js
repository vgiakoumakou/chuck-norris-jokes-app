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

/**
 * Returns the object of the selected joke
 */
export const getSelectedJokeSelector = (state) => {
  return state.jokes[state.selectedJokeIndex] || {};
};

/**
 * Returns the total number of jokes
 */
export const getTotalJokes = (state) => {
  return state.jokes.length;
};

/**
 * Returns the top jokes
 */
export const getTopJokes = (state) => {
  let newJokes = state.jokes;

  // Filter out jokes with more dislikes and with no likes
  newJokes = newJokes.filter(
    (joke) => joke.likes > joke.dislikes && joke.likes > 0
  );

  // Sort by likes
  newJokes = newJokes.sort(function (a, b) {
    return b.likes - a.likes;
  });

  return newJokes.slice(0, 10);
};
