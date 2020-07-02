import { combineReducers } from "redux";

import ToDoReducer from "./ToDoReducer";

export default combineReducers({
  todo: ToDoReducer,
});
