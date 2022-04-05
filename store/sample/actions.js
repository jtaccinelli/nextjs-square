import { CLEAR, DECREMENT, INCREMENT } from "./types";

export const increment = (data) => ({
  type: INCREMENT,
  data,
});

export const decrement = (data) => ({
  type: DECREMENT,
  data,
});

export const clear = (data) => ({
  type: CLEAR,
});
