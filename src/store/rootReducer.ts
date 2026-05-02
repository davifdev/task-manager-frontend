import { combineReducers } from "redux";
import AuthUser from "./reducers/auth/auth.slice";
import TasksUser from "./reducers/tasks/tasks.slice";

export const rootReducer = combineReducers({
  AuthUser,
  TasksUser,
});
