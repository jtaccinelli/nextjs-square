import { CLEAR, DECREMENT, INCREMENT } from "./types";

export const initialState = {
  count: 0,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default sampleReducer;
