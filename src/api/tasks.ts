import { AxiosRequestConfig } from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com/posts/1";

// Creates an axios configto be used
const TaskConfig : AxiosRequestConfig = {
  url: BASEURL,
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json",
  },
};

export default TaskConfig