import { combineReducers } from "redux";
import AuthUser from "./reducers/auth/auth.slice";

export const rootReducer = combineReducers({
  AuthUser,
});
