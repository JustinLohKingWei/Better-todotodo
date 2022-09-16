import { AxiosRequestConfig } from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com/posts/";

// Creates an axios request config to be used with the useAxiosHook
const TaskConfig = (id?:number): AxiosRequestConfig => {
  return {
    method: "get",
    url: BASEURL+id?.toString(),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

const TaskPostConfig: AxiosRequestConfig = {
  url: BASEURL,
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export { TaskConfig, TaskPostConfig };
