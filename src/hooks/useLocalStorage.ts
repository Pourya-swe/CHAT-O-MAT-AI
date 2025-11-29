import { useState, useEffect } from "react";

function useLocalStorageState<T>(key: string, initialState: T) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key as string);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key as string, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalStorageState;
