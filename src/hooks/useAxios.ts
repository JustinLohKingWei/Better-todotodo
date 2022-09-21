import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
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
  // runs each time the component is rendered
  useEffect(() => {
    if (
      axiosParams.method?.toLowerCase() === "get" ||
      axiosParams.method === undefined
    ) {
      fetchData(axiosParams);
    }
  }, [axiosParams]);
  // manual trigger of the hook instead of waiting for a rerender
  const sendData = () => {
    fetchData(axiosParams);
  };

  return { response, error, loading, sendData };
};

export default useAxios;
