import { initialState } from "./data";
import { RootState } from "../store";

const token = (state: RootState) => state.spotify.token || initialState.token;

const selectors = {
  token,
};

export default selectors;
