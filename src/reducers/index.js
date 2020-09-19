import { combineReducers } from "redux";
import questions from "./questions";
import authedUser from "./authedUser";
import users from "./users";

//combining the reducers into one and exporting
export default combineReducers({
 questions,
 users,
 authedUser,
});
