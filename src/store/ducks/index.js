import { combineReducers } from "redux";

import { reducer as movies } from "./movies";
import { reducer as auth } from "./auth";

export default combineReducers({
  movies,
  auth,
});
