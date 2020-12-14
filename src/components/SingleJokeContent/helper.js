const labels = {
  chestnut: {
    text: "CHESTNUT",
    class: "chestnut",
  },
  new: {
    text: "NEW IN TOWN",
    class: "new-in-town",
  },
  trending: {
    text: "TRENDING",
    class: "trending",
  },
  hallOfFame: {
    text: "HALL OF FAME",
    class: "hall-of-fame",
  },
};

/**
 * Get the joke's label based on its likes
 */
export const getJokeLabel = (joke) => {
  const { likes, dislikes } = joke;

  if (dislikes > likes) {
    return labels.chestnut;
  }

  if (likes <= 50) {
    return labels.new;
  } else if (likes > 50 && likes <= 100) {
    return labels.trending;
  } else {
    return labels.hallOfFame;
  }
};
