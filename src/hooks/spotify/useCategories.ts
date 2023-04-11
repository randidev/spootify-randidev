import { useAppSelector } from "@/redux/hooks";
import { selectors } from "@/redux/spotify";
import { getCategories } from "@/services/spotify";
import { useEffect, useRef, useState } from "react";
import { ICategories } from "./type";

const useCategories = () => {
  const token = useAppSelector(selectors.token);
  const [categories, setCategories] = useState<ICategories>();
  const [loading, setLoading] = useState<boolean>(false);
  const alreadyFetching = useRef(false);
  const prevToken = useRef("");

  const fetchCategories = async () => {
    setLoading(true);
    const res = await getCategories(token);

    if (res.status === 200) setCategories(res.data);
    setLoading(false);
  };

  useEffect(() => {
    if (alreadyFetching.current && prevToken.current === token.access_token)
      return;

    alreadyFetching.current = true;
    prevToken.current = token.access_token;

    if (token.access_token !== "") fetchCategories();
  }, [token]);

  return { categories, fetchCategories, loading };
};

export default useCategories;
