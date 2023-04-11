import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { actions, selectors } from "@/redux/spotify";
import { getToken } from "@/services/spotify";
import { useEffect, useRef } from "react";
import moment from "moment";
import useLoading from "../useLoading";

const useToken = () => {
  const token = useAppSelector(selectors.token);
  const dispatch = useAppDispatch();
  const { setLoading } = useLoading();
  const alreadyFetching = useRef(false);

  const getSpotifyToken = async () => {
    setLoading(true);
    const res = await getToken();

    if (res.status === 200)
      dispatch(
        actions.callSetToken({
          token: { ...res.data, last_updated: new Date() },
        })
      );

    setLoading(false);
  };

  useEffect(() => {
    if (alreadyFetching.current) return;
    alreadyFetching.current = true;

    const currentTime = moment(new Date());
    const lastUpdateTime = moment(token.last_updated);
    const diffHour = currentTime.diff(lastUpdateTime, "hours");

    const isTokenExpired = diffHour >= 1;
    const isTokenEmpty = token.access_token === "";

    if (isTokenEmpty || isTokenExpired) getSpotifyToken();
  }, [token]);

  return { token, getSpotifyToken };
};

export default useToken;
