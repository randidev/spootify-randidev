import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./data";
import type { TSpotifyState } from "./models";

const SpotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<TSpotifyState>) => {
      state.token = payload.token;
    },
    resetToken: (state) => {
      state.token = initialState.token;
    },
  },
});

const { actions: SpotifyActions, reducer: SpotifyReducers } = SpotifySlice;

export { SpotifyActions, SpotifyReducers };
