import { useState, useEffect, useCallback } from 'react';
import sendHttpRequest from '../util/http';

const useHttp = (url, confObj) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async function () {
      setIsLoading(true);
      try {
        const respData = await sendHttpRequest(url, confObj);
        setData(respData);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
      setIsLoading(false);
    },
    [url, confObj]
  );

  useEffect(() => {
    if (confObj.method !== 'POST') {
      sendRequest();
    }
  }, [confObj, sendRequest]);

  return { isLoading, data, error, sendRequest };
};

export default useHttp;
