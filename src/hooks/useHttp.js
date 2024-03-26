import { useState, useEffect, useCallback } from 'react';
import sendHttpRequest from '../util/http';

const useHttp = (url, confObj) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const clearData = () => {
    setData([]);
  };

  const sendRequest = useCallback(
    async function (reqBody) {
      setError(false); //////
      setIsLoading(true);
      try {
        // GET DATA
        if (!reqBody) {
          const respData = await sendHttpRequest(url, confObj);
          setData(respData);
        }
        // POST/SEND DATA
        if (reqBody) {
          const body = JSON.stringify({ order: reqBody });
          const respData = await sendHttpRequest(url, { ...confObj, body });
          setData(respData);
        }
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

  return { isLoading, data, error, sendRequest, clearData };
};

export default useHttp;
