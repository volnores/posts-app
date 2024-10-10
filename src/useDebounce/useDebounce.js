import { useEffect, useState } from "react";

export const useDebounce = (word, delay) => {
  const [debouncedWord, setDebouncedWord] = useState(word);
  useEffect(() => {
    const handlerTimeout = setTimeout(() => {
      setDebouncedWord(word);
    }, delay);

    return () => {
      clearTimeout(handlerTimeout);
    };
  }, [word, delay]);
  return debouncedWord;
};
