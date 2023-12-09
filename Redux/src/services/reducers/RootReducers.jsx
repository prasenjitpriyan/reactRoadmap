import { combineReducers } from "redux";
import cardItems from "./Reducers";

const rootReducer = combineReducers({
  cardItems,
});

export default rootReducer;
