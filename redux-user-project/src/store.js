import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Import redux-thunk middleware
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply middleware
export default store;
