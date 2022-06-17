import { useCallback, useEffect, useRef } from "react";

export const usePrevIndex = (value: number) => {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export function useThrottle(fn: (event: React.WheelEvent) => void, delay: number, dep: any[]) {
  const { current } = useRef<{ fn: (event: React.WheelEvent) => void; timer: any }>({
    fn,
    timer: null,
  });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  return useCallback(function f(event: React.WheelEvent) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn(event);
    }
  }, dep);
}
