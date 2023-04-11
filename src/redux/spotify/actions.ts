import type { TSpotifyState } from "./models";
import { SpotifyActions } from "./slices";
import { AppDispatch, AppThunk } from "../store";

const { setToken, resetToken } = SpotifyActions;

const callSetToken =
  (payload: TSpotifyState): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setToken(payload));
  };

const callResetToken = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(resetToken());
};

const actions = {
  callSetToken,
  callResetToken,
};

export default actions;
