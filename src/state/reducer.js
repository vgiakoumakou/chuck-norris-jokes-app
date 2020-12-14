import * as Types from "./types";

import { normalizeJokes } from "./normalizers";

const initialState = {
  // The joke categories
  categories: [],
  // The jokes
  jokes: [],
  // True while the app is fetching joke categories from the API
  isLoadingCategories: false,
  // True while the app is fetching jokes from the API
  isLoadingJokes: false,
  // The selected joke category
  selectedCategory: "",
  // The id of the selected joke
  selectedJokeIndex: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ASYNC_FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoadingCategories: true,
      };
    case Types.ASYNC_FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isLoadingCategories: false,
      };
    case Types.ASYNC_FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoadingCategories: false,
      };
    case Types.ASYNC_FETCH_JOKES_REQUEST:
      return {
        ...state,
        isLoadingJokes: true,
      };
    case Types.ASYNC_FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokes: normalizeJokes(action.jokes),
        isLoadingJokes: false,
      };
    case Types.ASYNC_FETCH_JOKES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoadingJokes: false,
      };
    case Types.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };
    case Types.DESELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: "",
      };
    case Types.SELECT_JOKE:
      return {
        ...state,
        selectedJokeIndex: action.index,
      };
    case Types.ADD_LIKE: {
      // Update the likes of the joke
      let newJokes = [...state.jokes];
      newJokes[action.index] = {
        ...newJokes[action.index],
        likes: newJokes[action.index].likes + 1,
      };

      return {
        ...state,
        jokes: newJokes,
      };
    }
    case Types.ADD_DISLIKE: {
      // Update the dislikes of the joke
      let newJokes = [...state.jokes];
      newJokes[action.index] = {
        ...newJokes[action.index],
        dislikes: newJokes[action.index].dislikes + 1,
      };

      return {
        ...state,
        jokes: newJokes,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
