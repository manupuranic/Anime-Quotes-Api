import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, updateQuotes) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();
      updateQuotes(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);
  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;
