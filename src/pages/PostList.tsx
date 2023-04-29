import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function getPosts() {
  const files = import.meta.glob("../posts/**/*.mdx");
  const posts = [];

  for (const path in files) {
    const file = await files[path]();
    posts.push({ path, file });
  }

  return posts.reverse();
}

function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Array<{ path: string; file: unknown }>>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const result = await getPosts();
      setPosts(result);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: "1.2rem 0" }}>
      {posts.map((post, i) => {
        const data = post.path.split("/");
        const year = data[2];
        const mmdd = data[3].slice(0, 3);

        return (
          <div
            key={i}
            onClick={() => {
              navigate(`posts/${i}`, {
                state: {
                  path: post.path,
                  idx: i,
                },
              });
            }}
            style={{
              borderBottom: "1px solid grey",
              fontWeight: "700",
              margin: "0 0 1.2rem 0",
              padding: "0.5rem",
            }}
          >
            <div>{data[3].slice(5, -4)}</div>
            <div
              style={{
                fontWeight: "200",
                fontSize: "12px",
                textAlign: "right",
              }}
            >{`${year}${mmdd}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
