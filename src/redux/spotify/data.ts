import type { TSpotifyState } from "./models";

export const initialState: TSpotifyState = {
  token: {
    access_token: "",
    token_type: "",
    expires_in: "",
    last_updated: new Date(),
  },
};
