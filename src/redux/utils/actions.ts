import type { ILoading } from "./models";
import { UtilsActions } from "./slices";
import { AppDispatch, AppThunk } from "../store";

const { setLoading } = UtilsActions;

const callSetLoading =
  (payload: ILoading): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setLoading(payload));
  };

const actions = {
  callSetLoading,
};

export default actions;
