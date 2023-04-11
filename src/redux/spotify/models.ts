export interface ISpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: string;
  last_updated: Date;
}

export type TSpotifyState = {
  token: ISpotifyToken;
};
