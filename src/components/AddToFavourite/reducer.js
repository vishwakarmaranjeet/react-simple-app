import {
  GET_SUCCESS,
  GET_ERROR,
  ADD_TO_FAVOURITE,
  REMOVE_TO_FAVOURITE,
  TAB_CHANGES,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return { ...state, productList: action.payload, isLoader: false };
    case GET_ERROR:
      return { ...state, isLoader: false };
    case ADD_TO_FAVOURITE:
      if (!state.favouriteList.includes(action.payload)) {
        return {
          ...state,
          favouriteList: [...state.favouriteList, action.payload],
        };
      } else {
        return { ...state };
      }
    case REMOVE_TO_FAVOURITE:
      const filteredProduct = state.favouriteList.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, favouriteList: filteredProduct };
    case TAB_CHANGES:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
