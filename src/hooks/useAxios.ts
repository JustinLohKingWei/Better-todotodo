import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const resp = await axios.request(axiosParams);
      setResponse(resp);
    } catch (e) {
      const err = e as AxiosError;
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

export default useAxios;
