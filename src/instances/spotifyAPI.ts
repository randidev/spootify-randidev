import { SPOTIFY_BASE_URL } from "@/contants";
import axios, { AxiosInstance } from "axios";

const spotifyAPI: AxiosInstance = axios.create({
  baseURL: SPOTIFY_BASE_URL,
});

export default spotifyAPI;
