import { useState, useEffect } from "react";

function useGeolocation() {
  const [location, setLocation] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          setLocation(null);
          setError(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
      setLocation(null);
      setError(new Error("Geolocation is not supported by your browser."));
    }
  }, []);

  return { location, error };
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useGeolocation;
