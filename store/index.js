import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root/reducer";

const config = {
  key: "primary",
  storage,
};

const reducer = persistReducer(config, rootReducer);

export const intitializeStore = (init = {}) => {
  const store = createStore(reducer, init);
  const persistor = persistStore(store);
  return { store, persistor };
};
