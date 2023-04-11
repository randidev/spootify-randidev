import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { actions, selectors } from "@/redux/utils";

const useLoading = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectors.loading);

  const setLoading = (state: boolean) => {
    dispatch(
      actions.callSetLoading({
        show: state,
      })
    );
  };

  return { loading, setLoading };
};

export default useLoading;
