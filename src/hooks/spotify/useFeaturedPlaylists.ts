import { useAppSelector } from "@/redux/hooks";
import { selectors } from "@/redux/spotify";
import { getFeaturedPlaylists } from "@/services/spotify";
import { useEffect, useRef, useState } from "react";
import { IFeaturedPlaylists } from "./type";

const useFeaturedPlaylists = () => {
  const token = useAppSelector(selectors.token);
  const [featuredPlaylists, setFeaturedPlaylists] =
    useState<IFeaturedPlaylists>();
  const [loading, setLoading] = useState<boolean>(false);
  const alreadyFetching = useRef(false);
  const prevToken = useRef("");

  const fetchFeaturedPlaylists = async () => {
    setLoading(true);
    const res = await getFeaturedPlaylists(token);

    if (res.status === 200) setFeaturedPlaylists(res.data);
    setLoading(false);
  };

  useEffect(() => {
    if (alreadyFetching.current && prevToken.current === token.access_token)
      return;

    alreadyFetching.current = true;
    prevToken.current = token.access_token;

    if (token.access_token !== "") fetchFeaturedPlaylists();
  }, [token]);

  return { featuredPlaylists, fetchFeaturedPlaylists, loading };
};

export default useFeaturedPlaylists;
