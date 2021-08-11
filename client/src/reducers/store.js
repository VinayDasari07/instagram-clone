
import { createStore } from "redux";

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  if (action.type === "USER") {
    return { ...state, user: action.payload };
  }
  if (action.type === "CLEAR") {
    return null;
  }
  if (action.type === "UPDATE") {
    return {
      ...state,
      followers: action.payload.followers,
      following: action.payload.following,
    };
  }
  if (action.type === "UPDATEPIC") {
    return {
      ...state,
      pic: action.payload,
    };
  }
  return state;
};

export const store = createStore(reducer);
