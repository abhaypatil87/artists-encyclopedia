import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

export function useDebouncedValue<T>(input: T, time = 500) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return debouncedValue;
}

export function useDebouncedCallback<T extends (...args: any) => any>(
  callback: T,
  wait?: number
) {
  return useMemo(() => debounce(callback, wait), [callback, wait]);
}
