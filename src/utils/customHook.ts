import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error loading "${key}" from local storage: ${error}`);

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error saving "${key}" to local storage: ${error}`);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
