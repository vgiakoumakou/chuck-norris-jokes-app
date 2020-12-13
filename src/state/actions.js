import * as Types from "./types";

const API_BASE_URL = "https://api.chucknorris.io/jokes";

/**
 * Fetch joke categories from the API
 */
export const asyncFetchCategoriesRequest = () => {
  return {
    type: Types.ASYNC_FETCH_CATEGORIES_REQUEST,
  };
};

export const asyncFetchCategoriesSuccess = (categories) => {
  return {
    type: Types.ASYNC_FETCH_CATEGORIES_SUCCESS,
    categories,
  };
};

export const asyncFetchCategoriesError = (error) => {
  return {
    type: Types.ASYNC_FETCH_CATEGORIES_ERROR,
    error,
  };
};

export const asyncFetchCategories = () => {
  return async (dispatch) => {
    dispatch(asyncFetchCategoriesRequest());

    return await fetch(`${API_BASE_URL}/categories`)
      .then((response) => response.json())
      .then(
        (data) => dispatch(asyncFetchCategoriesSuccess(data)),
        (err) => {
          alert(err);
          dispatch(asyncFetchCategoriesError(err));
        }
      );
  };
};

/**
 * Fetch jokes from the API
 */
export const asyncFetchJokesRequest = () => {
  return {
    type: Types.ASYNC_FETCH_JOKES_REQUEST,
  };
};

export const asyncFetchJokesSuccess = (jokes) => {
  return {
    type: Types.ASYNC_FETCH_JOKES_SUCCESS,
    jokes,
  };
};

export const asyncFetchJokesError = (error) => {
  return {
    type: Types.ASYNC_FETCH_JOKES_ERROR,
    error,
  };
};

export const asyncFetchJokes = (term = "all") => {
  return async (dispatch) => {
    dispatch(asyncFetchJokesRequest());

    return await fetch(`${API_BASE_URL}/search?query=${term}`)
      .then((response) => response.json())
      .then(
        (data) => dispatch(asyncFetchJokesSuccess(data.result)),
        (err) => {
          alert(err);
          dispatch(asyncFetchJokesError(err));
        }
      );
  };
};

/**
 * Select Category
 */
export const selectCategory = (name) => {
  return {
    type: Types.SELECT_CATEGORY,
    selectedCategory: name,
  };
};

/**
 * Deselect Category
 */
export const deselectCategory = () => {
  return {
    type: Types.DESELECT_CATEGORY,
  };
};

/**
 * Select a specific joke to open
 */
export const selectJoke = (id) => {
  return {
    type: Types.SELECT_JOKE,
    id
  };
};