const initialState = {
  // The joke categories
  categories: [],
  // The jokes
  jokes: [],
  // The selected joke category
  selectedCategory: "",
};

function rootReducer(state = initialState, action) {
  return state;
}

export default rootReducer;
