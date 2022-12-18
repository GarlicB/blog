import { useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Test from "../posts/2022/0101_테스트.mdx";

function Post() {
  const { state, pathname } = useLocation();
  //const path = state.post.replace("src", "..");

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        style={{
          maxWidth: "1920px",
          padding: "1rem",
        }}
      >
        <Test />
      </div>
    </Suspense>
  );
}

export default Post;
