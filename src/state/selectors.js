/**
 * Returns the jokes array after applying any needed filtering to it,
 * such as the selected joke category.
 */
export const getFilteredJokesSelector = (state) => {
  let newJokes = state.jokes;
  // Filter jokes by the selected category
  if (state.selectedCategory.length > 0) {
    newJokes = newJokes.filter(
      (joke) => joke.category === state.selectedCategory
    );
  }

  // Filter jokes by the search term
  if (state.searchTerm.length > 0) {
    newJokes = newJokes.filter(
      (joke) => joke.value.search(new RegExp(state.searchTerm, "i")) > 0
    );
  }

  return newJokes;
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

  // Filter out jokes with more dislikes
  newJokes = newJokes.filter((joke) => joke.likes >= joke.dislikes);

  // Sort by likes
  newJokes = newJokes.sort(function (a, b) {
    return b.likes - a.likes;
  });

  return newJokes.slice(0, 10);
};
