import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [logger, thunk]

// store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
