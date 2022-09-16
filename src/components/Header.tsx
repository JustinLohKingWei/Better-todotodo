import "../styles/Header.css";
import { TaskConfig } from "../api/tasks";
import useAxios from "../hooks/useAxios";

function Header() {
  //Call the useAxios hook with a given request config
  const { response, error, loading } = useAxios(TaskConfig(1));
  return (
    <div className="header-root">
      {  // what to render during loading
      loading && <p>Loading...</p>}
      { // what to render during an error
      error && <p>{error.message}</p>}
      { // what to render if request is successful
      !loading && !error && (
        <article className="post">
          <h3 className="post-title">{response?.data.title}</h3>
          <p className="post-body">{response?.data.body}</p>
        </article>
      )}
    </div>
  );
}

export default Header;
