import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

/**
 * Hook to manage state via URL search parameters
 */
export function useUrlState<T extends string>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = (searchParams.get(key) as T) || defaultValue;

  const setValue = useCallback(
    (newValue: T) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, newValue);
      setSearchParams(params);
    },
    [key, searchParams, setSearchParams],
  );

  return [value, setValue];
}
