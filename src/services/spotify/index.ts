import {
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from "@/contants";
import spotifyAPI from "@/instances/spotifyAPI";
import spotifyAuth from "@/instances/spotifyAuth";
import { ISpotifyToken } from "@/redux/spotify/models";

export const getNewReleases = async (token: ISpotifyToken) => {
  return await spotifyAPI({
    url: "/browse/new-releases",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
};

export const getFeaturedPlaylists = async (token: ISpotifyToken) => {
  return await spotifyAPI({
    url: "/browse/featured-playlists",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
};

export const getCategories = async (token: ISpotifyToken) => {
  return await spotifyAPI({
    url: "/browse/categories",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
};

export const getToken = async () => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", SPOTIFY_CLIENT_ID || "");
  urlencoded.append("client_secret", SPOTIFY_CLIENT_SECRET || "");

  return await spotifyAuth({
    method: "POST",
    data: urlencoded,
  });
};
