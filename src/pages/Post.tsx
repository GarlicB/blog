import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

function Post() {
  const { state, pathname } = useLocation();
  const { path, idx } = state;
  const PostComponent = lazy(() => import(decodeURI(path)));

  return (
    <div style={{ maxWidth: "1920px", padding: "1rem" }}>
      <Suspense fallback={<div>loading...</div>}>
        <PostComponent key={idx} />
      </Suspense>
    </div>
  );
}

export default Post;
