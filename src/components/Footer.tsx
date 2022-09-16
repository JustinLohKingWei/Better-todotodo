import { useState } from "react";
import { TaskConfig } from "../api/tasks";
import useAxios from "../hooks/useAxios";
import "../styles/Footer.css";
function Footer() {
  const [postID, setpostID] = useState(1);

  const { response, error, loading, sendData } = useAxios(TaskConfig(postID));

  const getNextPost = () => {
    setpostID(postID + 1);
    sendData();
  };

  return (
    <div className="footer-root">
      <h1 className="page-title">Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <article className="post">
          <h3 className="post-title">{response?.data.title}</h3>
          <p className="post-body">{response?.data.body}</p>
        </article>
      )}
      <button onClick={() => getNextPost()}>Next Article Please!</button>
    </div>
  );
}

export default Footer;
