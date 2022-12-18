import { useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

function Post() {
  const { state, pathname } = useLocation();
  const path = state.post.replace("src", "..");
  const Login = lazy(() => {
    return import(path);
  });

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        style={{
          maxWidth: "1920px",
          padding: "1rem",
        }}
      >
        <Login />
      </div>
    </Suspense>
  );
}

export default Post;
