import { combineReducers } from "redux";
import sampleReducer from "store/sample/reducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
