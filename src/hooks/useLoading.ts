import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { actions, selectors } from "@/redux/utils";
import { useCallback } from "react";

const useLoading = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectors.loading);

  const setLoading = useCallback(
    (state: boolean) => {
      dispatch(
        actions.callSetLoading({
          show: state,
        })
      );
    },
    [dispatch]
  );

  return { loading, setLoading };
};

export default useLoading;
