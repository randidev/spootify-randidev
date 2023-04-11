import { combineReducers } from "@reduxjs/toolkit";

import { SpotifyReducers } from "./spotify/slices";
import { UtilsReducers } from "./utils/slices";

const reducers = combineReducers({
  spotify: SpotifyReducers,
  utils: UtilsReducers,
});

export default reducers;
