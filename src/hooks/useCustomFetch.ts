import { useState, useEffect } from 'react';

const useCustomFetch = (url: RequestInfo) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const request = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const jsonData = await request.json();

        setData(jsonData);
        setIsLoading(false);
      } catch (fetchError: any) {
        setError(fetchError);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useCustomFetch;
