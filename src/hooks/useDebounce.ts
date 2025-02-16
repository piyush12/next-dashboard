import { useCallback, useRef } from "react";

function useDebounce<T extends unknown[]>(
  callBack: (...args: T) => void,
  delay: number = 200,
) {
  const timer = useRef<number | null>(null);

  const debouncedCallBack = useCallback(
    (...args: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        callBack(...args);
      }, delay);
    },
    [callBack, delay],
  );

  return debouncedCallBack;
}

export default useDebounce;
