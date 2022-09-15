import "../styles/Header.css";
import TaskConfig from "../api/tasks";
import useAxios from "../hooks/useAxios";

function Header() {
  const {response, error, loading} = useAxios(TaskConfig);

  return (
    <div className="header-root">
      Header {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <article className="post">
          <h3 className="post-title">{response?.data.title}</h3>
          <p className="post-body">{response?.data.body}</p>
        </article>
      )}
    </div>
  );
}

export default Header;
