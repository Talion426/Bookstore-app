import { useEffect, useState } from "react";

export const useDebounce = (value = "", delay = 500) => {
  const [debounceValue, setDebounseValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounseValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debounceValue;
};
