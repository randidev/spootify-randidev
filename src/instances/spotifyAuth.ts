import { SPOTIFY_AUTH_URL } from "@/contants";
import axios, { AxiosInstance } from "axios";

const spotifyAuth: AxiosInstance = axios.create({
  baseURL: SPOTIFY_AUTH_URL,
});

export default spotifyAuth;
