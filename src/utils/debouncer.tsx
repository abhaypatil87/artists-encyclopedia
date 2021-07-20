import { useState, useEffect } from "react";

function debouncer(value: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [debouncedValue, setDebouncedValue] = useState(value);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 800);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

export default debouncer;
