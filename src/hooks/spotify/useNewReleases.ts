import { useAppSelector } from "@/redux/hooks";
import { selectors } from "@/redux/spotify";
import { getNewReleases } from "@/services/spotify";
import { useCallback, useEffect, useRef, useState } from "react";
import { INewRelease } from "./type";

const useNewRelease = () => {
  const token = useAppSelector(selectors.token);
  const [newReleases, setNewReleases] = useState<INewRelease>();
  const [loading, setLoading] = useState<boolean>(false);
  const alreadyFetching = useRef(false);
  const prevToken = useRef("");

  const fetchNewReleases = useCallback(async () => {
    setLoading(true);
    const res = await getNewReleases(token);

    if (res.status === 200) setNewReleases(res.data);
    setLoading(false);
  }, [token]);

  useEffect(() => {
    if (alreadyFetching.current && prevToken.current === token.access_token)
      return;

    alreadyFetching.current = true;
    prevToken.current = token.access_token;

    if (token.access_token !== "") fetchNewReleases();
  }, [token, fetchNewReleases]);

  return { newReleases, fetchNewReleases, loading };
};

export default useNewRelease;
