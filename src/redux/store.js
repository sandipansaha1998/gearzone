import { createStore } from "redux";
import reducers from "./reducers";
// import thunk from "redux-thunk";

const store = createStore(
  reducers,
  {},

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
