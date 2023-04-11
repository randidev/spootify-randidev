import { initialState } from "./data";
import { RootState } from "../store";

const loading = (state: RootState) =>
  state.utils.loading || initialState.loading;

const selectors = {
  loading,
};

export default selectors;
