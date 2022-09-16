import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

// useAxios hook takes in a given request configuration, and makes a request based on said configuration
const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(true);

  // sends a http request with the given request Config and sets the response hook according to the data it gets back
  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const resp = await axios.request(params);
      setResponse(resp);
    } catch (e) {
      const err = e as AxiosError;
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      axiosParams.method?.toLowerCase() === "get" ||
      axiosParams.method === undefined
    ) {
      fetchData(axiosParams);
    }
  }, [axiosParams]);

  const sendData = () => {
    fetchData(axiosParams);
  };

  return { response, error, loading, sendData };
};

export default useAxios;
