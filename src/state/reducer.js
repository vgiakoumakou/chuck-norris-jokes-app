import * as Types from "./types";

const initialState = {
  // The joke categories
  categories: [],
  // The jokes
  jokes: [],
  // True if the app is loading while fetching data from the API
  isLoading: false,
  // The selected joke category
  selectedCategory: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ASYNC_FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ASYNC_FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isLoading: false,
      };
    case Types.ASYNC_FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case Types.ASYNC_FETCH_JOKES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ASYNC_FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokes: action.jokes,
        isLoading: false,
      };
    case Types.ASYNC_FETCH_JOKES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
