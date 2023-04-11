import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./data";
import type { ILoading } from "./models";

const UtilsState = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<ILoading>) => {
      state.loading = payload;
    },
  },
});

const { actions: UtilsActions, reducer: UtilsReducers } = UtilsState;

export { UtilsActions, UtilsReducers };
