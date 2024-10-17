import { useEffect, useState } from "react";

export const useDebounce = (word: string, delay: number) => {
  const [debouncedWord, setDebouncedWord] = useState<string>(word);
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
