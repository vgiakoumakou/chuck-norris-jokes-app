/**
 * Returns the normalized jokes array that includes
 * only the needed information in a proper format.
 * @param [] jokes
 */
export const normalizeJokes = (jokes = []) => {
  const normalizedJokes = jokes.map((joke, index) => {
    const category = joke.categories[0] ? joke.categories[0] : "uncategorized";

    return {
      id: joke.id,
      category: category,
      value: joke.value,
      index: index,
      likes: 0,
      dislikes: 0,
    };
  });

  return normalizedJokes;
};
